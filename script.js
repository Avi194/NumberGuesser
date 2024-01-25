// variables
const btn = document.querySelector("#start");
var reset = document.querySelector("#reset");
const guess = document.querySelector("#numInput");
var hint = document.getElementById("hint");
var bar = document.querySelectorAll("#hearts");
var hearts = 5;
//preparations or functions
reset.style.visibility ='hidden';
btn.style.visibility ='visible';
var random =  Math.floor(Math.random()*100) + 1;
function playSound(audioName,loop){
    let audio = new Audio(audioName);
    audio.loop = loop;
    audio.play();
}
function retry(){
    hearts = 5;
    reset.style.visibility = 'hidden';
    btn.style.visibility='visible';
    hint.innerHTML = "";
    guess.value = "";
    random =  Math.floor(Math.random()*100) + 1;
    for(var i = 0;i < bar.length;i++)
    {
    bar[i].style.visibility = 'visible';
    }
}
// main code
btn.addEventListener("click",()=>{
    if(guess.value > random){
       hint.innerHTML = "Too High Try Again";
       playSound('decrease.mp3',false);
       hearts = hearts-1;
       console.log("hearts "+hearts);
       guess.value = "";
       if (hearts < 5){
        bar[hearts].style.visibility = 'hidden'
            }
            if(hearts == 0){
                playSound('death.mp3',false);
                hint.innerHTML = "You Loose The Number was "+random;
                reset.style.visibility ='visible';
                btn.style.visibility = 'hidden'
            }
    }
    else if(guess.value < random){
      hint.innerHTML = "Too Low Try Again ";
      playSound('decrease.mp3',false);
      hearts = hearts-1;
      console.log("hearts "+hearts);
      guess.value = "";
      if (hearts < 5){
        bar[hearts].style.visibility = 'hidden'
            }
            if(hearts == 0){
                playSound('death.mp3',false);
                hint.innerHTML = "You Loose The Number was "+random;
                reset.style.visibility ='visible';
                btn.style.visibility = 'hidden'
            }
    }
    else if(guess.value == random){
    hint.innerHTML = "WoW you are correct ";
    hearts = 5 ;
    guess.value = "";

    for(var i = 0;i < bar.length;i++)
    {
    bar[i].style.visibility = 'visible';
    }
    console.log("hearts "+hearts);
    random = 0;
    random =  Math.floor(Math.random()*100) + 1;
    reset.style.visibility = 'hidden';
    btn.style.visibility = 'visible';
    playSound('win.mp3',false);
    setTimeout(()=>{
        hint.innerHTML = "";
    },10000);                    

}

})
