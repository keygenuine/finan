import express from 'express'
import inserir from './rotas/Redirecionamento.js'
import 'dotenv/config'
import { connectDb } from "../database/db.js"

const app = express()
connectDb()
app.use(inserir)

const porta = process.env.PORT
app.listen(porta,()=> {
    console.log(`server connected on port ${porta}`)
})

