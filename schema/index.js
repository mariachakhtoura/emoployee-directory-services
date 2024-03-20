const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const getUsers = require('./queries/getUsers')
const getUsersByCategory = require('./queries/getUsersByCategory')
const getUserById = require('./queries/getUserById')
const getUserByEmail = require('./queries/getUserByEmail')
const getCategoryValues = require('./queries/getCategoryValues')
const createUser = require('./mutations/createUser')
const updateUser = require('./mutations/updateUser')
const deleteUser = require('./mutations/deleteUser')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUsers,
    getUsersByCategory,
    getUserById,
    getUserByEmail,
    getCategoryValues
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
