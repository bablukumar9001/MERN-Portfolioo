const express = require('express')
require('dotenv').config()
require("./db/conn")
const clientRouter = require("./routers/clientData")
const path = require("path")


const app = express()
const PORT = process.env.PORT || 7000
app.use(express.json())
app.use(clientRouter)

// static files

app.use(express.static(path.join(__dirname, "../Frontend/dist")))

// console.log(path.join(__dirname, "../Frontend/dist"))


app.listen(PORT, () => {
    console.group(`this app listning on  port no. ${PORT}`)
})

