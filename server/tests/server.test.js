const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  text: 'First test todo'
},{
  text: 'Second test todo'
}];

beforeEach((done)=> {
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', ()=>{
  it('should create a new todo',(done)=>{
  var text = 'Text todo text';

  request(app)
  .post('/todos')
  .send({text})
  .expect(200)
  .expect((res)=>{
    expect(res.body.text).toBe(text);
  })
  .end((err,res)=>{
    if (err){
      return done(err);
    }
    Todo.find({text}).then((todos)=>{
      expect(todos.length).toBe(1);
      expect(todos[0].text).toBe(text);
      done();
    }).catch((e)=> done(e));
  });
  });

  it('should fail',(done)=>{
    var text = 'fail fail';

    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res) =>{
      if (err){
  return done(err);
      }
    Todo.find().then((doc)=>{
      expect(doc.length).toBe(2);
      done();
    }).catch((e)=> done(e));
  });
  });

});

describe('Get /todos', ()=>{
  it('should get all ',(done) =>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.docs.length).toBe(2);

    })
    .end(done);

  })
});
