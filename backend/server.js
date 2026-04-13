import express from "express"
import "dotenv/config"

const app = express()
const port = process.env.PORT || 8001

app.listen(port, () => {
    //Al correr con nodemon se actualiza automaticamente (dev)
    console.log('Server is running on http://localhost:',port)
})