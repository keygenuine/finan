import gastoSchema from "../schema/gasto.js"
import repository from "../repositorio/repositorio.js"



async function lerserv(body,req,res) {
    if(Object.keys(body).length > 0) throw new Error('Nenhum arquivo a acessar no GET')
    return await repository.lerrep(body,req,res)
}

async function inserirserv(body) {
    if(body==undefined) throw new Error('insira o gasto e valor')
    return repository.insererep(body)

}
async function deleteserv(body) {
    return await repository.deleterep(body)
}

async function updateserv(body){
    if(Object.keys(body).length < 1) throw new Error('body not found')
    if(body.valor==undefined || body.gasto==undefined) throw new Error('Sintaxe incorreta')
    return await repository.updaterep(body)
}


//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
async function insereCartserv(body){
    if(Object.keys(body).length < 1) throw new Error('body not found')
    if(body.banco==undefined || body.limite==undefined) throw new Error('Sintaxe incorreta')
    return await repository.inserirCartRep(body)
}
async function lerCartserv(){
    return await repository.verCartRep()
}
async function deleteCartserv(body){
    return await repository.deletarCartRep(body)
}
export default { lerserv, inserirserv,deleteserv,updateserv,insereCartserv,lerCartserv,deleteCartserv }