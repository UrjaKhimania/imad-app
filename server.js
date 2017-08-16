var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});
app.post('/create-user', function (req, res) {
    var username = req.body.username;
  var password = req.body.password;
  var salt = crypto.randomBytes(128).toString("hex");
  var dbString = hash(password, salt);
  pool.query('INSERT INTO "Login" (Username, Password) VALUES ($1, $2)', [username, dbString], function (err, result){
     if (err){
         res.status(500).send(err.toString());
     } else{
         res.send('Account successfully created '+username);
     }
    });
});

app.get('/flappy', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'flappy.html'));
});
app.get('/maze', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'maze.html'));
});

app.get('/crackit', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Crackit.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
