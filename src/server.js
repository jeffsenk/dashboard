import path from 'path';
import {Server} from 'http';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = new Express();
const server = new Server(app);
var db;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(Express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{ 
  db.collection('trades').find().toArray(function(err,result){
    if(err){
      return console.log(err);
    }
    res.render('index.ejs',{trades: result})
  })
});

app.post('/trades',function(req,res){
  db.collection('trades').save(req.body,function(err,result){
    if(err){
      return console.log(err);
    }
    console.log('new db entry saved');
    res.redirect('/');
  });
});

MongoClient.connect('mongodb://jeffsenk:NewYork1234@ds145800.mlab.com:45800/capture',function(err,database){
  if(err){
    return console.log(err);
  }
  db = database;  
  app.listen(3000,function(){
    console.log('listening on port 3000');
  });
});

