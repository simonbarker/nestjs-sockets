var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

http.listen(3005, () => {
  console.log('serving front end on 3005');
});