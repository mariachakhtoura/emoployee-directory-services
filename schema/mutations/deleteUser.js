const { GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql')
const UserType = require('../types/User')
const USERS = require('../../mock_data/users')

const deleteUser = {
  name: 'deleteUser',
  type: new GraphQLList(UserType),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve (parent, args) {
    const { id } = args
    const userIndex = USERS.findIndex((user) => user.id === id)
    if (userIndex < 0) {
      return 'User does not exist'
    }

    USERS.splice(userIndex, 1)
    return USERS
  }
}

module.exports = deleteUser
