//fazendo a requisição do http (API nativa do node)
const http = require('http')

//criando as variáveis que serão usadas na criação do server
const hostname = '127.0.0.1'
const port = 3000
const url = `http://${hostname}:${port}/`

/**Criando o servidor
 * aqui teremos dois parâmetros na arow function
 * req = requisição (armazena tudo que o usuário solicitou para o servidor)
 * res = resposta (resposta que o servidor devolve para o usuário)
 */
const server = http.createServer((req, res)=>{
    console.log(req)
    res.statusCode = 200
    res.setHeader('Contet-Type', 'text/html')
    res.end('<h1>Bem Vindo<br/>Node.JS</h1>')
})

//Após criar o servidor e necessário colocar o mesmo em execução 
server.listen(port, hostname, ()=>{
    console.log(`Seridor rodando em ${url}`)
})

//usando uma função de processamento foi pedido para abrir o navegador na URL do projeto
const open = (process.platform == 'darwin' ? 'open': 
process.platform == 'win32' ? 'start' : 'xdg-open');

require('child_process').exec(open + ' ' + url)