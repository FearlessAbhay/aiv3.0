status = "";
video = "";

function preload()
{
    video = createVideo('video.mp4');
    video.hide();
    
}
function setup()
{
    canvas = createCanvas(550,380);
    canvas.center();

}
function start()
{
    objectdetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status:Detecting objects";

}
function modelLoaded()
{
    console.log("modelLoaded");
    staus = true;
    video.loop();
    video.speed(1);
    video.volume(0);

}
function gotresult(error, results)
{
    if (error){
        console.log("error");
    }
    console.log("results");
    objects = results;
}
function draw()
{
    image(video,0,0,550,380);
    if (status !="")
    {
    objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Objects Detected";
          document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;

          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
 
    }
}
