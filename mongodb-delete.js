const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';


MongoClient.connect(url, (err, client) => {
    if(err)
        console.log('unable to connect to Server ', err);
    
    console.log('Successfully Connected to Server\n');

    const db = client.db(dbName);
    const collection = db.collection('Todos');


    // //deleteOne

    // collection.deleteOne( {
    //     completed:true
    // }).then((result) => {
    //     console.log(result);
    // }, (err) =>{
    //     console.log(err);
    // });


    // //deleteMany
    //     collection.deleteMany({
    //         completed:false
    //     }).then( (result) => {
    //         console.log(result.result);
    //     });
 

    //findOneAndDelete

    collection.findOneAndDelete({
        _id:new ObjectID('5a7c083c2f5f0a0d2c27343b')
    }).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log(err);
    });

    client.close();
})