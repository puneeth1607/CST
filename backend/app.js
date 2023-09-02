const express = require('express')
let app = express()
const port = 10

const mongoose = require('mongoose')
const cors = require('cors')
const Logdata = require('./model/login')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//connect to the data base
const db_url = "mongodb://localhost:27017/proData"
mongoose.connect(db_url).then(()=>{
    console.log("connection established");
})

// user register page backend
app.post('/register', async(req, res) => {
    Logdata.findOne({ email: req.body.email }).then((data) => {
        if (data) {
            //err message
            res.send({ message: 'user name already exist' })

        } else {
            //add the data

            // creating a new object
            let ldata = new Logdata({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                designation: req.body.designation,
                gender: req.body.gender,
                cource: req.body.cource,
                image: req.body.image,
                password: req.body.password


            })
            // saving the data and displaying the message
            ldata.save().then(() => {
                res.send({ message: "user registered succesfully" })

            }).catch(() => {
                res.send({ message: "user registraion failed. try after sometime" })
            })

        }
    })
})

// user login page backend
app.post('/login',(req,res)=>{
    Logdata.findOne({ name: req.body.name })
    .then((userData)=>{
        if(userData){
          if(req.body.password === userData.password){
            res.send({message:"login succenfull" , status:200})
          }else{
            res.send({message:"invalid user id or passowrd"})
          }
        }
        else{
          res.send({message:'user not found'})
        }
      }
    )
  })

  //get user data
  app.get('/userdata', async (req, res) => {
    Logdata.find({})
        .then((result) => {
            res.send(result)
        }).catch(() => {
            res.send('unable to fetch ')
        })
})

//get user data by id
app.get('/userdata/:id', async (req, res) => {
    Logdata.findById({_id: req.params.id})
        .then((result) => {
            res.send(result)
        }).catch(() => {
            res.send('unable to fetch ')
        })
})

// update the data 
app.put('/userdata/:id', async (req, res) => { 
    console.log(req.body.name);
    console.log( req.params.id )

    Logdata.findOneAndUpdate({ _id: req.params.id }, {
        $set:{  name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                designation: req.body.designation,
                gender: req.body.gender,
                cource: req.body.cource,
                image: req.body.image,
                password: req.body.password
        }      
    }).then((result) => {
                res.status(200).json({
                    udpadted_task : result
                })
            }).catch(err => {
                console.log("data not found")
                res.status(200).json({
                    error :err
                })
            })
    })


    // delete the data
    app.delete('/userdata/:id', async (req, res) => { 
       Logdata.findOneAndDelete({ _id: req.params.id }).then((result) => {
                    res.status(200).json({
                        udpadted_task : result  
                    })
                }).catch(err => {
                    console.log("data not found")
                    res.status(200).json({
                        error : err
                    })
                })
        })


app.listen(port,()=>{
    console.log("server started in the port 10");
})