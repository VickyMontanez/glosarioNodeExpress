//! ES IMPORTANTE COLOCAR TYPE:"MODULE" EN PACKAGE.JSON ANTES DE IMPORTAR/

import {createServer} from "http";
//* Importa la función createServer del módulo http de Node.js, que se utilizará para crear el servidor HTTP. */

let myServer = createServer((req,res)=>{
    let datos='';
    req.on("data",(parametro)=>{
        datos +=parametro;
    });

    req.on("end",()=>{
        res.end(datos);
    });
})
//*Crea un servidor HTTP utilizando la función createServer. */

const config = {
    hostname : "localhost",
    port:8080
};
//* Se hace la configuración del servidor el host y el puerto/

myServer.listen(config, ()=>{
   /*  console.log(`http://${config.hostname}:${config.port}/`); */
})
//* Evento que levanta el servidor/