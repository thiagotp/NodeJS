
//tente executar alguma coisa, se der erro execute o catch automaticamente
function execute() {
    executeTo()
}

function executeTo() {
    //O throw new Error 'sozinho' exibe o erro e já para a execução do código
    throw new Error("Ah não, deu erro!")
}

function init() {
    try {
        execute()
    } catch (error) {
        console.log('Temos um problema!')
    }
}

init()
console.log("Depois do erro")