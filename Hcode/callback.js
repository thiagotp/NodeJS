function soma(x, callback){
    return setTimeout(()=>{
        return callback(null, x + 5000);
    },3000);
}

//callback function
//a função callback irá precisar de uma variável para demonstrar erro e outra para fazer o que você quer
function resolveSoma(err, resultado){
    //o throw para o processamento e mostra o que deu de errado (err)
    if(err) throw err
    console.log(resultado)
}

soma(200, resolveSoma)
console.log("foi")