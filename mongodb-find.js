const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

        if(err){
            return console.log('Unable to connect to Mongodb Server');
        }
        console.log('Connected to MongoDb Server.');
    
        const db = client.db('TodoApp');

        // db.collection('Users').find({
        //     name : 'Vicky Dx'
        // }).toArray().then( (docs) => {
        //     console.log('Users');
        //     console.log(JSON.stringify(docs, undefined, 2));

        // }, (err) => {
        //     console.log('got Error ', err);

        db.collection('Users').find({
           name:'Vicky DX'
        }).count().then( (count) => {
            console.log(count);
        });


        client.close();
});