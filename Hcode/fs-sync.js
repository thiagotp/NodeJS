const fs = require ('fs')

console.log((process.hrtime()[0]/60).toFixed(5))
console.log("antes da leitura do arquivo")
//Aqui o resto do código só vai ser excutando quando o trecho "sync" (sincrono) terimnar a execução
//É uma conexão bloqueante
const dados = fs.readFileSync('../file.txt')
console.log("Executando o console após o arquivo")
console.log((process.hrtime()[0]/60).toFixed(5))
