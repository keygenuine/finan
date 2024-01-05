import express from 'express'
import inserir from './rotas/Redirecionamento.js'
import 'dotenv/config'

const app = express()

app.use(inserir)

const porta = process.env.PORT
app.listen(porta,()=> {
    console.log(`server connected on port ${porta}`)
})

