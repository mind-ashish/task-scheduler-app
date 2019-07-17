const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');

app.use(express.urlencoded());

//set static files
app.use(express.static('./assets'));

app.use('/',require('./routes/index'));

//set view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`error in launching server: ${err}`);
        return;
    }
    console.log(`server is up and running at port : ${port}`);
});