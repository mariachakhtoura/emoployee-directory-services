const { GraphQLNonNull, GraphQLString } = require('graphql')
const UserType = require('../types/User')
const USERS = require('../../mock_data/users')

const getUserById = {
  name: 'getUserById',
  type: UserType,
  args: { id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve (parent, args) {
    return USERS.filter((user) => user.id === args.id)?.[0]
  }
}

module.exports = getUserById
