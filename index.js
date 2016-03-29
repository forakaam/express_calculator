var app = require('express')();
app.get('/', function(req,res){
  res.send('Welcome to the Express Calculator');
});
app.get('/:opp/:num1/:num2', function(req,res){
  var symbol;
  console.log(req.params.opp);
  if (req.params.opp === "add")
    symbol = "+";
  else if (req.params.opp === "sub")
    symbol = "-";
  else if (req.params.opp === "mult")
    symbol = "*";
  else if (req.params.opp === "div")
    symbol = "/";

  res.send(`${req.params.num1} ${symbol} ${req.params.num2} = ` + eval(req.params.num1 + symbol + req.params.num2));
});
app.listen(3000,function(){
  console.log('Serving...');
});