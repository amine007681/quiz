let start = document.querySelector(".buttom-start");
let input = document.querySelector("input");
let timer;
let song  = document.querySelector("audio");
let marioPicture = document.querySelector(".images");
let pika = document.querySelector("#pikatchu");
let header = document.querySelector("header");
let introduction = document.querySelector(".block-introduction");

start.addEventListener("click", starteGame)


function starteGame(){
    timer = setInterval(chrono, 10);
    song.play();
    marioPicture.style.display = " block";
    pika.style.display = "flex";
    header.style.display = "none";
    introduction.style.display = "none";


}


let miniSecondes = 0;
let secondes    = 0;
let minutes     = 0;


function chrono(){ 
    input.value =  minutes + " : " + secondes + " : " + miniSecondes;
    miniSecondes++;
        if(miniSecondes == 100){
            miniSecondes = 0;
            secondes++
        }
        if(secondes == 60){
            secondes = 0;
            minutes++
        }

    }

function stop(){
    clearInterval(timer)
    song.stop();

}