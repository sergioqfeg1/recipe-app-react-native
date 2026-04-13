import express from "express"
import { ENV } from "./config/env.js"
import { db } from "./config/db.js"
import { favoritesTable } from "./db/schema.js"

const app = express()
const port = ENV.PORT || 8001

app.use(express.json())

app.get("/api/health", (req,res) => {
    res
    .status(200)
    .json({
        success: true
    })
})

app.post("/api/favorites", async (req,res) => {
    try {
        const {userId, recipeId, title, image, cookTime, servings} = req.body
        if (!userId || !recipeId || !title) {
            return res
                    .status(400)
                    .json({
                        error: "Missing required fields"
            })
        }

        const newFavorite = await db.insert(favoritesTable).values({
            userId,
            recipeId,
            title,
            image,
            cookTime,
            servings
        }).returning() //Devuelve todos los valores, a no ser que se lo indiques

        res
        .status(201)
        .json(newFavorite[0])
    } catch (err) {
        console.log("Error adding favorite", err)
        res
        .status(500)
        .json({error: "Oops: Something went wrong"})
    }
})

app.listen(port, () => {
    //Al correr con nodemon se actualiza automaticamente (dev)
    console.log(`Server is running on http://localhost:${port}`)
})