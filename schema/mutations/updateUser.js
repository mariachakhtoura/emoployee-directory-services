const { GraphQLNonNull, GraphQLString } = require('graphql')
const UserType = require('../types/User')
const { NameInputType } = require('../types/Name')
const USERS = require('../../mock_data/users')

const updateUser = {
  name: 'updateUser',
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: NameInputType
    },
    email: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    }
  },
  resolve (parent, args) {
    const { id, name } = args
    const userIndex = USERS.findIndex((user) => user.id === id)
    if (userIndex < 0) {
      return 'User does not exist'
    }

    USERS[userIndex] = {
      ...USERS[userIndex],
      ...args,
      name: {
        ...USERS[userIndex].name,
        ...name
      }
    }
    return USERS[userIndex]
  }
}

module.exports = updateUser
