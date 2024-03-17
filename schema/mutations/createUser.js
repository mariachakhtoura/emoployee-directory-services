const { v4: uuid } = require('uuid')
const { GraphQLNonNull, GraphQLString } = require('graphql')
const UserType = require('../types/User')
const { NameInputType } = require('../types/Name')
const USERS = require('../../mock_data/users')

const createUser = {
  name: 'createUser',
  type: UserType,
  args: {
    name: {
      type: new GraphQLNonNull(NameInputType)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    gender: {
      type: GraphQLString
    }
  },
  resolve (parent, args) {
    const { name, email, gender } = args
    const user = {
      id: uuid(),
      name,
      email,
      gender
    }
    USERS.push(user)
    return user
  }
}

module.exports = createUser
