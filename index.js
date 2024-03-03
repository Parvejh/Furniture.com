const express = require('express');
const PORT = 8000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// set the view engine as ejs
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));



app.use(expressLayouts);
app.set(express.static(path.join(__dirname,'/asssets')));

app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

app.use('/',require('./routes'));

app.listen(PORT, (err)=>{
    if(err){
        console.log(`Error in starting the server: ${err}`);
        return;
    }
    console.log(`Server is up & runnin on port: ${PORT}`);
})