var folkloreScore = 0;
var evermoreScore = 0;

var questionCount = 0;
var numQuestion = 0; /*Add your JavaScript here*/

var result = document.getElementById("result");



var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", folklore);
q1a2.addEventListener("click", evermore);
q2a1.addEventListener("click", evermore);
q2a2.addEventListener("click", folklore);
q3a1.addEventListener("click", folklore);
q3a2.addEventListener("click", evermore);

function evermore() {
  evermoreScore +=1;
  questionCount +=1;
  console.log("questionCount = "+ questionCount + "evermoreScore="+ evermoreScore);
  if (questionCount ==3 ) {
    console.log("The quiz is done!")
    showResult();
  }
}


function folklore() {
  folkloreScore  +=1;
  questionCount +=1;
  console.log("questionCount = "+ questionCount + "folkloreScore="+ folkloreScore);
  if (questionCount ==3 ) {
    console.log("The quiz is done!")
    showResult();
  }
}

function showResult(){
  if (evermoreScore >= 2) {
    result.innerHTML=("You are more of an evermore person!")
      console.log("You are more of an 'evermore' person!");
    }
    else {
      result.innerHTML=("You are more of a folklore person!")
      console.log("You are more of an 'folklore' person!");
    }
}







