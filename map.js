var mapimg;
var data;

var clat=0;
var clon=0;
var lon;
var lat;


var zoom=1;
var earthquakes;

function preload(){
    
    mapimg = loadImage('https://api.mapbox.com/styles/v1/smity81435/cj8lunct6677u2rpju0ltfal8/static/0.000000,-0.000000,0.00,0.00,0.00/1200x800?access_token=pk.eyJ1Ijoic21pdHk4MTQzNSIsImEiOiJjajg0dWx2Y2cwZThnMnFvNng2eWs4MHNoIn0.gaRKgdd2a8LnNMsiFJKlLw');
    earthquakes=loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv')
    /*
    earthquakes=loadStrings('')
    var url=("http://api.open-notify.org/iss-now.json");
    data=loadJSON(url);
    lon = map(data.iss_position.longitude,-180,180,0,1200);
    lat = map(data.iss_position.latitude,-90,90,-0-800); */
    
}
    


function setup(data){
    
    createCanvas(1200,800);
    translate(width/2,height/2);
    imageMode(CENTER);
    image(mapimg,0,0);
    
    var cx = mercX(clon);
    var cy = mercY(clat);
    var t=1;
    
    for (var i=0; i < earthquakes.length; i++){
        var data = earthquakes[i].split(/,/); 
        /*console.log(data);*/
        var lat = data[1];
        var lon = data[2];
        var depth= data[3];
        var mag= data[4];
        
        
        
        var x = mercX(lon)-cx;
        var y = mercY(lat)-cy;
        
        mag = pow(10,mag);
        mag = sqrt(mag);
        
        var magmax = sqrt(pow(10,10));
        var d= map(mag,0,magmax,0,180);
        
        fill(depth*5,255,depth*10);
        stroke(depth*5,255,depth*10);
        ellipse(x,y,d,d);
        t=t+.5;
        if(t>=255){
            t=255;
        }
    
        
    }
    
    var x = mercX(lon)-cx;
    var y = mercY(lat)-cy;
    
    
    //ellipse(x,y,8,8);
    
    
}

function mercX(lon){
    lon = radians(lon);
    var a = (300/PI)*pow(2,zoom);
    var b = lon+PI;
    return a*b;
}
function mercY(lat){
    lat = radians(lat);
    var a = (300/PI)*pow(2,zoom);
    var b = tan(PI/4+lat/2);
    var c = PI - log(b);
    return a*c;
}

function draw(){
    var m=month();
    var d=day();
    var y=year();
    var h=hour();
    var min=minute();
    var sec=second();
    fill(0,0,0);
    rect(0,0,150,70);
    
    //fill(random(0-255));
    textSize(25);
    fill(66,244,78);
    text(m + '.' + d +'.' + y,20,20);
    text(h + ':' + min + ':' + sec, 20, 60);
    
    
}
