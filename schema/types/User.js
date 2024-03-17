const { GraphQLString, GraphQLObjectType } = require('graphql');
const NameType = require('./Name');
const PictureType = require('./Picture');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString,
    },
    name: {
      type: NameType,
    },
    picture: {
      type: PictureType,
    },
    gender: {
      type: GraphQLString
    },
  },
});

module.exports = UserType
