import bodyParser from "body-parser"
import express, {json} from "express"
import { Router } from "express"
import { midle } from "../midle/midle.js"

import controlador from "../controler/controle.js"

const rotas = Router()
// rotas.use(json()) //corrigir verificação de json
rotas.use(bodyParser.urlencoded({ extended: true }))

rotas.get('/',
    controlador.ler
)
rotas.post('/insere',
    controlador.inserir
)
rotas.post('/mudar',
    controlador.upar
)
rotas.post('/deletar',
    controlador.deletar
    )
    
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
rotas.post('/cartao',
    controlador.cartao    
    )
rotas.get('/lercartao',
    controlador.lercartao    
    )
rotas.get('/deletarcartao',
    controlador.deletarcartao    
    )
rotas.post('/testar',(req,res)=>{
    let body = req.body
    console.log(req.body)
    res.send('oi')
    })
export default rotas