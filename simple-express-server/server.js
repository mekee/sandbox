const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 1234;

const toDoListItems = ['kupi cvijece', 'rijesi zagonetku', 'napravi dorucak', 'napisi zadacu'];

// GETTERS

app.get('/randomCounterValue', (req, res) => res.json({ counter: Math.round(Math.random() * 100) }));

app.get('/getListItems', (req, res) => {
    return res.json({toDoListItems});
});

app.post('/add2list', (req, res) => {
   console.log(req.body);
   const newValue = req.body.newValue;
   toDoListItems.push(newValue);
   return res.json({toDoListItems});
});

app.post('/deleteIndex', (req, res) => {
    const index2delete = req.body.index2delete;
    toDoListItems.splice(index2delete, 1);
    return res.json({toDoListItems});
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
