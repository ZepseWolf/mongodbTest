const {MongoClient,ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if (err){
    console.log('unable to connect to MongoDb server');
  }
  console.log('Connected to MDB server!');
  const db = client.db('TodoApp');
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    console.log(result);
  });
  //db.close();
});
