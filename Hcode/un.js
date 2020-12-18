const fs = require('fs');


//Mostrando que nesse caso o arquivo vai ser apagado antes de terminar a leitura
//A leitura tá sendo feita de forma assincrona, logo, a execução do codigo de excluir o arquivo acontecera
fs.readFile("../file.txt", (err, data)=>{
    if(err) throw err;
    console.log(data);
});

fs.unlinkSync("../file.txt");

fs.readFile("../file2.txt", (err, data)=>{
    if(err) throw err
    console.log(data)
    fs.unlink("../file2.txt",(unlickErr)=>{
        if(unlickErr) throw unlickErr
        console.log("Agora sim a exlusão foi feita na hora certa")
    });
});
