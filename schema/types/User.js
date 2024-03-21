const { GraphQLString, GraphQLObjectType } = require('graphql')
const { NameOutputType } = require('./Name')
const PictureType = require('./Picture')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: NameOutputType
    },
    picture: {
      type: PictureType
    },
    gender: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    },
    dob: {
      type: GraphQLString
    }
  }
})

module.exports = UserType
