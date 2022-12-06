const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(routes);
app.use((error, req, res, next) => {
  console.log(error);

  res.sendStatus(500);
});

app.listen(PORT, () => console.log(`🚀 Server started on http://localhost:${PORT}.`));
