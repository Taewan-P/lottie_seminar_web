let express = require('express'), http = require('http'), path = require('path');
// var bodyParser = require('body-parser'), serveStatic = require('serve-static');
const app = express()
const port = 3000

app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('static'));
app.use('/static', express.static(__dirname + '/static'));
app.get('/',function(req,res){ res.render('index.html'); });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})