nose_X=0;
nose_Y=0;
function preload(){
 clown_nose = loadImage("https://i.postimg.cc/yNnYqD8P/mustache.png");
};
function setup(){
 canvas= createCanvas(350,350);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
};


function save_photo(){
save("photo.png")
};
function modelLoaded(){
console.log("Model is loaded");
};
 function draw(){
   
   };
