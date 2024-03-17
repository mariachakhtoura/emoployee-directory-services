const { GraphQLInt, GraphQLNonNull, GraphQLInputObjectType } = require('graphql')

const PaginationType = new GraphQLInputObjectType({
  name: 'Pagination',
  fields: {
    pageSize: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    pageNumber: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
})

module.exports = PaginationType
