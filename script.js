let lives= 7;

let one=0, two=0, three=0;
let numberclicked=1;
let uno = Math.floor(Math.random() * 3)+1;
let dos = Math.floor(Math.random() * 3)+1;
let tres = Math.floor(Math.random() * 3)+1;

const first= document.getElementById("one");
const second= document.getElementById("two");
const third= document.getElementById("three");
const submit= document.getElementById("submit");
const guess= document.getElementById("guess");
const numLives= document.getElementById("lives");
const previousNumber= document.getElementById("previousNumber");
const clearB= document.getElementById("clearB");
const restart= document.getElementById("Restart");
submit.addEventListener("click", checkGame);

clearB.addEventListener("click", clearGuess);

restart.addEventListener("click", restartGame);

var addOneFirst = document.createTextNode("1");
var addTwoFirst = document.createTextNode("2");
var addThreeFirst = document.createTextNode("3");

var addOneSecond = document.createTextNode("1");
var addTwoSecond = document.createTextNode("2");
var addThreeSecond = document.createTextNode("3");

var addOneThird = document.createTextNode("1");
var addTwoThird = document.createTextNode("2");
var addThreeThird = document.createTextNode("3");

first.addEventListener("click", ()=>{
    if (numberclicked==1){
        one=1;
        guess.appendChild(addOneFirst);
        numberclicked=2;
    }else if (numberclicked==2){
        two=1;
        guess.appendChild(addOneSecond);
        numberclicked=3;
    }else if (numberclicked==3){
        three=1;
        guess.appendChild(addOneThird);
        numberclicked=0;
    }
});

second.addEventListener("click", ()=>{
    if (numberclicked==1){
        one=2;
        guess.appendChild(addTwoFirst);
        numberclicked=2;
     } else if (numberclicked==2){
        two=2;
        guess.appendChild(addTwoSecond);
        numberclicked=3;
    }else if (numberclicked==3){
        three=2;
        guess.appendChild(addTwoThird);
        numberclicked=0;
    }
});

third.addEventListener("click", ()=>{
    if (numberclicked==1){
        one=3;
        guess.appendChild(addThreeFirst);
        numberclicked=2;
    }else if (numberclicked==2){
        two=3;
        guess.appendChild(addThreeSecond);
        numberclicked=3;
    }else if (numberclicked==3){
        three=3;
        guess.appendChild(addThreeThird);
        numberclicked=0;
    }
});

function checkGame(){
    if (lives>0){
    numberclicked=1;
    const result= document.getElementById("result");
    let sum= one+""+ two+ ""+three;
    let answer= uno+""+dos+""+tres;
   if (lives==1){
        result.textContent= `You lose. The code was ${answer}`;
        lives= lives-1;
        numLives.textContent=`Lives: ${lives}`;
    }else{
    if (sum==answer){
        result.textContent= `Your guess is Correct!`;
    }else if (sum>answer){
        result.textContent= `Your guess is high`;
        lives= lives-1;
        numLives.textContent=`Lives: ${lives}`;
    }else if (sum<answer){
        result.textContent=`Your guess is low`;
        lives= lives-1;
        numLives.textContent=`Lives: ${lives}`;
    }
    previousNumber.textContent= `Previous Number: ${sum}`;
    clearGuess();
}
}
}

function clearGuess(){
    guess.innerHTML= "";
    numberclicked=1;
    one=0;
    two=0;
    three=0; 
}

function restartGame(){
    clearGuess();
    uno = Math.floor(Math.random() * 3)+1;
    dos = Math.floor(Math.random() * 3)+1;
    tres = Math.floor(Math.random() * 3)+1;
    lives=7;
    numLives.textContent=`Lives: ${lives}`;
    previousNumber.textContent= `Previous Number: `;
    result.textContent= `Your guess is `;
}