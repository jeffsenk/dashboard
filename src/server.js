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
const http = require('https');
var db;
const quandl = "www.quandl.com";
const api_key = "CzvmZAGey2ZUu-EG5Jze";
const delay = Number(3000);

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(Express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{ 
    //initial render only
    res.render('index.ejs')
});

function getRemote(options,res){
  http.get(options,function(api_res){
    var data ="";
    api_res.on('data',function(chunk){
      data += chunk;
    });

    api_res.on('end',function(){
      console.log(data)
      var json_data = JSON.parse(data);
      res.send(json_data.dataset.data[0]);
    });
  }).on('error',function(err){
    console.log(err);
  });
};

function getRemoteArray(options,res){
  http.get(options,function(api_res){
    var data ="";
    api_res.on('data',function(chunk){
      data += chunk;
    });

    api_res.on('end',function(){
      console.log(data)
      var json_data = JSON.parse(data);
      res.send(json_data.dataset.data);
    });
  }).on('error',function(err){
    console.log(err);
  });
};

app.get('/aluminum',function(req,res){
  var product_path = "/api/v3/datasets/LME/PR_AL.json?limit=1&api_key="+api_key;
  var options={
    host: quandl,
    path: product_path
  };
  setTimeout(function(){
    getRemote(options,res);
  },delay);
});

app.get('/nickel',function(req,res){
  var product_path = "/api/v3/datasets/LME/PR_NI.json?limit=1&api_key="+api_key;
  var options={
    host: quandl,
    path: product_path
  };
  setTimeout(function(){
    getRemote(options,res);
  },delay);
});

app.get('/copper',function(req,res){
  var product_path = "/api/v3/datasets/LME/PR_CU.json?limit=1&api_key="+api_key;
  var options={
    host: quandl,
    path: product_path
  };
  setTimeout(function(){
    getRemote(options,res);
  },delay);
});

app.get('/rhodium',function(req,res){
  var product_path = "/api/v3/datasets/JOHNMATT/RHOD.json?limit=30&api_key="+api_key;
  var options ={
    host: quandl,
    path: product_path
  };
  setTimeout(function(){
    getRemoteArray(options,res);
  },delay);
});

app.get('/palladium',function(req,res){
  var product_path = "/api/v3/datasets/JOHNMATT/PALL.json?limit=30&api_key="+api_key;
  var options ={
    host: quandl,
    path: product_path
  };
  setTimeout(function(){
    getRemoteArray(options,res);
  },delay);
});

app.get('/ruthenium',function(req,res){
  var product_path = "/api/v3/datasets/JOHNMATT/RUTH.json?limit=1&api_key="+api_key;
  var options ={
    host: quandl,
    path: product_path
  };
  setTimeout(function(){
    getRemote(options,res);
  },delay);
});

app.get('/iridium',function(req,res){
  var product_path = "/api/v3/datasets/JOHNMATT/IRID.json?limit=1&api_key="+api_key;
  var options ={
    host: quandl,
    path: product_path
  };
  setTimeout(function(){
    getRemote(options,res);
  },delay);
});

app.get('/platinum',function(req,res){
  var product_path = "/api/v3/datasets/JOHNMATT/PLAT.json?limit=30&api_key="+api_key;
  var options ={
    host: quandl,
    path: product_path
  };
  setTimeout(function(){
    getRemoteArray(options,res);
  },delay);
});

app.get('/trades',function(req,res){
  db.collection('trades').find().toArray(function(err,result){
    if(err){return console.log(err);}
    res.send({result}); 
  });
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

