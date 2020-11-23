const express = require('express');
const path = require('path');
const c = require('chinpunkanpun');
const app = express();
const PORT = process.env.PORT || 3456;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/sentence', (req, res) => {
  res.send({ sentence: c.sentence() });
});

app.listen(PORT);
