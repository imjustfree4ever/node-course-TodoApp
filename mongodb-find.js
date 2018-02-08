const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';



MongoClient.connect(url, (err, client) => {

        if(err){
            return console.log('Unable to connect to Mongodb Server');
        }
        console.log('Connected to MongoDb Server.');
    
        const db = client.db(dbName);
        const collection =  db.collection('Users');

        // db.collection('Users').find({
        //     name : 'Vicky Dx'
        // }).toArray().then( (docs) => {
        //     console.log('Users');
        //     console.log(JSON.stringify(docs, undefined, 2));

        // }, (err) => {
        //     console.log('got Error ', err);

        collection.find().toArray().then((docs) =>{

            console.log(JSON.stringify(docs, undefined, 2));

        }, (err) =>{
            console.log('Error ', err);
        });


        client.close();
});