const {MongoClient} =require('mongodb');
//to connect client with monogo
MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    //how we manipulate database    
const db = client.db("FED2006FirstMongo");
if(err){
    return console.log("unable to connect to mongodb server");
}
console.log('Successful connection!');

//collection call will insert one
// db.collection('FED2006FirstMongo').insertOne({
//     taskName: 'Learning MongoDB',
//     completed: false
// }, (err, result) =>{
//     if(err){
//         console.log("Oops error inserting data!");
//     }
// });

//insert many has to be done in an array
// db.collection('FED2006FirstMongo').insertMany([{
//     taskName: 'Task1',
//     completed: false
// },{
//     taskName: 'Task1',
//     completed: false
// }], (err, result) =>{
//     if(err){
//         console.log("Oops error inserting data!");
//     }

    //update One
    //target by task name
// db.collection('FED2006FirstMongo').updateOne({taskName: 'Learning MongoDB'},{
//     $set:{
//         completed: true
//     } 
// }).then((result)=> {
//     console.log(result);
// });

//update many
// db.collection('FED2006FirstMongo').updateMany({taskName: 'Task1'},{
//     $set:{
//         completed: true
//     } 
// }).then((result)=> {
//     console.log(result);
// });


//delete ONE
// db.collection('FED2006FirstMongo').deleteOne({
//     taskName: 'Learning MongoDB'
// }, (result) =>{
//     console.log(result);
// })

//delete Many
// db.collection('FED2006FirstMongo').deleteMany({
//     taskName: 'Task1'
// }, (result) =>{
//     console.log(result);
// })

//how to GET or Return ALL NEEDS WORK ***
// db.collection('FED2006FirstMongo').find({}).then((result)=>{
//     console.log(result);
// })




//initialize with: git init
//use .gitignore to ignore certain/select files 
//ALWAYS do a pull request before you push to your git hub to help prevent errors wen working with a team to avoid merge conflict
//

client.close();

});

//});



