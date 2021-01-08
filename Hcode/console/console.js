console.log("Exibindo uma mensagem no console !")

//Erro

console.error(new Error("Exibindo mensagem de erro, temos problemas!"))

const carros = ["GM", "Honda", "Ford", "Hyundai"]

//Tabela

console.table(carros)

const dados = {
    name : "Thiago",
    empresa : "Mine"
}

console.table(dados)

console.count("processo")
console.count("processo")
console.count("processo")
console.log("resetando o count")

console.countReset("processo")
console.count("processo")

console.time('contador')
for (let index = 0; index < 100; index++) {
    console.log("xD");
    
}
console.timeEnd('Contador')

console.assert(true, 'Faça algumma coisa')
console.assert(false, 'I rapaz %s, que pena!', 'Não funcionou')
