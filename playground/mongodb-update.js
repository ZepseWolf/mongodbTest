const {MongoClient,ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if (err){
    console.log('unable to connect to MongoDb server');
  }
  console.log('Connected to MDB server!');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b977afd9712966cf464224e')
  },{
    $set: {
      name : 'Mr kamisama'
    },
    $inc: {
      age: 4
    }
  },{
    returnOriginal: false // keep returnOriginal
  }).then((result)=>{
    console.log(result);
  });


  //db.close();
});
