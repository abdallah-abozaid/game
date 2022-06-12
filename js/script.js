const element = document.getElementById("app");
const state = document.getElementById("state");
let stateBlock = document.getElementById("stateBlock");
let blockGame = document.getElementById("blockGame");
let bbb = document.getElementById("bbb");
let valueYou = document.getElementById("valueYou");
let valueme = document.getElementById("valueme");
const result = document.getElementById("result");
const tryAgain = document.getElementById("tryAgain");
const you = document.getElementById("you");
const abd = document.getElementById("abd");
const play = document.getElementById("play");
const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
window.onload = function () {
    result.style.display = "none";
}
element.style.height = window.innerHeight + "px";
const imgesArr = ["./imges/Rock.jfif", "./imges/hand.jpg", "./imges/Scissors.jpg"]
let youChoice=""
play.onclick = function () {
    result.style.display = "block"
    const abdChoice=imgesArr[Math.floor(Math.random() * imgesArr.length)]
    abd.src = abdChoice;
    you.src = youChoice;
    if (youChoice == abdChoice) {
       state.innerHTML="تعااادل!!" 
    } else if (youChoice == "./imges/Rock.jfif" && abdChoice == "./imges/hand.jpg") {
        state.innerHTML = "لقد خسرت ههه !" 
         let value = valueme.innerHTML
        valueme.innerHTML = parseInt(value)+1
    }else if (abdChoice == "./imges/Rock.jfif" && youChoice == "./imges/hand.jpg") {
        state.innerHTML = "لقد فزت  !"
        let value = valueYou.innerHTML
        valueYou.innerHTML = parseInt(value)+1
    }else if (youChoice == "./imges/Rock.jfif" && abdChoice == "./imges/Scissors.jpg") {
        state.innerHTML = "لقد فزت  !"
         let value = valueYou.innerHTML
        valueYou.innerHTML = parseInt(value)+1
    }else if (abdChoice == "./imges/Rock.jfif" && youChoice == "./imges/Scissors.jpg") {
        state.innerHTML = "لقد خسرت ههه !"
         let value = valueme.innerHTML
        valueme.innerHTML = parseInt(value)+1
    } else if (youChoice == "./imges/hand.jpg" && abdChoice == "./imges/Rock.jfif ") {
        state.innerHTML = "لقد فزت  !" 
         let value = valueYou.innerHTML
        valueYou.innerHTML = parseInt(value)+1
    }else if (abdChoice == "./imges/hand.jpg" && youChoice == "./imges/Rock.jfif ") {
        state.innerHTML = "لقد خسرت ههه !" 
         let value = valueme.innerHTML
        valueme.innerHTML = parseInt(value)+1
    }else if (youChoice == "./imges/hand.jpg" && abdChoice == "./imges/Scissors.jpg") {
        state.innerHTML = "لقد خسرت ههه !"
         let value = valueme.innerHTML
        valueme.innerHTML = parseInt(value)+1
    }else if (abdChoice == "./imges/hand.jpg" && youChoice == "./imges/Scissors.jpg") {
        state.innerHTML = "لقد فزت  !"
         let value = valueYou.innerHTML
        valueYou.innerHTML = parseInt(value)+1
    } else if (youChoice == "./imges/Scissors.jpg" && abdChoice == "./imges/Rock.jfif ") {
        state.innerHTML = "لقد خسرت ههه !" 
         let value = valueme.innerHTML
        valueme.innerHTML = parseInt(value)+1
    }else if (abdChoice == "./imges/Scissors.jpg" && youChoice == "./imges/Rock.jfif ") {
        state.innerHTML = "لقد فزت  !" 
         let value = valueYou.innerHTML
        valueYou.innerHTML = parseInt(value)+1
    }else if (youChoice == "./imges/Scissors.jpg" && abdChoice == "./imges/hand.jpg") {
        state.innerHTML = "لقد فزت  !"
         let value = valueYou.innerHTML
        valueYou.innerHTML = parseInt(value)+1
    }else if (abdChoice == "./imges/Scissors.jpg" && youChoice == "./imges/hand.jpg") {
        state.innerHTML = "لقد خسرت ههه !"
         let value = valueme.innerHTML
        valueme.innerHTML = parseInt(value)+1
    }
        stateBlock.classList.remove("hide");
    tryAgain.style.display = "block";
    play.style.display = "none";
    blockGame.style.display = "none";
}
tryAgain.onclick = function () {
    result.style.display = "none";
    tryAgain.style.display = "none";
    state.innerHTML = "";
    play.style.display = "none";
    blockGame.style.display = "block";
     bbb.style.display = "block";
}
Rock.onclick = function () {
    youChoice = "./imges/Rock.jfif";
    play.style.display = "block";
    bbb.style.display = "none";
}
Paper.onclick = function () {
    youChoice = "./imges/hand.jpg";
    play.style.display = "block";
    bbb.style.display = "none";
}
Scissors.onclick = function () {
    youChoice = "./imges/Scissors.jpg";
    play.style.display = "block";
    bbb.style.display = "none";
}