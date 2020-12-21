function soma(x) {
    return new Promise((resolve, reject) => {
        if (Number(x) == NaN ||
            Number(x) == undefined ||
            typeof x != 'number'){
                reject('Ocorreu um erro')
            }
            setTimeout(() => {
                resolve(x + 5000);
            }, 3000);
    })
}

async function principal() {
    try {
        const result = await soma("#")
        console.log(`Resultado com async/await: ${result}`)
    } catch (error) {
        console.log(`Temos problemas: ${error}`)
        console.log(process.env.USERNAME);
    }
}

principal();