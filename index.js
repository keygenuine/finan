const bodyParser = require('body-parser')
const express = require('express')
const json = require('express')
const app = express()
// const dot = require('dotenv/config')

// const port = process.env.PORT

app.use(bodyParser.urlencoded({extended:true}))
app.post('/insere', (req,resp)=>{
    console.log(req.body)
    resp.send('ola')
})
app.listen( 5000, () => console.log(`Server running on port:${port} `));

console.log(port)