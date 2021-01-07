//chamando apenas a função promisify da API util
const { promisify } = require('util')

//Aqui estamos convertendo a função writeFile do fs em uma promise
const writeFile = promisify(require('fs').writeFile)
const conteudo = "Criando um arquivo utilizando promisify do módulo nativo Util"

writeFile('utilArquivo.txt', conteudo)
    .then(() => {
        console.log("Arquivo criado com sucesso!")
    })
    .catch((err) => {
        console.log(`Erro: ${err}`)
    })