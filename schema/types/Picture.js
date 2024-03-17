const { GraphQLString, GraphQLObjectType } = require('graphql');

const PictureType = new GraphQLObjectType({
  name: 'Picture',
  fields: {
    large: {
      type: GraphQLString,
    },
    medium: {
      type: GraphQLString,
    },
    thumbnail: {
      type: GraphQLString,
    },
  },
});

module.exports = PictureType
