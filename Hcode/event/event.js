//Recebendo uma copia do conteudo de 'events' para a constante EventEmitter
const {EventEmitter} = require('events')

//Aqui a classe Event está herdando tudo que existe em EventEmitter
class Event extends EventEmitter {}
//A constando myEvent é um objeto criado a partir da classe Event
const myEvent = new Event()

//subscriber - assinante
//se alguem emitir um evento chamado segurança, faça isso
myEvent.on('seguranca', (x,y)=>{
    console.log(`Executando o evento 'seguranca' : ${x} ${y}`)
})

//publicher - emissor
//disparando o evento
myEvent.emit('seguranca', 'userAdmin', 'Alterou Salario')


myEvent.on('encerrar', (dados)=>{
    console.log(`Assinante ` + dados)
})

myEvent.emit('encerrar', 'Encerrando a execução da importação de dados!')