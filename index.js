// Import the express module and create an Express application
const express = require('express');
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 5000;

// Setting app : port, express.static, bodyParser

app.get("/",(req,res)=>{
    res.send("Hello App example to deploy on Heroku (test review)")
});
app.get("/application", (req,res)=> {
    res.send(importData);
})
app.listen(port,()=>{
    console.log(`Example app is listening on port http://localhost:${port}`)
    
});

