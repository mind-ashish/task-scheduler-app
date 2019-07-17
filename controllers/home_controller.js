const Task=require('../models/tasks');
const express=require('express');
module.exports.home=function(req,res){
    Task.find(
        {},
        function(err,tasks){
            if(err){
                console.log('error in fetching tasks');
                return;
            }
            return res.render('home',{
                title:'To-do App',
                all_tasks:tasks
            });
        }
    );
}



module.exports.add=function(req,res){
    
 Task.create(
     {
         description:req.body.description,
         deadline:req.body.deadline,
         category:req.body.category
     },
     function(err,newTask){
         if(err){
             console.log('error in creating task');
             return;
         }
         console.log(`New task created: ${newTask}`);
         return res.redirect('back');
     }
 );
}

module.exports.delete=function(req,res){
   let ids= req.body.task;  //can one or more than one ids
       Task.deleteMany({_id:{$in:ids}},function(err){   //to delete multiple
        //query has fieldname= _id which is taking values from array ids. So basically finding documents/objects whose _id matches with any element of 
        //array ids , and deleting that document in mongodb.
        if(err){
            console.log('cannot delete tasks');
            return;
        }
        return res.redirect('back');
       });
   
}