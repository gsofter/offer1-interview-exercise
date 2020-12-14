import React, { useState, useEffect, useCallback } from 'react'
import RoomList from './RoomList'
import * as api from '../../services/api'

const RoomListWrapper = () => {
  const [buildings, setBuildings] = useState([])
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchBuildings = useCallback(async () => {
    const res = await api.getAllBuildings()
    setBuildings(res)
  })

  const fetchCities = useCallback(async () => {
    const res = await api.getCities()
    setCities(res)
  })
  useEffect(() => {
    fetchBuildings()
    fetchCities()
  }, [])
  return <RoomList buildings={buildings} cities={cities} />
}
export default RoomListWrapper
