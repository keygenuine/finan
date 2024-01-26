import express from 'express'
import rotas from '../rotas/rotas.js'
import 'dotenv/config'
import { connectDb } from "../database/db.js"
import  {midle}  from '../midle/midle.js'
const app = express()
connectDb()


app.use(midle)
app.use(rotas)
const porta = process.env.PORT
app.listen(porta,()=> {
    console.log(`server connected on port ${porta}`)
})

