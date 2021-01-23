const express = require('express')
const router = express.Router()

router.patch('/:id', (request, response)=>{
    response.send('Acessando Administração via PATCH')
})

router.put('/:id', (request, response)=>{
    response.send('Acessando Administração via PUT')
})

router.delete('/:id', (request, response)=>{
    response.send('Acessando Administração via DELETE')
})

router.post('/', (request, response)=>{
    const body = `Login: ${request.body.login}\n Senha: ${request.body.senha}`
    response.send('Acessando Administração via POST:\n '+body)
})

router.get('/', (request, response)=>{
    response.send('Acessando Administração via GET!')
})

router.get('/:id', (request, response)=>{
    response.send('Acessando Administração ! ID do usuário: '+request.params.id)
})

module.exports = router
