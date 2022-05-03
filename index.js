const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 4000
app.listen(PORT,() =>{
    console.log("server is running on PORT:" + PORT)
})

const mongoose = require("./db")
mongoose.connection.on("connected", (err)=>{
    if(err){
        console.log(err)

    }else{
        console.log("connected to Mongodb")
    }
})

app.get("/",(req,res)=>{
    res.send(`<h1>hii</h1>`)
})

app.use("/user", require("./routes/user"))
