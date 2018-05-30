var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

let ProductCreationRouter = require('./routes/product-creation');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produit',ProductCreationRouter);

app.get('/about', (req, res) =>{
  res.end("<h1>Bienvenue sur la page 'A propos'</h1>");
});
app.get('/contact',(req, res) =>{
  res.send('<h1>Page Contact</h1>');
});

app.get('/api/products',(req, res) =>{
  const monObjet = { "name" : "hamac"};
  const monObjetString = JSON.stringify(monObjet);

  res.send(monObjetString);
});

app.get(/(ba)+r+$/, (req,res)=>{
  res.send('URL catched !');
});
/* app.route('/products/creation')
.get((req, res) =>{
  res.send(`Formulaire nouveau Produit
  <form method="post">
  <label for="name">Nom du Produit</label>
  <input type="text" name="name"/>
  <input type="submit" value="cree"/>
  </form>`);
})
.post((req, res) =>{
  res.send(`<h1>Produit crée </h1>`);
}); 

app.put('/products/modification',(req, res) =>{
  res.send('<h1>Produit modifié</h1>');
});

app.delete('/products/suppression',(req, res) =>{
  res.send('<h1>Produit suprmé</h1>');
});

app.get(
  '/produit/detail',
  (req, res, next) =>{
console.log("[spy] : Access au detail u produit");
next();
  }, (req, res) =>{
    res.send('<h1>Detail du Produit </h1>');
  }
);
*/

class Testons {
  first() {return this;}
  second() {return this;}
}

let monObjet = new Testons();
monObjet.first().second();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
