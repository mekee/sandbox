const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 1234;

const simpleList = ['kupi cvijece', 'rijesi zagonetku', 'napravi dorucak', 'napisi zadacu'];

// GETTERS

app.get('/randomCounterValue', (req, res) => res.json({ counter: Math.round(Math.random() * 100) }));

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
