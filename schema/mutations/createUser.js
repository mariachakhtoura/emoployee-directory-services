const { v4: uuid } = require('uuid')
const { GraphQLList, GraphQLNonNull, GraphQLString } = require('graphql')
const UserType = require('../types/User')
const { NameInputType } = require('../types/Name')
const USERS = require('../../mock_data/users')

const createUser = {
  name: 'createUser',
  type: new GraphQLList(UserType),
  args: {
    name: {
      type: new GraphQLNonNull(NameInputType)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    gender: {
      type: GraphQLString
    },
    dob: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    }
  },
  resolve (parent, args) {
    const { name, email, gender, dob, country } = args
    const user = {
      id: uuid(),
      name,
      email,
      gender,
      dob,
      country
    }
    USERS.push(user)
    return USERS
  }
}

module.exports = createUser
