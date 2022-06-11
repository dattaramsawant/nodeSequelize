const express = require('express');
const app = express();
require('./models/index');

const port = 8000;


app.get('/',(res,resp)=>{
    resp.send('Home Page')
});

app.listen(port,()=>{
    console.log("App is listening at port "+port)
})