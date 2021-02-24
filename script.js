// Declaring the variables for the program
var containerEle = document.body.querySelector(".container");
var resultEle = document.querySelector(".result");
var reshuffleEle = document.querySelector(".reshuffle");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

// This function is the function to display the message line by line
function lineByLine(array){
  for(var i = 0; i < message.length; i++){
    var ele = document.createElement("div");
    ele.innerHTML = message[i];
    resultEle.appendChild(ele);
  }
}

// This function will clear the result div
function clearDiv() { 
  var div = document.querySelector(".result"); 
              
  while(div.firstChild) { 
    div.removeChild(div.firstChild); 
  } 
}

// This function will take the animal array and change it to the message specified for animal 
function displayMessage(array){
  message = []
 for(var i = 0; i < animals.length; i++){
    if(animals[i] === "dog"){
      message.push("Borf Borf");
    }
    else if(animals[i] === "cat"){
      message.push("I am a cat");
    }
    else{
      message.push("I'm an aminal");
    }
  }
  lineByLine(message);
}

displayMessage(animals);

// Reshuffle button that is calling to clear div, and display the message again but scrambled 
reshuffleEle.addEventListener("click", function(){
  clearDiv();
  displayMessage(animals.sort(()=> Math.random()-0.5));  
})