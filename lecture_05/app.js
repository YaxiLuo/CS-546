// 这部分代码的含义是与express
import express from 'express';
const app = express();
import configRoutesFunction from './routes/index.js';

configRoutesFunction(app);

app.listen(5000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:5000');
});
