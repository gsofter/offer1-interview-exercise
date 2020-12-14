import jwt from 'jsonwebtoken'
import mock from '../mock'
import buildings from '../../../../homes.json'
console.log('buildings', buildings)
mock.onGet('/api/buildings').reply((request) => {
  // TODO: check authentication
  console.log('/api/buildings request => ', request)
  return [200, buildings]
})
