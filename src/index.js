const uuid = require('uuid');
const express = require('express');
 

const app = express();

//body datatype
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//hardcode users
let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};
 
let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

// user resource
app.get('/users', (req, res) => {
  return res.send('GET HTTP: ' + Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send('GET HTTP: id: ' + users[req.params.userId].id + '\n'
                                    +users[req.params.userId].username);
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
 
app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});
 
app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});
 

// msg resource
app.get('/mess', (req, res) => {
  return res.send('GET HTTP: ' + Object.values(messages));
});

app.get('/mess/:messid', (req, res) => {
  return res.send('GET HTTP: id: ' + messages[req.params.messid].text + '\n'
                                    +messages[req.params.messid].userId);
});

app.post('/mess',(req,res) =>{
  const id = uuid.v4();
  console.log(req + "< this is req \n" + res + "< this is res \n" + id + "< this is id = uuidv4()");
  const message = {
    id,
    text: req.body.text,
  };

  messages[id] = message;
  console.log(message);
  return res.send(message);
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);