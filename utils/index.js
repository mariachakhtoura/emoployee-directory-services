function filterList (array, keyword = '') {
  if (keyword === null) return array
  return array.filter((item) => {
    const itemValues = Object.values(item)
    return itemValues.some((value) => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(keyword.toLowerCase())
      } else if (typeof value === 'object' && value !== null) {
        // check for nested object
      }

      return value?.toString().toLowerCase().includes(keyword.toLowerCase())
    })
  })
}

function paginateList (array, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize
  const endIndex = startIndex + pageSize

  return array.slice(startIndex, endIndex)
}

module.exports = { filterList, paginateList }
