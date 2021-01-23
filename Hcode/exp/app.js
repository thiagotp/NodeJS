const express = require("express")
const app = express()
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

app.use(express.json())

app.use((req, res, next)=>{
    console.log('Executando middleware em nivel de aplicação')
    return next()
})



app.get('/', (request, response)=>{
    response.send('Acessando via GET')
})

app.use('/admin', adminRoutes)
app.use('/user', userRoutes)

app.listen(3000, ()=>{
    console.log('Server running: http://localhost:3000')
})