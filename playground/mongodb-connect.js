//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if (err){
    console.log('unable to connect to MongoDb server');
  }
  console.log('Connected to MDB server!');
  const db = client.db('TodoApp');
  db.collection('Todos').find({
    _id: new ObjectID('5b973395c0c1431c889682da')
  }).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined ,2));
  },(err) =>{
      console.log(err);
  });
  //db.close();
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined ,2));
  // });
  // const db = client.db('Excerise');
  // db.collection('nestedtable').insertOne({
  //   _id: 1234,
  //   name: 'mr meoz',
  //   age: 232,
  // },(e , result)=>{
  //   if(e){
  //     return console.log('what? ',e);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })
  // client.close();
});
