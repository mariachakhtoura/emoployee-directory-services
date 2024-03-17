const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType
} = require('graphql')

const NameInputType = new GraphQLInputObjectType({
  name: 'NameInput',
  fields: {
    title: {
      type: GraphQLString
    },
    first: {
      type: GraphQLString
    },
    last: {
      type: GraphQLString
    }
  }
})

const NameOutputType = new GraphQLObjectType({
  name: 'Name',
  fields: {
    title: {
      type: GraphQLString
    },
    first: {
      type: GraphQLString
    },
    last: {
      type: GraphQLString
    }
  }
})

module.exports = { NameInputType, NameOutputType }
