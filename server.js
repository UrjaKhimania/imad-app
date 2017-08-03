var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var essay = {
    title: "Technology Article",
    heading: "What Really is the Impact of Technology on Teens?",
    date: `August 3rd, 2017
           <br/> --By Urja Khimania`,
    content: "heeeeeeeeeeeeeeeeeeuuuuuuyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = 
       `<!doctype html>
    <html>
        <head>
            <title>
            ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body background="https://s-media-cache-ak0.pinimg.com/236x/e6/53/77/e65377a1908647e5404ea92ffb9b015b--solid-iphone-wallpaper
            -iphone--plus-wallpapers.jpg">
            <div class="container">
                <p><h2>
                ${heading}
                </h2>
                <p>
                ${date}
                </p>
                <p>
                ${content}
                </p>
            </div>
           
            <script type="text/javascript" src="/ui/main.js">
            </script>
        </body>
    </html>` 
    ;
    return htmlTemplate;
}
app.get('/Technology_Article', function (req, res) {
  res.send(createTemplate(essay));
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
