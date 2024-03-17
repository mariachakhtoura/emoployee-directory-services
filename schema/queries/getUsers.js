const { GraphQLList } = require('graphql')
const UserType = require('../types/User')
const USERS = require('../../mock_data/users')

const getUsers = {
  name: 'getUsers',
  type: new GraphQLList(UserType),
  resolve: () => {
    return USERS
  }
}

module.exports = getUsers
