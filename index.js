// function determines the approptriate sound clip is played depending onc case
function soundMap (item) {
   
    switch(item){
       case "w":
         var tom1Sound = new Audio ("sounds/tom-1.mp3");
         tom1Sound.play()
         break;
       case "a":
         var tom2Sound = new Audio ("sounds/tom-2.mp3");
         tom2Sound.play()
         break;
       case "s":
         var tom3Sound = new Audio ("sounds/tom-3.mp3");
         tom3Sound.play()
         break;
       case "d":
         var tom4Sound = new Audio ("sounds/tom-4.mp3");
         tom4Sound.play()
         break;
       case "j":
         var snareSound = new Audio ("sounds/snare.mp3");
         snareSound.play()
         break;
       case "k":
         var kickSound = new Audio ("sounds/kick-bass.mp3");
         kickSound.play()
         break;
       case "l":
         var crashSound = new Audio ("sounds/crash.mp3");
         crashSound.play()
         break;
        default:
            alert("Sorry, the key \'"+item+"\' is not a applicable command")
 
 }};
 //event handling function for the click event on drum buttions, sou function is then called with each for loop iteration
 function clickListener(element) {
 
 
 
     var domSelector = document.querySelectorAll(".drum")
     
     
     for(i = 0; i<domSelector.length;i++){
       domSelector[i].addEventListener("click",eventCheck)
       }
     }
 clickListener("drum")


 
 // eventListener initiated for any key presses, call clickCheck function if keypress occurs
 document.addEventListener("keydown", eventCheck) 

//  function with siwtch statemnent, to pass appropriate parameter to soundMap callback function

function eventCheck(event) {

    
    switch(event.type){
        case "click":
         soundMap(this.innerHTML)
         break;
        case "keydown":
         soundMap(event.key)
         break;
    }
}
  
 

 
 
 