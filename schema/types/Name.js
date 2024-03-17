const { GraphQLString, GraphQLObjectType } = require('graphql');

const NameType = new GraphQLObjectType({
  name: 'Name',
  fields: {
    title: {
      type: GraphQLString,
    },
    first: {
      type: GraphQLString,
    },
    last: {
      type: GraphQLString,
    },
  },
});

module.exports = NameType