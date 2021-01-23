const express = require('express')
const router = express.Router()

function logRequest(req, res, next){
    console.log("Executando a função middleware para a rota usuários")
    return next()
}

router.get('/' ,logRequest ,(req,res)=>{
    res.send("Listando Usuários")
})

module.exports = router