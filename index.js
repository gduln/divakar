const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Divakar! DevOps is working ');
});
app.get('/hi',(req,res) => {
  res.send('this modified data in devops by divakar naidu');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});