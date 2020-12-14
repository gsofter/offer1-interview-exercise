import jwt from 'jsonwebtoken'
import mock from '../mock'
import buildings from '../../../../homes.json'
console.log('buildings', buildings)
mock.onGet('/api/buildings').reply((request) => {
  // TODO: check authentication
  console.log('/api/buildings request => ', request)
  return [200, buildings]
})

mock.onGet('/api/building').reply((request) => {
  // TODO: check authentication
  console.log('/api/building request => ', request)
  const roomId = request.params.roomId
  console.log('/api/building request => ', roomId)
  const building = buildings.find((b) => b.id == roomId)
  console.log('/api/building building => ', building)
  return [200, building]
})
