import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Room from '../components/Room';

export default function HomeScreen() {
const [rooms, setRoom] = useState([]);
const [loading, setLoading] = useState();
const [error, setError] = useState();
  async function fetchdata() {

    try {
      setLoading(true);
      const data = await axios.get('/api/rooms/get_all_rooms')
      console.log("Rooms data ", data.data);
      setRoom(data.data)
      setLoading(false)

    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
      
    }
  }

 useEffect(  () => {

  fetchdata()
  }, [])
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        rooms.map(room => {
          return <div>
            <Room room = {room}/>
            </div> // Assuming each room has a unique id
        })
      )}
    </div>
  )
}
