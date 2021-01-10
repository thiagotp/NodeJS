//Fazendo a requisição apenas do método 'spawn' dentro do child_process
const { spawn } = require("child_process")

//montando o texto que será executado na função ls 
const ls = spawn('ls', ['..', '-lh', '/usr'])

//stdout é um evento de leitura de dados
ls.stdout.on('data', (data)=>{
    console.log(`stdout: ${data}`)
})

//stderr é um evento para erro
ls.stderr.on('data', (data)=>{
    console.log(`stderr: ${data}`)
})

ls.on('close', (code)=>{
    console.log(`Process em segundo plano finalizado com o código ${code}`)
})