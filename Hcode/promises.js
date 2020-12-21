/**Diferente do callback a promise não precisa de uma função com parâmentro.
 * A promise é feita com resolve e reject onde o resolve retornará o resulta de tudo tiver certo
 * e o reject retornará e irá parar o código se tiver algum erro
 */

function soma(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //o resolve retornará o valor da operação se houver êxito no mesmo
            resolve(x + 5000);
        }, 3000);
    })
}

//para tratar de promises que deram certo(RESOLVE) utilizamos o .then
soma(264).then((resultado)=>{
    console.log(`Resolvido, Resultado : ${resultado}`)
})
console.log("foi")