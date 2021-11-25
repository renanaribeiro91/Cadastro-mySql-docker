const express = require('express')
const app = express()
require('dotenv/config')
require('./database/dbConnection')

const routes = require('./routes/routes')

app.use(express.json())
app.use(routes)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})
