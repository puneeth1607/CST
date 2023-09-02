import React, { useState } from 'react'
import style from './Style.module.css'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
let [name ,setName]= useState('') 
let [password ,setPassword]= useState('') 
let navigate = useNavigate()



let login=(()=>{
  let data ={name,password}
  axios.post('http://localhost:10/login',data)
  .then((res) => {
    if (res.data.status === 200) {
      alert(res.data.message)
      navigate('/home')
    } else {
      alert(res.data.message)
    }
  })
})

  return (
    <div>
        <section className={style.body}> 
        <div id={style.card}>
         <div style={{width:"300px",margin:"20px",display:"flex",flexFlow:"column",alignItems:"center"}} > <label htmlFor="">UserName :</label> <input type="text"style={{width:"100%",outline:"none",background:"none"}} onChange={e=> setName(e.target.value)} /> </div> 
        <div style={{width:"300px",margin:"20px",display:"flex",flexFlow:"column",alignItems:"center"}} > <label htmlFor="">Password :</label> <input type="text" style={{width:"100%",outline:"none",background:"none"}} onChange={e=> setPassword(e.target.value)} /> </div> 
        <div style={{ width: "300px", margin: "20px", display: "flex", flexFlow: "column", alignItems: "center" }} > <button style={{ backgroundColor: "red", height: "40px", width: "100px" }} onClick={login}>SUBMIT</button> </div>
       
         <div style={{width:"300px",margin:"20px",display:"flex",flexFlow:"column",alignItems:"center"}} > <p style={{color:"red"}}>please contact the admin to create a account</p></div> 
       
        </div>
        </section>
    </div>
  )
}

export default Login