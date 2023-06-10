//your JS code here. If required.



window.addEventListener('keydown',soundFunc);



function soundFunc(event){
// console.log(event.keyCode)
let code=event.keyCode;
const audio=document.querySelector(`audio[data-key="${code}"]`);
// console.log(audio);

const keyButton=document.querySelector(`button[data-key="${code}"]`);
// console.log(keyButton);
if(keyButton) keyButton.classList.add('playing');
if(!audio){
    console.log('There is no audio for that key ',audio);
    return;
}
//we want that every time we press key audio shuld be play from starting --
audio.currentTime=0;
audio.play();

}

const keys=document.querySelectorAll('.key');

console.log(keys);

keys.forEach((key)=>{
    key.addEventListener('transitionend',removeTransition);
})

function removeTransition(event){
// console.log(event);
if(event.propertyName!=='transform') return ;
// console.log(this)
this.classList.remove('playing');
}