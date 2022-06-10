/// https://skatteverket.entryscape.net/store/9/resource/1319


const express = require("express"); 
const http = require('http'); 
const app = express(); 
const server = http.createServer(app); 
const PORT = process.env.PORT || 3000; 


app.get('/', (req, res) => {
    res.status(200).send("Welcome"); 
}); 

app.get("/consume", (req, res) => {
    
})

async function startServer() {
    server.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`); 
    }); 
}

startServer(); 