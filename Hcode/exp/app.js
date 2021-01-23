const express = require("express")
const app = express()
const adminRoutes = require('./routes/admin')

app.use(express.json())
app.get('/', (request, response)=>{
    response.send('Acessando via GET')
})

app.use('/admin', adminRoutes)

app.listen(3000, ()=>{
    console.log('Server running: http://localhost:3000')
})