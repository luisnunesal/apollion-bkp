type useDragHookArg = {
  accept?: string[];
  single?: boolean;
  onDragOver?: () => void;
  onDragLeave?: () => void;
  onDrop?: (files: File[]) => void;
};

export type DragEvents = {
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
};

export type useDragHookInterface = (opt: useDragHookArg) => {
  isDragging: boolean;
  events: DragEvents;
};
