import React, { useState } from 'react'
import style from './Style.module.css'
import axios from "axios"
import Nav from './Nav'
const Register = () => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [mobile, setMobile] = useState('')
  let [designation, setDesignation] = useState('')
  let [cource, setCource] = useState('')
  let [gender, setGender] = useState('')
  let [image, changeImage] = useState('')
  let [password, setPassword] = useState('')
  let imageChange = (params) => {
    let reader = new FileReader()
    reader.readAsDataURL(params.target.files[0])
    reader.onload = () => {
      changeImage(reader.result)
    }
    reader.onerror = (error) => {
      console.log("Error", error);
    }
  }


  let BCA = "BCA"
  let MCA = "MCA"
  let BSC = "BSC"
  let male = "male"
  let female = "female"
  let sales = "sales"
  let HR = "HR"
  let Operstions = "Operstions"

  let request = ((e) => {
    e.preventDefault()
    let data = { name, email, mobile, designation, gender, cource, image, password }
    if (data) {
      axios.post('http://localhost:10/register', data)
        .then((res) => {
          alert(res.data.message)
          console.log(data)
        })
        .catch(() => {
          alert('invalid credentials')
        })

    }
  })




  return (
    <div>
      <Nav />
      <section className={style.body}>
        <div id={style.card}>
          <div style={{ width: "300px", margin: "20px", display: "flex", flexFlow: "column", alignItems: "center" }} > <h1>REGISTER</h1> </div>
          <div style={{ width: "300px", margin: "20px", display: "flex", flexFlow: "column", alignItems: "center" }} > <label htmlFor="">Name :</label> <input type="text" style={{ width: "100%", outline: "none", background: "none" }} onChange={e => setName(e.target.value)} /> </div>
          <div style={{ width: "300px", margin: "20px", display: "flex", flexFlow: "column", alignItems: "center" }} > <label htmlFor="">Email :</label> <input type="email" style={{ width: "100%", outline: "none", background: "none" }} onChange={e => setEmail(e.target.value)} /> </div>
          <div style={{ width: "300px", margin: "20px", display: "flex", flexFlow: "column", alignItems: "center" }} > <label htmlFor="">Mobile NO :</label> <input type="text" style={{ width: "100%", outline: "none", background: "none" }} onChange={e => setMobile(e.target.value)} /> </div>
          <div style={{ width: "300px", margin: "20px", display: "flex", flexFlow: "column", alignItems: "center" }} > <label htmlFor="">Password :</label> <input type="text" style={{ width: "100%", outline: "none", background: "none" }} onChange={e => setPassword(e.target.value)} /> </div>

          <div style={{ width: "300px", margin: "20px" }} >
            <label htmlFor="">Designation : </label>
            <select name="" id="" style={{ color: "black" }} value={designation} onChange={e => setDesignation(e.target.value)}  >
              <option style={{ color: "black" }} onChange={e => setDesignation(e.target.value)} >select</option>
              <option style={{ color: "black" }} value={sales} onChange={e => setDesignation(e.target.value)} >Sales</option>
              <option value={HR} style={{ color: "black" }} onChange={e => setDesignation(e.target.value)}>HR</option>
              <option value={Operstions} style={{ color: "black" }} onChange={e => setDesignation(e.target.value)}>Operstions</option>
            </select>
          </div>
          
          <div style={{ width: "300px", margin: "20px", display: "flex", alignItems: "center" }} >
            <label htmlFor="">Gender : </label>
            <div style={{ margin: "10px" }}> Female :  <input type="radio" name={gender} value={female} onChange={e => setGender(e.target.value)} /></div>
            <div>Male :<input type="radio" name={gender} value={male} onChange={e => setGender(e.target.value)} /></div>
          </div>

          <div style={{ width: "250px", margin: "20px", justifyContent: "space-between", display: "flex", alignItems: "center" }} >
            <label htmlFor="">Cource :</label>
            <div>BCA <input type="checkbox" Value={BCA} onChange={e => setCource(e.target.value)} ></input></div>
            <div>MCA <input type="checkbox" Value={MCA} onChange={e => setCource(e.target.value)} /></div>
            <div>BSC  <input type="checkbox" Value={BSC} onChange={e => setCource(e.target.value)} /></div>
          </div>

          {/* <div style={{ width: "310px", margin: "20px", justifyContent: "space-between", display: "flex", alignItems: "center" }} >
            <div style={{ display: "flex" }}><label htmlFor="" >Image :</label><input type="file" placeholder='img' onChange={e => setImage(e.target.value)} /></div>
          </div> */}
           <div style={{ width: "310px", margin: "20px", justifyContent: "space-between", display: "flex", alignItems: "center" }} >

             <input type="file" accept="image/*" onChange={imageChange} />
              {image === "" ? image === null : <img src={image} height={50} width={100} alt="" />}
          </div>

          <div style={{ width: "300px", margin: "20px", display: "flex", flexFlow: "column", alignItems: "center" }} > <button style={{ backgroundColor: "red", height: "40px", width: "100px" }} onClick={request}>SUBMIT</button> </div>


        </div>
      </section>
    </div>)
}

export default Register