const Buffer = require('buffer').Buffer

//from -> carrega informações de algum lugar e guarda como binário
const buff = Buffer.from('Curso completo de NodeJS')

console.log(buff)
console.log(buff.toString())
console.log(buff.toString('utf16le'))

const buff_string = Buffer.from('Carregando uma string','utf-8')

console.log(buff_string)
console.log(buff_string.toString())
console.log(Buffer.isBuffer(buff_string))
//limitando a quantidade de bytes que eu quero
console.log(buff_string.toString('utf-8', 0, 10))