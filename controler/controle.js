
import serv from "../services/servico.js"

async function ler(req, res) {
    let body = req.body
    try {
        const lerService = await serv.lerserv(body,req,res)
        
        // res.setHeader("Access-Control-Allow-Origin", "*")
        res.status(201).send(lerService)
    } catch (err) {
        res.status(404).send(err.message)
    }
}

async function inserir(req, res) { //recebe o JSON com 'GASTO' e 'VALOR'
    const body = req.body
    try { 
        const inserirService = await serv.inserirserv(body)
        res.status(201).send(inserirService)
    } catch (err) { 
        res.status(409).send(err.message)
    }
}
async function deletar(req,res) {
    const body = req.body
    try{
        const deletarService = await serv.deleteserv(body)
        res.status(201).send(deletarService)
    } catch(err){
        res.status(409).send(err.message)
    }
}
async function upar(req,res){
    const body = req.body
    try{
        const uparService = await serv.updateserv(body)
        res.status(201).send(uparService)
    }catch(err){
        res.status(409).send(err.message)
    }
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
async function cartao(req,res){
    const body = req.body
    try{
        const inserircart = await serv.insereCartserv(body)
        res.status(201).send(inserircart)
    }catch(err){
        res.status(409).send(err.message)
    }

}
async function lercartao(req,res){
    try{
        const lercart = await serv.lerCartserv()
        res.status(201).send(lercart)
    }catch(err){
        res.status(409).send(err.message)
    }

}
async function deletarcartao(req,res){
    let body = req.body
    try{
        const deletecart = await serv.deletarcartao(body)
        res.status(201).send(deletecart)
    }catch(err){
        res.status(409).send(err.message)
    }

}


export default { inserir, ler ,deletar,upar,cartao,lercartao,deletarcartao }