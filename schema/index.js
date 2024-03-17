const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const USERS = require('../mock_data/users');
const UserType = require('./types/User');

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getUsers: {
      type: new GraphQLList(UserType),
      resolve: () => {
        return USERS;
      },
    },
    getUserById: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parent, args) {
        return USERS.filter((user) => user.id === args.id)?.[0];
      },
    },
  },
});

const schema = new GraphQLSchema({
  query,
});

module.exports = schema;
