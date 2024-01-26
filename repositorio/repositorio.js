import type from "nodash/lib/type.js"
import gastoSchema from "../schema/gasto.js"
import cartaoSchema from "../schema/cartao.js"


async function lerrep(body,req,res) {
    return await gastoSchema.find({}).select('-__v')
}

async function insererep(body) {
    let date = body.data
    await gastoSchema.create({ ...body,Data:date })
    return '<script>window.alert("Gasto Criado"), history.back()</script>'
}

async function deleterep(body) {
    console.log(body)
    let conteudo = body.gasto
    // if((await gastoSchema.find({gasto:conteudo})).length==0) throw new Error ("<script>window.alert('Nao encontrado'), history.back()</script>")
    await gastoSchema.deleteOne({ _id: conteudo })
    return '<script>window.alert("Gasto deletado"), history.back()</script>'

}

async function updaterep(body) {    
    let conteudo = { gasto: body.gasto }
    let valor = { valor: body.valor }
    let validador = await gastoSchema.findOne(conteudo)
    if (validador == null) throw new Error('nao encontrado')
    await gastoSchema.findOneAndUpdate(conteudo, valor)
    return '<script>window.alert("Gasto Modificado"), history.back()</script>'
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

async function inserirCartRep (body){
    await cartaoSchema.create({...body})
    return '<script>window.alert("Cartão inserido"), history.back()</script>'
}
async function verCartRep (){    
    return await cartaoSchema.find({}).select('-_id') 
    // '<script>window.alert("Cartão encontrado"), history.back()</script>'
}
async function deletarCartRep (body){
    await cartaoSchema.deleteOne({_id:body._id})
    return '<script>window.alert("Cartão encontrado"), history.back()</script>'
}
export default { lerrep, deleterep, updaterep, insererep,inserirCartRep,verCartRep,deletarCartRep }