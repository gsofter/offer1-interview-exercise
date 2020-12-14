import jwt from 'jsonwebtoken'
import mock from '../mock'
import buildings from '../../../../homes.json'
console.log('buildings', buildings)
mock.onGet('/api/building').reply((request) => {
  // TODO: check authentication
  console.log(JSON.parse(request.header))
  return [200, buildings]
})
