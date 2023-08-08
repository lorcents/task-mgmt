const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
