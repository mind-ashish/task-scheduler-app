const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/task_db'); //task_db is name of db

const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to database'));

db.once('open',function(){
    console.log('succesfully connected to db');
});
module.exports= db;
