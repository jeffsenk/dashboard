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
const request = require('request');
const throttledRequest = require('throttled-request')(request);
import Parser from 'rss-parser';
var db;
const quandl = "https://www.quandl.com";
const api_key = "CzvmZAGey2ZUu-EG5Jze";
const delay = Number(3000);

throttledRequest.configure({
  requests: 3,
  milliseconds: 1000
});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(Express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{ 
    //initial render only
    res.render('index.ejs')
});

function getRemote(options,res){
  throttledRequest(options, function(err,api_res,body){
      if(api_res.statusCode == 200){
        var data = JSON.parse(body);
       console.log(data.dataset.database_code,data.dataset.name,new Date());
        res.send(data.dataset.data[0]);
      }
  }).on('error',function(err){
    console.log(err);
  });
};

function getRemoteArray(options,res){
  throttledRequest(options,function(err,api_res,body){
    if(api_res.statusCode == 200){
      var data = JSON.parse(body);
      res.send(data.dataset.data);
    }
  }).on('error',function(err){
    console.log(err);
  });
};

app.get('/bullionDesk',function(req,res){
  Parser.parseURL('https://www.bulliondesk.com/feed/',function(err,parsed){
    console.log(parsed.feed.title);
    res.send(parsed.feed);
  });
});

app.get('/aluminum',function(req,res){
  var product_path = quandl+"/api/v3/datasets/LME/PR_AL.json?limit=1&api_key="+api_key;
  var options={
    url: product_path
  };
    getRemote(options,res);
});

app.get('/nickel',function(req,res){
  var product_path = quandl+"/api/v3/datasets/LME/PR_NI.json?limit=1&api_key="+api_key;
  var options={
    url: product_path
  };
    getRemote(options,res);
});

app.get('/copper',function(req,res){
  var product_path = quandl+"/api/v3/datasets/LME/PR_CU.json?limit=1&api_key="+api_key;
  var options={
    url: product_path
  };
  getRemote(options,res);
});

app.get('/rhodium',function(req,res){
  var product_path = quandl+"/api/v3/datasets/JOHNMATT/RHOD.json?limit=30&api_key="+api_key;
  var options ={
    url: product_path
  };
    getRemoteArray(options,res);
});

app.get('/palladium',function(req,res){
  var product_path = quandl+"/api/v3/datasets/JOHNMATT/PALL.json?limit=30&api_key="+api_key;
  var options ={
    url: product_path
  };
    getRemoteArray(options,res);
});

app.get('/ruthenium',function(req,res){
  var product_path = quandl+"/api/v3/datasets/JOHNMATT/RUTH.json?limit=1&api_key="+api_key;
  var options ={
    url: product_path
  };
    getRemote(options,res);
});

app.get('/iridium',function(req,res){
  var product_path = quandl+"/api/v3/datasets/JOHNMATT/IRID.json?limit=1&api_key="+api_key;
  var options ={
    url: product_path
  };
    getRemote(options,res);
});

app.get('/platinum',function(req,res){
  var product_path = quandl+"/api/v3/datasets/JOHNMATT/PLAT.json?limit=30&api_key="+api_key;
  var options ={
    url: product_path
  };
    getRemoteArray(options,res);
});

app.get('/trades',function(req,res){
  db.collection('trades').find().toArray(function(err,result){
    if(err){return console.log(err);}
    res.send({result}); 
  });
});

app.get('/commentary',function(req,res){
  db.collection('commentary').find().toArray(function(err,result){
    res.send({result});
  });
});

app.get('/steel',function(req,res){
  db.collection('steel').find().toArray(function(err,result){
    console.log(result);
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
  app.listen(80,function(){
    console.log('listening on port 80');
  });
});

