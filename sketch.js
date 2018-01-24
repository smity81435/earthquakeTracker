//Coordinates of ISS
    var mapimg;
function preload(){
    mapimg=loadImg('https://api.mapbox.com/styles/v1/smity81435/cj84uobrc11jy2ro39z8epta2/static/0.000000,-0.000000,0.00,0.00,0.00/600x400?access_token=pk.eyJ1Ijoic21pdHk4MTQzNSIsImEiOiJjajg0dWx2Y2cwZThnMnFvNng2eWs4MHNoIn0.gaRKgdd2a8LnNMsiFJKlLw')
    
}
function setup(){
    setInterval(getIss,1000);
    setInterval(clock,1000);
    
    createCanvas(600,400);
    Image(mapimg,0,0);
    
    var img = loadImage("map.png");
    background(img,100);
    //fill(random(0,255),random(0,255),random(0,255),50);
    getIss(); 
}

function getIss(){
    loadJSON("http://api.open-notify.org/iss-now.json",visualize);
}



function visualize(data){
    fill(random(0,255),random(0,255),random(150,255));
	var x=map(data.iss_position.longitude,-180,180,0,800);
	var y=map(data.iss_position.latitude,-70,70,0,500);
    
    //text(((day())+(hour())+(minute())+(second()),0,20);
	ellipse(x,y,20,20);
    console.log(x);
    console.log(y);
    
    

}

function clock(){
    var m=month();
    var d=day();
    var y=year();
    var h=hour();
    var min=minute();
    var sec=second();
    fill(255,255,255);
    rect(0,0,150,70);
    
    fill(random(0-255));
    textSize(25);
    text(m + '.' + d +'.' + y,25,20);
    text(h + ':' + min + ':' + sec, 20, 60);  
}