var express=require('express');
var app=express();
var port=3000;

var parametros=[];

app.get("/", function (req, res){
	res.send("Ehhhh Puto!!");
});
app.get("/prueba", function(req, res){
    res.send("Estamos entrando en otra URL");
});
app.get("/mensaje/:valor", function (req,res){
    parametros.push(req.params.valor);
    res.send('Envia un mensaje');
});
app.get("/ver_mensaje/", function(req,res){
    res.send('Recibiendo parametros: '+parametros+' <script>setTimeout(function(){window.location.reload()},5000)</script>');
});
app.listen(port);
console.log("Estamos en el puerto 3000");