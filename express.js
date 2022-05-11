var express = require('express');
var fs = require('fs');
var app = express();
var http = require('https');

var angry=[];
var happy=[];
var love =[];
var surprise =[];

var angry_address = 'https://raw.githubusercontent.com/Deepak9242/emotionapi/main/angry/angry.txt';



fs.readFile('angry.txt',function(err,data){
    if(err)
    {
        console.log(err);
    }
  angry = data.toString().split("\r\n");
 
})

fs.readFile('happy.txt',function(err,data){
    if(err)
    {
        console.log(err);
    }
  happy = data.toString().split("\r\n");
 
})

fs.readFile('love.txt',function(err,data){
    if(err)
    {
        console.log(err);
    }
  love = data.toString().split("\r\n");
 
})

fs.readFile('surprise.txt',function(err,data){
    if(err)
    {
        console.log(err);
    }
  surprise = data.toString().split("\r\n");
 
})



app.get('/angry',function(req,res){
   // res.writeHead(200,{'Content-Type':'text/plain'})
   let m = angry.length;
   let num = Math.floor(Math.random()*(m))
   
    res.json({'image-url':'https://github.com/Deepak9242/emotionapi/raw/main/angry/'+angry[num].trim()});
   // console.log( typeof arr[0]);
})

app.get('/happy',function(req,res){
    // res.writeHead(200,{'Content-Type':'text/plain'})
    let m = happy.length;
    let num = Math.floor(Math.random()*(m))
    
     res.json({'image-url':'https://github.com/Deepak9242/emotionapi/raw/main/happy/'+happy[num].trim()});
     //console.log( typeof arr[0]);
 })

 app.get('/love',function(req,res){
    // res.writeHead(200,{'Content-Type':'text/plain'})
    let m = love.length;
    let num = Math.floor(Math.random()*(m))
    
     res.json({'image-url':'https://github.com/Deepak9242/emotionapi/raw/main/love/'+love[num].trim()});
     //console.log( typeof arr[0]);
 })

 app.get('/surprise',function(req,res){
    // res.writeHead(200,{'Content-Type':'text/plain'})
    let m = surprise.length;
    let num = Math.floor(Math.random()*(m))
    
     res.json({'image-url':'https://github.com/Deepak9242/emotionapi/raw/main/surprised/'+surprise[num].trim()});
     //console.log( typeof arr[0]);
 })



app.listen(process.env.port||3000);

