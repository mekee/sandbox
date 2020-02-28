const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(bodyParser.json());

// GET
app.get('/', (req, res) => res.sendFile('index.html'));
app.get('/todo', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'todo.html')));

// POST
const simpleList = ['kupi cvijece', 'rijesi zagonetku', 'napravi dorucak', 'napisi zadacu'];

app.get('/getListItems', (req, res) => res.json(simpleList));

app.post('/add2list', (req, res) => {
   const newValue = req.body.newValue;
   simpleList.push(newValue);
   return res.json(simpleList);
});

app.post('/deleteIndex', (req, res) => {
    const index2delete = req.body.index2delete;
    simpleList.splice(index2delete, 1);
    return res.json(simpleList);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
