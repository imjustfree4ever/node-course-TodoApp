const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

        if(err){
            return console.log('Unable to connect to Mongodb Server');
        }
        console.log('Connected to MongoDb Server.');
    
        const db = client.db('TodoApp');

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

        db.collection('Users').insertOne({

            name:"Vicky DX",
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