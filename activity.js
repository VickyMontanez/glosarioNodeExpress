/* Ejercicio:
Su tarea es crear un sistema de seguimiento de asteroides utilizando Node.js y el
módulo http. Este sistema permitirá a los científicos obtener información en tiempo
real sobre los asteroides que se acercan a la Tierra.
Requisitos:
Crear un servidor HTTP que escuche en el puerto 3000.
Implementar una ruta GET /asteroids que devuelva una lista de los asteroides más
cercanos a la Tierra en las próximas 24 horas. La lista debe incluir información
como el nombre del asteroide, su tamaño, velocidad y fecha de aproximación.
Utilizar una API de terceros, como la NASA NeoWs API (Near Earth Object Web
Service), para obtener los datos de los asteroides. Puede consultar la
documentación de la API para obtener más información sobre cómo realizar las
solicitudes.
https://www.youtube.com/watch?v=nvgeFhLaSuA&ab_channel=Edututos
Para cada asteroide en la lista, mostrar información relevante y destacar aquellos
asteroides que representen un mayor riesgo o sean de interés científico.
Crear una página HTML que consuma su API y muestre la lista de asteroides de
manera amigable para el usuario. Puede utilizar CSS para darle estilo a la página
y hacerla atractiva visualmente.
Agregar funcionalidades adicionales según su creatividad, como la capacidad de
filtrar asteroides por tamaño o clasificarlos según su riesgo de impacto.
Recuerde documentar su API y proporcionar instrucciones claras para que los
científicos puedan utilizarla correctamente y obtener la información necesaria
sobre los asteroides que se acercan a la Tierra */

import {createServer} from 'http';
import https from 'http';

let myServer = createServer((res, req)=>{
    console.log("funciona");
    res.end("funciona");
});

let config = {
    hostname : "localhost",
    port : 4000
};

myServer.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}/`);
})