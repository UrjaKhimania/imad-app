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
    content: `<p>Technology has proven to be very dangerous for the teenage population in the current society, that there is now a huge 
        threat of a more violent, solitary, and vacuous future for us. As the addictive technology continues to grow, it lures the current 
        generation to it, whose developing brains give them the ability to adapt to almost anything they are exposed to without letting 
        them make any serious decisions for their fragile lives. Despite being highly beneficial for learners like teenagers, technology, 
        for the most part, is proving to be a serious threat to their smooth lives since they are usually not aware of how to utilize it 
        wisely without letting it influence their real world. This way, they easily get hooked up on negative aspects of technology like 
        violent games and texting which bring tremendous impact to their personal lives. Hence, technology harms teens more than it helps 
        them because constant use of it promotes violence and hinders their social skills that are necessary for human existence. </p>`,
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
