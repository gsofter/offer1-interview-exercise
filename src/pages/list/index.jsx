import React, { useState, useEffect } from 'react'
import RoomList from './RoomList'
import * as api from '../../services/api'

const RoomListWrapper = () => {
  const [buildings, setBuildings] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const res = await api.getAllBuildings()
      console.log('res =>', res)
      setBuildings(res)
      setLoading(false)
    }

    fetch()
  }, [])
  return <RoomList buildings={buildings} />
}
export default RoomListWrapper
