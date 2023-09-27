import { nanoid } from 'nanoid';
import { ConnectionHandler, RecordProxy, RecordSourceSelectorProxy } from 'relay-runtime';

export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object';
}

type ListRecordRemoveUpdaterOptions = {
  parentId: string;
  itemId: string;
  parentFieldName: string;
  store: RecordSourceSelectorProxy;
};

type ListRecordAddUpdaterOptions = {
  parentId: string;
  item: Record<string, any>;
  type: string;
  parentFieldName: string;
  store: RecordSourceSelectorProxy;
};

type OptimisticConnectionUpdaterOptions = {
  parentId: string;
  store: RecordSourceSelectorProxy;
  connectionName: string;
  item: Record<string, any>;
  customNode: RecordProxy;
  itemType: string;
};

type ConnectionDeleteEdgeUpdaterOptions = {
  parentId: string;
  connectionName: string;
  nodeId: string;
  store: RecordSourceSelectorProxy;
};

type CopyObjScalarsToProxyOptions = {
  object: Record<string, any>;
  proxy: RecordProxy;
};

export const ClientMutationID = nanoid();

export function listRecordRemoveUpdater({
  parentId,
  itemId,
  parentFieldName,
  store,
}: ListRecordRemoveUpdaterOptions): void {
  const parentProxy = store.get(parentId);
  const items = parentProxy.getLinkedRecords(parentFieldName);

  parentProxy.setLinkedRecords(
    items.filter((record: any) => record.dataID !== itemId),
    parentFieldName,
  );
}

export function listRecordAddUpdater({
  parentId,
  item,
  type,
  parentFieldName,
  store,
}: ListRecordAddUpdaterOptions): void {
  const node = store.create(item.id, type);

  Object.keys(item).forEach((key) => {
    node.setValue(item[key], key);
  });

  const parentProxy = store.get(parentId);
  const items = parentProxy.getLinkedRecords(parentFieldName);

  parentProxy.setLinkedRecords([...items, node], parentFieldName);
}

export function connectionUpdater(
  store: RecordSourceSelectorProxy,
  parentId: string,
  connectionName: string,
  edge: RecordProxy,
  before = false,
): void {
  if (edge) {
    const parentProxy = store.get(parentId);
    const conn = ConnectionHandler.getConnection(parentProxy, connectionName);
    if (!conn) {
      return;
    }

    if (before) {
      ConnectionHandler.insertEdgeBefore(conn, edge);
    } else {
      ConnectionHandler.insertEdgeAfter(conn, edge);
    }
  }
}

export function optimisticConnectionUpdater({
  parentId,
  store,
  connectionName,
  item,
  customNode,
  itemType,
}: OptimisticConnectionUpdaterOptions): void {
  const node = customNode || store.create(item.id, itemType);

  !customNode &&
    Object.keys(item).forEach((key) => {
      node.setValue(item[key], key);
    });

  const edge = store.create(`client:newEdge:${String(node.getDataID).match(/[^:]+$/)[0]}`, `${itemType}Edge`);
  edge.setLinkedRecord(node, 'node');

  connectionUpdater(store, parentId, connectionName, edge);
}

export function connectionDeleteEdgeUpdater({
  parentId,
  connectionName,
  nodeId,
  store,
}: ConnectionDeleteEdgeUpdaterOptions): void {
  const parentProxy = store.get(parentId);
  const conn = ConnectionHandler.getConnection(parentProxy, connectionName);

  if (!conn) {
    console.warn(`Connection ${connectionName} not found on ${parentId}`);
    return;
  }

  ConnectionHandler.deleteNode(conn, nodeId);
}

export function copyObjScalarsToProxy({ object, proxy }: CopyObjScalarsToProxyOptions): void {
  Object.keys(object).forEach((key) => {
    if (isObject(object[key]) || Array.isArray(object[key])) return;
    proxy.setValue(object[key], key);
  });
}
