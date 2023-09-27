const dataJson = require('./db.json');

const { fromGlobalId } = require('graphql-relay');

const CURRENT_USER = 'VXNlcjoz';

module.exports = {
  getViewer: () => {
    const { id: viewerId } = fromGlobalId(CURRENT_USER);

    return dataJson.users.find(({ id }) => id === Number(viewerId));
  },

  getUser: (userId) => dataJson.users.find(({ id }) => id === userId),

  getUsers: () => dataJson.users,

  getRace: (raceId) => dataJson.races.find(({ id }) => id === raceId),

  getRaces: (id) => dataJson.races.filter(({ userId }) => userId === id),

  getGoals: (id) => dataJson.goals.filter(({ userId }) => userId === id),
};
