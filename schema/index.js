const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const getUsers = require('./queries/getUsers')
const getUserById = require('./queries/getUserById')
const createUser = require('./mutations/createUser')
const updateUser = require('./mutations/updateUser')
const deleteUser = require('./mutations/deleteUser')
const getUserByEmail = require('./queries/getUserByEmail')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUsers,
    getUserById,
    getUserByEmail
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser,
    updateUser,
    deleteUser
  }
})

const schema = new GraphQLSchema({
  query,
  mutation
})

module.exports = schema
