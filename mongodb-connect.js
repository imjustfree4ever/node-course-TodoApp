const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';


MongoClient.connect(url, (err, client) => {

        if(err){
            return console.log('Unable to connect to Mongodb Server');
        }
        console.log('Connected to MongoDb Server.');
    
        const db = client.db(dbName);
        const collection =  db.collection('Users');
        // db.collection('Todos').insertOne({
        //     text: 'bye Bye2',
        //     completed: false
        // }, (err, result) => {

        //     if(err)
        //     {
        //         console.log('Unable to insert TodoApp ', err);
        //     }
        //     console.log(result);
        //     console.log(JSON.stringify(result.ops, undefined, 3));
        // })

       collection.insertOne({

            name:"foo",
            age: 24,
            location: 'Nagpur'
        }, (err, result) => {
            if(err){
                console.log('Unable to insert User ', err);
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        });

        client.close();
});