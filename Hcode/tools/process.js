console.log(`Nome do Arquivo: `, __filename)
//DIRNAME -> Pasta onde o arquivo está
console.log(`Diretório do Arquivo: `, __dirname)
//CWD() -> Monstra o local do arquivo que está executando o script da busca
console.log(`Diretório em que foi Invocado: `, process.cwd())
console.log("Parâmetros", process.env)
console.log("Sistema Operacional", process.env.OS)
console.log("Nome do Usuário", process.env.USERNAME)
console.log("Idioma", process.env.LANG)
console.log("Nome do server", process.env.COMPUTERNAME)
console.log(`Parâmetros de execução: `, process.argv)//retorna um array com todos os parâmetros de execução do arquivo

switch(process.argv[2]){
    case "-a":
        console.log("Execute a rotina principal")
        break;
    case "-i":
        console.log("Execute a aplicação")
        break;
    case "-q":
        console.log("Encerrando a Aplicação")//interrompe imediatamento o código
        process.exit();
        break;
    default:
        break;
}

console.log(`Ambiente do Servidor: `, process.platform)