const readLine = require("readline")
const { deflate } = require("zlib")
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual o comando para o drone? \n R: ", (answer)=>{
    console.log(`Comando ${answer} sendo executado!`)
    switch(answer){
        case 'comand':
            console.log("Ligando o drone")
            break;
        case 'takeoff':
            console.log("Decolando o drone")
            break;
        /* case 'comand':
            console.log("Ligando o drone")
            break; */
        default:
            console.log("Comando não entendido")
    }
    rl.close()
})