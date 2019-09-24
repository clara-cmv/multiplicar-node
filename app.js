const colors = require('colors/safe');
const { argv } = require('./config/yargs');

const { crearArchivo, listarTabla } = require('./multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`Tabla: ${tabla} `))
            .catch(error => console.log(error));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo:`, colors.green(archivo)))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

/*crearArchivo(base)
    .then(archivo => console.log(`Archivo: ${archivo}  creado`))
    .catch(error => console.log(error)); */