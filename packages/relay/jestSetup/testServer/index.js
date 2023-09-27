const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();
app.use(express.json());

const graphqlHandler = graphqlHTTP({
  schema,
  graphiql: false,
});

// request test delay
app.use(
  '/graphql/delay/:time',
  (req, _, next) => {
    const delay = Number(req.params.time);

    setTimeout(next, delay);
  },
  graphqlHandler,
);

// request test failure
let failTimeTotal = 2;
let failCount = 0;

app.use(
  '/graphql/fail/',
  (req, res, next) => {
    const delay = Number(req.params.time);

    if (failCount < failTimeTotal) {
      res.sendStatus(500);
      failCount++;
    } else {
      failCount = 0;
      next();
    }
  },
  graphqlHandler,
);

app.use('/graphql', graphqlHandler);

// 404 handler
app.use((req, res) => {
  res.sendStatus(404);
});

module.exports = app;
