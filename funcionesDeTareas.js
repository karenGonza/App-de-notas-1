let fs = require('fs');
let tareas = require('./tareas.json');
let process = require('process');

let argumento = process.argv[2]
switch (argumento){
    case "listar":
        console.log(tareas);
        break;
        case undefined:
            console.log("Atención - Tienes que pasar una acción");
            break;
            default: console.log("No entiendo qué quieres hacer");
}

module.exports;