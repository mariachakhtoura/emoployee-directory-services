const { GraphQLList, GraphQLNonNull, GraphQLString } = require('graphql')
const USERS = require('../../mock_data/users')

const getCategoryValues = {
  name: 'getCategoryValues',
  type: new GraphQLList(GraphQLString),
  args: { category: { type: new GraphQLNonNull(GraphQLString) } },
  resolve (parent, args) {
    return new Set(USERS.map((user) => user[args.category]))
  }
}

module.exports = getCategoryValues
