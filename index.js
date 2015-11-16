var http = require('http');
var express = require('express');
var server = express();
var ejs = require('ejs');
var respuesta = http;

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:zopp@ds031792.mongolab.com:31792/example');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log(callback);
}); 

console.log(__dirname);

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Gildegar' });

kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});

/*var Kitten = mongoose.model('Cat', kitty);

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});*/

var port = 3002;

server.use('/public',express.static('public'));

server.set('view engine','ejs');

server

.get('/',function(req,res){
	res.render('home',{
		title_page: 'Home System'
	});
})

.get('/register',function(req,res){
     res.render('register',{
      title_page: 'Registro A'
    });
});

server.listen(port);

console.log('Server Running at port '+ port);
