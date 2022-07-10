const express = require('express');
const app = express();
require('./models/index');
var indexRouter = require('./routes/index');

const port = 8000;
app.use(express.json());
app.use('/',indexRouter);

app.listen(port,()=>{
    console.log("App is listening at port "+port)
})