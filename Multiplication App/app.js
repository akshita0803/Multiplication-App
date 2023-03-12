const num1= Math.ceil(Math.random()*10);
const num2= Math.ceil(Math.random()*10);


const formEl =document.getElementById("form");
const inputEl =document.getElementById("input");
const scoreEl =document.getElementById("score");


let score= JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEl.innerText = `Score: ${score}`;

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`


 formEl.addEventListener("submit",()=>{
    const userValue = +inputEl.value;
    if(userValue===num1*num2){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
 });
 function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
 }
