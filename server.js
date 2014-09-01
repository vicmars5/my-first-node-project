var express=require('express'),
    swig=require('swig');

var app=express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

app.get('/', function(req, res){
    res.render("index");
});

app.listen(3000);
console.log('Servidor corriendo en el puerto 3000');
