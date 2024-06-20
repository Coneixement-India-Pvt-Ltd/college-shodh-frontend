const express = require ("express");
const app = express();
const port = process.env.PORT || 3000;
const data = require ("./init/data.js")

app.get("/api/college", (req, res) => {
  const info = data.college;
  res.send(info);
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

