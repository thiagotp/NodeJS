const fs = require('fs')

//Criando diretório
fs.mkdir('projeto', (err) => {
    if (err) throw err

    console.log("Diretório criado com sucesso!")
})

const assets = ['css', 'js', 'img', 'fonts', 'lib']

//Nessa função criamos vários diretórios ao mesmo tempo inclusive subpastas (graças ao parâmetro recursive: true)
function make(dir) {

    dir.forEach((element) => {
        fs.mkdir(`projeto/assets/${element}`, { recursive: true }, (err) => {
            if (err) throw err

            console.log("Diretório criado com sucesso: ", element)
        })
    });
}

make(assets)