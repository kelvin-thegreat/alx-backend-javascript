// api.js
const express = require('express');

const app = express();
const PORT_NUMBER = 7865;

app.use(express.json());
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  res.json({ 
    payment_methods: 
    { 
        credit_cards: true, 
        paypal: true
     } 
    });
});

app.post('/login', (req, res) => {
  let username = '';
  if (req.body) {
    username = req.body.userName;
  }
  res.send(`Welcome ${username}`);
});

app.listen(PORT_NUMBER, () => {
  console.log(`API available on localhost port ${PORT_NUMBER}`);
});

module.exports = app;