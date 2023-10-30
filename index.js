const express = require("express")
const { userRouter } = require("./router/userRouter")
const app = express()

app.use(express.json())

app.use("/api", userRouter)
app.listen(1001, (req,res) =>{
    try{
        console.log("Server is running")
    }
    catch(err){
        console.log("Error occured while starting the server")
    }
})