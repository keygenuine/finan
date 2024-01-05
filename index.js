const bodyParser = require('body-parser')
const express = require('express')
const json = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.post('/insere', (req,resp)=>{
    console.log(req.body)
    resp.send('ola')
})
app.listen(8081)