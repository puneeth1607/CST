import React, { useEffect, useState } from 'react'
import style from './Style.module.css'
import axios from "axios"
import Nav from './Nav'
import { useNavigate, useParams } from 'react-router-dom'
const Edituser = () => {


  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [mobile, setMobile] = useState("")
  let [designation, setDesignation] = useState("")
  let [cource, setCource] = useState("")
  let [gender, setGender] = useState("")
  let [image, changeImage ] = useState("")
  let [password, setPassword] = useState("")

  let BCA = "BCA"
  let MCA = "MCA"
  let BSC = "BSC"
  let male = "male"
  let female = "female"


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
  
  // let sales = "sales"
  // let HR = "HR"
  // let Operstions = "Operstions"



  let { id } = useParams()
  let navigate = useNavigate()
  // console.log(id)
  let namedata = (e) => {
    setName(e.target.value)
  }
  // update the data
  let update = (e) => {
    console.log(name, email, mobile, designation, gender, cource, image, password);
    let data = { name, email, mobile, designation, gender, cource, image, password }
    axios.put(`http://localhost:10/userdata/${id}`, data)
      .then((res) => {
        if (res.data.udpadted_task) {
          navigate("/admin")
        } else {
          alert(res.data.error)
        }

      })
  }




  //fetch data by id
  useEffect(() => {
    axios.get(`http://localhost:10/userdata/${id}`)
      .then((res) => {
        setName(res.data.name)
        //  console.log(res.data)
        setDesignation(res.data.designation)
        setEmail(res.data.email)
        setMobile(res.data.mobile)
        setCource(res.data.cource)
        setGender(res.data.gender)
        changeImage(res.data.image)
        setPassword(res.data.password)
      }, [])
  }, [])

  return (
    <div>
      <Nav />
      <section className={style.body}>

        <div id={style.card}>
          <div style={{ width: "300px", margin: "20px", display: "flex", flexFlow: "column", alignItems: "center" }} > <h1>Edituser</h1> </div>

          <div className={style.Ediv} > Name:  <input type="text" defaultValue={name} onChange={namedata} /></div>

          <div className={style.Ediv} > Email:  <input type="email" defaultValue={email} onChange={e => setEmail(e.target.value)} /></div>

          <div className={style.Ediv} > mobile: <input type="number" defaultValue={mobile} onChange={e => setMobile(e.target.value)} /></div>

          <div className={style.Ediv} > password: <input type="text" defaultValue={password} onChange={e => setPassword(e.target.value)} /></div>

          <div className={style.Ediv} > designation: <select name="" id="" style={{ backgroundColor: "black" }} defaultValue={designation} onChange={e => setDesignation(e.target.value)} >
            <option value="">select</option>
            <option value="">sales</option>
            <option value="">HR</option>
            <option value="">Operations</option>
          </select></div>

          <div className={style.Ediv} > gender:
            <div><input type="text" defaultValue={gender} /></div>
            <div style={{ display: "flex" }}>
              <div> male : <input type="radio" name={gender} defaultValue={male} onChange={e => setGender(e.target.value)} /></div>
              <div>  female : <input type="radio" name={gender} defaultValue={female} onChange={e => setGender(e.target.value)} /></div>
            </div>
          </div>

          <div className={style.Ediv} > course:
            <div><input type="text" defaultValue={cource} /></div>
            <div style={{ display: "flex" }}>

              <div> BCA <input type="checkbox" defaultValue={BCA} onChange={e => setCource(e.target.value)} /></div>
              <div> MCA <input type="checkbox" defaultValue={MCA} onChange={e => setCource(e.target.value)} />
              </div><div> BSC <input type="checkbox" defaultValue={BSC} onChange={e => setCource(e.target.value)} /></div>
            </div>
          </div>
          <div style={{ width: "310px", margin: "20px", justifyContent: "space-between", display: "flex", alignItems: "center" }} >

            <input type="file" accept="image/*" onChange={imageChange} />
            {image === "" ? image === null : <img src={image} height={50} width={100} alt="" />}
          </div>

          <div className={style.Ediv}>  <button style={{ backgroundColor: "red" }} onClick={update}>SUBMIT</button>  </div>        </div>

      </section>


    </div>)
}

export default Edituser