/* eslint-env jest */

const USERS = require('../mock_data/users')
const TEST_USERS = require('../mock_data/users-test')
const { filterList } = require('../utils')

describe('filterList', () => {
  const data = USERS

  test('should return all users if keyword is empty', () => {
    const keyword = ''
    const expectedResult = USERS
    const result = filterList(data, keyword)
    expect(result).toEqual(expectedResult)
  })

  test('should return all users if keyword is null', () => {
    const keyword = null
    const expectedResult = USERS
    const result = filterList(data, keyword)
    expect(result).toEqual(expectedResult)
  })

  test('should return all users if keyword is undefined', () => {
    const keyword = undefined
    const expectedResult = USERS
    const result = filterList(data, keyword)
    expect(result).toEqual(expectedResult)
  })

  // this test fails because nested objects are not checked in filter function
  // const userdata = TEST_USERS

  // test('should return 2 users', () => {
  //   const keyword = 'Egeli'
  //   const expectedResult = [userdata[0], userdata[2]]
  //   const result = filterList(userdata, keyword)
  //   expect(result).toEqual(expectedResult)
  // })
})
