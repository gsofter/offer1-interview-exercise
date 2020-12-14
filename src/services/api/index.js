import apiClient from '../axios'

export async function getAllBuildings() {
  return apiClient
    .get('/api/buildings')
    .then((response) => {
      return response.data || []
    })
    .catch((err) => console.log(err))
}
