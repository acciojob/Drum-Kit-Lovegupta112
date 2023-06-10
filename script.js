//your JS code here. If required.


let audio;



let btn=document.getElementsByTagName('button');


 document.addEventListener('keypress',soundFunc);



function soundFunc(event){
console.log(event.key)
let key=(event.key).toLowerCase();
if(key==='a'){
    let audio=new Audio('sounds/boom.wav');
    audio.play();
}
if(key==='s'){
    let audio=new Audio('sounds/clap.wav');
    audio.play();
}
if(key==='d'){
    let audio=new Audio('sounds/hihat.wav');
    audio.play();
}
if(key==='f'){
    let audio=new Audio('sounds/kick.wav');
    audio.play();
}
if(key==='g'){
    let audio=new Audio('sounds/openhat.wav');
    audio.play();
}
if(key==='h'){
    let audio=new Audio('sounds/ride.wav');
    audio.play();
}
if(key==='j'){
    let audio=new Audio('sounds/snare.wav');
    audio.play();
}
if(key==='k'){
    let audio=new Audio('sounds/tink.wav');
    audio.play();
}
if(key==='l'){
    let audio=new Audio('sounds/tom.wav');
    audio.play();
}
}