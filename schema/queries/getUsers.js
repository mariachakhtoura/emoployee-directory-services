const { GraphQLList } = require('graphql')
const UserType = require('../types/User')
const PaginationType = require('../types/Pagination')
const USERS = require('../../mock_data/users')
const FilterType = require('../types/Filter')

const getUsers = {
  name: 'getUsers',
  type: new GraphQLList(UserType),
  args: {
    pagination: {
      type: PaginationType
    },
    filter: {
      type: FilterType
    }
  },
  resolve: (parent, args) => {
    const { pagination, filter } = args
    let users = USERS

    if (filter?.keyword) {
      users = filterList(USERS, filter.keyword)
    }

    if (!args?.pagination) {
      return users
    }

    const { pageSize, pageNumber } = pagination
    if (
      typeof pageSize !== 'number' ||
      typeof pageNumber !== 'number' ||
      pageSize < 1 ||
      pageNumber < 1
    ) {
      return []
    }

    users = paginateList(users, pageSize, pageNumber)
    return users
  }
}

function filterList (array, keyword = '') {
  return array.filter((item) => {
    const itemValues = Object.values(item)
    return itemValues.some(
      (value) => value?.toString().toLowerCase().includes(keyword.toLowerCase())
    )
  })
}

function paginateList (array, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize
  const endIndex = startIndex + pageSize

  return array.slice(startIndex, endIndex)
}

module.exports = getUsers
