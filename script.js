let lives= 7;

let one, two, three;
let numberclicked=1;
let uno = Math.floor(Math.random() * 3)+1;
let dos = Math.floor(Math.random() * 3)+1;
let tres = Math.floor(Math.random() * 3)+1;

const first= document.getElementById("one");
const second= document.getElementById("two");
const third= document.getElementById("three");
const submit= document.getElementById("submit");
submit.addEventListener("click", checkGame);

first.addEventListener("click", ()=>{
    if (numberclicked==1){
        one=1;
        numberclicked=2;
    }else if (numberclicked==2){
        two=1;
        numberclicked=3;
    }else if (numberclicked==3){
        three=1;
        numberclicked=1;
    }
});

second.addEventListener("click", ()=>{
    if (numberclicked==1){
        one=2;
        numberclicked=2;
     } else if (numberclicked==2){
        two=2;
        numberclicked=3;
    }else if (numberclicked==3){
        three=2;
        numberclicked=1;
    }
});

third.addEventListener("click", ()=>{
    if (numberclicked==1){
        one=3;
        numberclicked=2;
    }else if (numberclicked==2){
        two=3;
        numberclicked=3;
    }else if (numberclicked==3){
        three=3;
        numberclicked=1;
    }
});





function checkGame(){
    const result= document.getElementById("result");
    console.log("_____");
    console.log(one);
    console.log(two);
    console.log(three);

    console.log(uno);
    console.log(dos);
    console.log(tres);

//    if (lives==1){
//         result.textContent= `You lose`;
//     }else{
//     if (sum==answer){
//         result.textContent= `Correct`;
//     }else if (sum>answer){
//         result.textContent= `Lower`;
//         lives= lives-1;
//     }else if (sum<answer){
//         result.textContent=`Higher`;
//         lives= lives-1;
//     }
// }
}