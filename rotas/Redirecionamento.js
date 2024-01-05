import bodyParser from "body-parser"
import express from "express"
import { Router } from "express"

const inserir = Router()


inserir.get('/', (req,res) =>{
    res.send('ola mundo')
})

inserir.post('/insere', (req,res) =>{ //recebe o JSON com 'GASTO' e 'VALOR'
    console.log(req.body)
    res.send('tchaum mundo')
})


export default inserir