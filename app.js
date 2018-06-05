const express = require('express');

// analyse les données du formulaire de contact
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// moteur view = ejs
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('form');
});


app.post('/contact', function(req, res){
    var name = req.body.name;
    var mail = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;

    console.log('From : ' + name );
    console.log('Mail : ' + mail);
    console.log('Sujet : ' + subject);
    console.log('Message : ' + message);

})

app.post('/calc', function(req, res){
    var number1 = parseInt(req.body.number1);
    var number2 = parseInt(req.body.number2);
    var operation = req.body.operations;
    var result = '';

    if (operation == '+'){
        var result = number1 + number2;
    }else if (operation == '-'){
        var result = number1 - number2;
    }else if (operation == '*'){
        var result = number1 * number2;
    }else if (operation == '/'){
        var result = number1 / number2;
    }else {
        alert('error');
    }

    console.log(result);
    // res.render('form', {result: result});

});

app.listen(8080, function(){
    console.log('server ON');
})