Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML= '<img id="captured_img" src="'+data_uri+'">';
    });
}

console.log('ml5 version is' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Bmc2oZ3nG/model.json',modelloaded);

