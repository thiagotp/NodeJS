const { throws } = require('assert')
const fs = require('fs')


//forma assincrona
fs.readFile('texto.txt',(err, data)=>{
    if(err) throw err

    console.log(data.toString())
})

//forma sincrona
const texto = fs.readFileSync('texto.txt')

console.log(`Texto: ${texto}`)