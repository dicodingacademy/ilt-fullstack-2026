// Source code for demo web server with Express
import express from 'express';

const app = express();
app.use(express.json());

// Routing response based on url & HTTP verb/method using Express
app.get('/', (req, res) => {
  res.json({ message: 'You are doing GET' });
});

app.post('/', (req, res) => {
  res.json({ message: 'You are doing POST' });
});

// run the HTTP server
app.listen(3000, 'localhost', () => {
  console.log('Server start at http://localhost:3000');
});

