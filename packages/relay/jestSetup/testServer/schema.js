/* eslint-disable no-use-before-define */
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const {
  globalIdField,
  fromGlobalId,
  nodeDefinitions,
  connectionDefinitions,
  connectionArgs,
  connectionFromArray,
} = require('graphql-relay');

const db = require('./db');

const { nodeInterface, nodeField, nodesField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'User') return db.getUser(id);
    if (type === 'Race') return db.getRace(id);
    return null;
  },
  (obj) => {
    if (obj.email) {
      return UserType;
    }
    if (obj.time) {
      return RaceType;
    }
    return null;
  },
);

const RaceType = new GraphQLObjectType({
  name: 'Race',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('Race'),
    date: { type: GraphQLString, description: 'Date of the race' },
    type: { type: GraphQLString, description: 'Type of race' },
    time: { type: GraphQLString, description: 'Finish time of the race' },
    user: {
      type: UserType,
      resolve: (source) => db.getUser(source.userId),
    },
  }),
});

const { connectionType: raceConnection } = connectionDefinitions({
  nodeType: RaceType,
});

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user who loves to run',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    username: { type: GraphQLString, description: 'The name of the user' },
    email: { type: GraphQLString },
    races: {
      type: raceConnection,
      description: 'The races for a specific user',
      args: connectionArgs,
      resolve: async (user, args) => {
        const userRaces = await db.getRaces(user.id);
        return connectionFromArray([...userRaces], args);
      },
    },
  }),
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: (_, args) => {
        const { id } = fromGlobalId(args.id);
        return db.getUser(id);
      },
    },
    race: {
      type: RaceType,
      args: { id: { type: GraphQLID } },
      resolve: (_, args) => {
        const { id } = fromGlobalId(args.id);
        return db.getRace(id);
      },
    },
    viewer: {
      type: UserType,
      resolve: () => db.getViewer(),
    },
    node: nodeField,
    nodes: nodesField,
  }),
});

module.exports = new GraphQLSchema({
  query: queryType,
  // mutation: mutationType,
});
