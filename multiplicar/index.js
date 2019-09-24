const fs = require('fs');
const colors = require('colors');

colors.enable();

let listarTabla = async(base, limite = 10) => {
    let data = '';
    if (!Number(base)) {
        throw new Error(` la base ${base} no es un numero`);
    } else {
        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } =  ${i * base }\n`);
        }

    }
    return data;
}

let crearArchivo = async(base, limite) => {
    let data = '';
    if (!Number(base)) {
        throw new Error(` la base ${base} no es un numero`);
    } else {
        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } =  ${i * base }\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
            return `tabla-${base}.txt`;
        });

    }
    return `tabla-${base}.txt`;
}

module.exports = { crearArchivo, listarTabla };