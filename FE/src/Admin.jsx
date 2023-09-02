
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import style from './Style.module.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'
const Admin = () => {
  let [data, setData] = useState([])
  
  let count = data.length
  useEffect(() => {
    axios.get('http://localhost:10/userdata')
      .then((res) => {
        setData(res.data) 
        console.log(res.data)
      })
  }, [])

   // delete the data
 let deletedata=(value)=>{
  axios.delete(`http://localhost:10/userdata/${value}`)
  .then((res)=>{
   if (res.data.udpadted_task) {
      alert("deleted sucessfully")
      
      window.location.assign("/admin")
   } else {
      alert(res.data.error)
   }     

  })
}
  return (
    <div>
      <Nav />
      <br />

      <section className={style.Alist}>
        <div id={style.Ahdata}>
          <div>total count : {count}</div>
          <Link to='/register' style={{
            backgroundColor: 'gray',
            width: '200px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} >create user</Link>
        </div>
        <div id={style.Ahdata}>
          <div style={{ width: '100px', height: "90%", }}>unique id</div>
          <div style={{ width: '150px', height: "90%", }}> Image</div>
          <div style={{ width: '250px', height: "90%", }}> Name</div>
          <div style={{ width: '200px', height: "90%", }}>Email</div>
          <div style={{ width: '50px', height: "90%", }}>Mobile NO</div>
          <div style={{ width: '50px', height: "90%", }}>Des</div>
          <div style={{ width: '70px', height: "90%", }}>Gender</div>
          <div style={{ width: '70px', height: "90%", }}>course</div>
          <div style={{ width: '200px', height: "90%", }}> Action</div>
        </div>


        {data.map((x) => {
          return (
            <div id={style.Adata}>
              <div style={{ width: '150px', height: "90%", border: '1px solid black' }}>{x._id}</div>
              <div style={{ width: '150px', height: "90%", border: '1px solid black' }}><img style={{height:'90%',}} src={x.image}/></div>
              <div style={{ width: '100px', height: "90%", border: '1px solid black' }}>{x.name}</div>
              <div style={{ width: '200px', height: "90%", border: '1px solid black' }}>{x.email}</div>
              <div style={{ width: '150px', height: "90%", border: '1px solid black' }}>{x.mobile}</div>
              <div style={{ width: '50px', height: "90%", border: '1px solid black' }}>{x.designation}</div>
              <div style={{ width: '70px', height: "90%", border: '1px solid black' }}>{x.gender}</div>
              <div style={{ width: '70px', height: "90%", border: '1px solid black' }}>{x.cource}</div>
              <div style={{ width: '200px', height: "90%", border: '1px solid black'}}> 
              <Link to={`/edit/${x._id}`}  style={{marginRight:'20px'}}>Edit</Link>
               <Link onClick={()=>deletedata(x._id)}>Delete</Link></div>
            </div>
          )
        })}




      </section>


    </div>
  )
}

export default Admin