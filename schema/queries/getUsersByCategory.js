const { GraphQLList, GraphQLNonNull, GraphQLString } = require('graphql')
const UserType = require('../types/User')
const USERS = require('../../mock_data/users')

const getUsersByCategory = {
  name: 'getUsersByCategory',
  type: new GraphQLList(UserType),
  args: {
    category: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve (parent, args) {
    return USERS.filter((user) => user[args.category] === args.value)
  }
}

module.exports = getUsersByCategory
