const { login } = require('./db');
const database = require('./db');
const express= require('express');
const fs = require('fs');
const { use } = require('express/lib/application');
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;
const app = express();

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }))


app.post('/register' , (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const mail = req.body.mail;
    var reg = database.register(username , password , mail);
    if (reg)
    {
        res.json(1)
        console.log('success registeration');
    }
    else {
        res.json(0)
        console.log('unseccess')}
    

})
app.post('/login' , (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    var log  = database.login(username , password);
    if (log == 1)
    res.json(1)
    else res.json(0)
    
})


app.listen(process.env.PORT || 3000,()=>{
    console.log('Listening on port 3000..')
})
