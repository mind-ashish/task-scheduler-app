const express=require('express');
const app=express();
const port=8000;

app.listen(port,function(err){
    if(err){
        console.log(`error in launching server: ${err}`);
        return;
    }
    console.log(`server is up and running at port : ${port}`);
});