const { GraphQLList } = require('graphql')
const UserType = require('../types/User')
const PaginationType = require('../types/Pagination')
const USERS = require('../../mock_data/users')

const getUsers = {
  name: 'getUsers',
  type: new GraphQLList(UserType),
  args: {
    pagination: {
      type: PaginationType
    }
  },
  resolve: (parent, args) => {
    if (!args?.pagination) {
      return USERS
    }

    const { pageSize, pageNumber } = args.pagination
    if (typeof pageSize !== 'number' || typeof pageNumber !== 'number' || pageSize < 1 || pageNumber < 1) {
      return []
    }

    const users = paginate(USERS, pageSize, pageNumber)
    return users
  }
}

function paginate (array, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize
  const endIndex = startIndex + pageSize

  return array.slice(startIndex, endIndex)
}

module.exports = getUsers
