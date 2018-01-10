//http://http://api.postcodes.io/

var postcode = "EX2 7FP";
var result;

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
    console.log(postcode);
    let url = "https://api.postcodes.io/postcodes/";
    result = loadJSON(url+postcode);//The URL is sent to the loadJSON that returns the data to the result variable
    console.log(result);
}

function setup() {
  //var canvas  = createCanvas(1280, 720); //Canvas size defined
  //canvas.parent("JavaContent");
  //<div id="JavaContent"></div>
  loadImage("assets/UKMAP.png", function(backmap){
    image(backmap,0,0,500,666)
  });

  createCanvas(1280, 720); //Creating canvas
  background(164,205,253); //Background colour set
  fill(255);
  noStroke();
  rect(0,0,500,666);
}

function draw(){
  //background(164,205,253)
  //frameRate(60)
  //fill(random(255),random(255),random(255));
  //ellipse(width/2, height/2, 50, 50);

  push();
    frameRate(1)
    //text("Location is " + result.result.latitude + " " + result.result.longitude, width/2, height/2);
    plot();
  pop();
  //noLoop();
}

function searchpostcode() {
    postcode = document.getElementById("userInput").value;
    preload();
}

function plot() {
  //let laty = result.result.latitude;
  //let longx = result.result.longitude;
  console.log(result.result.latitude);
  let laty = map(result.result.latitude,59.7430800000000,49.8850000000000,0,666);
  console.log(laty);
  console.log(result.result.longitude);
  let longx = map(result.result.longitude,-10.9973100000000,2.0764200000000,0,500);
  console.log(longx);
  fill(random(255),random(255),random(255));
  noStroke();
  ellipse(longx,laty,10,10);
}
