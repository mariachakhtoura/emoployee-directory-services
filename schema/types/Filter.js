const { GraphQLInputObjectType, GraphQLString } = require('graphql')

const FilterType = new GraphQLInputObjectType({
  name: 'Filter',
  fields: {
    keyword: {
      type: GraphQLString
    }
  }
})

module.exports = FilterType
