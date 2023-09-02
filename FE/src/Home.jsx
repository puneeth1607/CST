import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'
import style from './Style.module.css'

const Home = () => {
  let [data, setData] = useState([])

  let count = data.length
  useEffect(() => {
    axios.get('http://localhost:10/userdata')
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
  }, [])
  return (
    <div>
      <Nav />
      <br />

      <br />

      <div className={style.Alist}>

        <div className={style.hdiv}>
          <h1>WELCOMEE ADMIN PANEL </h1>
          <br /><br /><br />
          <div style={{ border: '2px solid white', textAlign: 'right' }}> <h1>REGISTRATIONS </h1>
            <h1> {count}</h1></div>
        </div>
      </div>
    </div>
  )
}

export default Home