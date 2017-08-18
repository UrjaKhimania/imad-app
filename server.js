var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

        var config = {
            user: 'urjakhimania200334',
            database: 'urjakhimania200334',
            host: 'db.imad.hasura-app.io',
            port: '5432',
            password: 'db-urjakhimania200334-33937'
        };
            var pool = new Pool(config);

            var user = document.getElementsByName("user").value;
            var pass = document.getElementsByName("pass").value;
            var create_user = document.getElementById("cu");
            var login = document.getElementById("login");
            create_user.onclick = function(){
                pool.query('INSERT INTO "Login" (username, password) VALUES($1, $2)', [user, pass], function(err, result){alert ("error! User not created!")});
            };

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
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
