import bodyParser from "body-parser"
import express, {json} from "express"
import { Router } from "express"
import gastoSchema from "../schema/gasto.js"

const inserir = Router()
inserir.use(bodyParser.urlencoded({extended:true}))

inserir.post('/insere', (req,res) =>{ //recebe o JSON com 'GASTO' e 'VALOR'
    let gastar = req.body
    let valorar = req.valor
    console.log(gastar)
    async function criar(){
            await gastoSchema.create({...gastar})
    }
    criar()
    res.send('<script>function voltar(){window.alert("gasto inserido");window.history.back()};voltar() </script>')
})


export default inserir