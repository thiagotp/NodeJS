const express = require("express")
const app = express()
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const cookieParser = require('cookie-parser')

app.use(express.static('public'))

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next)=>{
    console.log('Executando middleware em nivel de aplicação')
    return next()
})

app.get('/setcookie', (req,res)=>{
    res.cookie('user','Thiago Teixeira', {maxAge: 9000000, httpOnly:  true})
    return res.send('Cookie gravado com sucesso')
})

app.get('/getcookie', (req, res)=>{
    let user = req.cookies['user']
    if(user){
        res.send(user)
    }
})
app.get('/', (request, response)=>{
    response.send('Acessando via GET')
})

app.use('/admin', adminRoutes)
app.use('/user', userRoutes)

app.get('*',(req, res, next)=>{
    setImmediate(()=>{
        next(new Error('Temos um problema'))
    })
})


app.use((err, req, res, next)=>{
    console.log(`Tivemos um problema: \n${err.stack}`)
    res.status(500).json({message: err.message})
})

app.listen(3000, ()=>{
    console.log('Server running: http://localhost:3000')
})