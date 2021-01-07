const { throws } = require('assert')

//Aqui está sendo feita uma requisição mas não de toda a API fs mas somente do writeFile
const {writeFile} = require('fs')

writeFile("arquivo.txt", 'Criando arquivo de texto com writeFile'), err =>{
    if(err) throw err

    console.log("arquivo criado")
}