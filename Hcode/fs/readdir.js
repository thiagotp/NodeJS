/**
 * procurando dentro das APIs nativas do node o FS
 * como não usei require('./....') o node já entende que é uma API nativa
 */
const fs = require('fs')

fs.readdir('../', (err, data)=>{
    if(err) throw err

    data.forEach((files)=>{
        console.log(__dirname + '\\' + files)
    })
})