const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: null,
  rootValue: {}
}));

app.get('/', (req, res) => {
  res.send('test')
});

app.listen(3000);
