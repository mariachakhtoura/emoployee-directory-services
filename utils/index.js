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

function capitalizeFirstLetter (text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createCaseInsensitiveSet (values) {
  const caseInsensitiveSet = new Set()
  values.forEach(value => {
    const normalizedValue = value.toLowerCase()
    caseInsensitiveSet.add(capitalizeFirstLetter(normalizedValue))
  })
  return caseInsensitiveSet
}

module.exports = { filterList, paginateList, createCaseInsensitiveSet }
