import express from "express"
import { ENV } from "./config/env.js"

const app = express()
const port = ENV.PORT || 8001

app.get("/api/health", (req,res) => {
    res
    .status(200)
    .json({
        success: true
    })
})

app.listen(port, () => {
    //Al correr con nodemon se actualiza automaticamente (dev)
    console.log(`Server is running on http://localhost:${port}`)
})