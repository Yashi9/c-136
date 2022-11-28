status = "";

function setup()
{
    canvas = createCanvas(480 , 320);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    objects = document.getElementById("input_box").value;
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}
function draw()
{
    image(video,0,0,480,320);
}