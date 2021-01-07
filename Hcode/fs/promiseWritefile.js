const { writeFile } = require('fs')

function makeFile(name, content) {
    return new Promise((resolve, reject) => {
        writeFile(name, content, err => {
            if (err) return reject(err)
            resolve()
        })
    })
}

makeFile('promiseArquivo.txt', 'Criando um arquivo utilizando promises')
    .then(() => {
        console.log('Arquivo criado com sucesso')
    })
    .catch((err) => {
        console.log(`Erro: ${err}`)
    })