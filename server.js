const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 6000000 }
    })
)

mongoose.connect('mongodb://localhost/pets',{
    useNewUrlParser: true,
    createIndexes: true,
});

mongoose.set('usecreateIndexes', true);

require('./server/config/mongoose');
require ('./server/config/routes')(app);
require('./server/config/mongoose.js');


app.listen(8000, () => console.log("on 8000"));