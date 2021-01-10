const path = require('path')

//trazendo apenas o nome do arquivo
console.log('basename: ', path.basename('c:\\temp\\arquivo.html'))

//normalizando(arrumando) o que foi pedido
console.log('normalize: ',path.normalize('c:\\temp/dir//subdir/dir/..'))

//jutando e montando um caminho
console.log('join path: ', path.join('/teste', 'test2', 'teste3/teste4', 'dir2', '..'))

//traz o caminho absoluto de um arquivo
console.log('resolve path: ', path.resolve('path.js'))

//pegando apenas a extensão de um arquivo
console.log('extension: ', path.extname('path.js'))