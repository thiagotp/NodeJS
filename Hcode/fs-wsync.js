const fs = require ('fs')

console.log((process.hrtime()[0]/60).toFixed(5))
console.log("antes da leitura do arquivo")
//Aqui o resto do código não vai esperar que esse trecho seja completado
//é uma conexão não bloqueante (assincrona)
const dados = fs.readFile('../file.txt', (err, data)=>{
    if(err) throw err;
    console.log("executando a leitura")   
});

console.log("Executando o console após o arquivo")
console.log((process.hrtime()[0]/60).toFixed(5))



