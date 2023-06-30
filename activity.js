import {createServer} from 'http';
import https from 'https';

let myServer = createServer((req, res)=>{
   let json = "";
   https.get("https://jsonplaceholder.typicode.com/todos", (data)=>{
    data.on("data", (chuck)=>{
        json+=chuck;
    })
    data.on("end", ()=>{
        res.end(json);
    })
   })
});

let config = {
    hostname : "localhost",
    port : 3000
};

myServer.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}/`);
})