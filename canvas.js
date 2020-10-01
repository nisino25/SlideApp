var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.55;

// Clear the timer 
timerUI = document.getElementById('timerContainer');
timerUI.style.display = 'none'


let c1 = canvas.getContext('2d');
let c2 = canvas.getContext('2d');
let c3 = canvas.getContext('2d');
let c4 = canvas.getContext('2d');
let c5 = canvas.getContext('2d');
let c6 = canvas.getContext('2d');
let c7 = canvas.getContext('2d');
let c8 = canvas.getContext('2d');
let c9 = canvas.getContext('2d');

let moveCount = 0;

let whatAreYouDoing = "solving";

 



// c1.fillStyle = 'rgba(0, 0 , 255, 0.5)';
// c1.fillRect(400,100,100,100);
// c1.fillText('hey',400,100);
// c1.fillText.font = "96px Helvetica, Arial, sans-serif";
function Can(numText, horz, vert, num) {  
    this.font = "50px Comic Sans MS";
    this.fillStyle = "red";
    this.textAlign = "center";
    this.numText = numText;
    this.horz = horz;
    this.vert = vert;
    this.num = num;
}

can1 = new Can("1", 500, 100, 1);
can2 = new Can("2", 600, 100, 2);
can3 = new Can("3", 700, 100, 3);
can4 = new Can("4", 500, 200, 4);
can5 = new Can("5", 600, 200, 5);
can6 = new Can("6", 700, 200, 6);
can7 = new Can("7", 500, 300, 7);
can8 = new Can("8", 600, 300, 8);
can9 = new Can("", 700, 300, 9);
canDef = new Can;

// Default declaring (not anooying part)
c1.font = c2.font = c3.font = c4. font = c5.font = c6. font = c7.font = c8. font = c9.font =  canDef.font;
c1.fillStyle = c2.fillStyle = c3.fillStyle = c4.fillStyle = c5.fillStyle = c6.fillStyle = c7.fillStyle = c8.fillStyle = c9.fillStyle = canDef.fillStyle; 
c1.textAlign = c2.textAlign = c3.textAlign = c3.textAlign = c4.textAlign = c5.textAlign = c6.textAlign = c7.textAlign = c8.textAlign = c9.textAlign = canDef.textAlign;

// C1- C8 declare
// c1.num = 1;
// c1.fillText(can1.numText, can1.horz, can1.vert);

c1.num = 2;
c1.fillText(can1.numText, can1.horz, can1.vert);

c2.num = 2;
c2.fillText(can2.numText, can2.horz, can2.vert);

c3.num = 3;
c3.fillText(can3.numText, can3.horz, can3.vert);

c4.num = 4;
c4.fillText(can4.numText, can4.horz, can4.vert);

c5.num = 5;
c5.fillText(can5.numText, can5.horz, can5.vert);

c6.num = 6;
c6.fillText(can6.numText, can6.horz, can6.vert);

c7.num = 7;
c7.fillText(can7.numText, can7.horz, can7.vert);

c8.num = 8;
c8.fillText(can8.numText, can8.horz, can8.vert);

c9.num = 9;
c9.fillText(can9.numText, can9.horz, can9.vert);



// // Key function

// keyL = document.getElementById('keyL').addEventListener('click', keyLeft);
// keyU = document.getElementById('keyU').addEventListener('click', keyUp);
// keyD = document.getElementById('keyD').addEventListener('click', keyDown);
// keyR = document.getElementById('keyR').addEventListener('click', keyRight);
keyZ = document.getElementById('shuffle').addEventListener('click', shuffle);

moveBtn = document.getElementById('moveCount'); 
moveBtn.textContent = `Moves: 0`


document.onkeydown = checkKey;

// Key check
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '87' || e.keyCode == '38') {
        // up w
        keyUp();
    }
    else if (e.keyCode == '65' || e.keyCode == '37') {
       keyLeft();
    }
    else if (e.keyCode == '83' || e.keyCode == '40') {
        keyDown();
    }
    else if (e.keyCode == '68' || e.keyCode == '39') {
        keyRight();
    }
    else if (e.keyCode == '90' || e.keyCode == '39') {
        shuffle();
    }

}

// Shuffle func
function shuffle(){
    if (confirm('Ready to shuffle?')){
        resetTimer();
        moveBtn.textContent = `Moves: 0`
        timeDis.textContent = "Time: 00:00.0"

        whatAreYouDoing = "shuffle"
        shuffleCount = 0;
        missCount = 0
        currentMove = 10;
        totalCount = 0;
        unnececasryMove = 0;
        shuffletimes = 20000

        while(shuffleCount < shuffletimes){
            function getRandomInt() {
                randomNum =  Math.floor(Math.random() * Math.floor(4)); 
                return randomNum;
            }

            getRandomInt();
            if(currentMove !== randomNum){
                if(randomNum === 0){
                    gonnaCheck = false;
                    keyLeft(gonnaCheck);
                    if(moved){
                        shuffleCount +=1;
                        currentMove = 0;
                    }else{
                        missCount +=1;
                    }
                }else if (randomNum === 1 ){
                    gonnaCheck = false;
                    keyUp(gonnaCheck);
                        if(moved){
                            shuffleCount +=1;
                            currentMove = 1;
                        }else{
                            missCount +=1;
                        }
                }else if (randomNum === 2){
                    gonnaCheck = false;
                    keyDown(gonnaCheck);
                        if(moved){
                            shuffleCount +=1;
                            currentMove = 2;
                        }else{
                            missCount +=1;
                        }
                }else if (randomNum === 3){
                    gonnaCheck = false;
                    keyRight(gonnaCheck);
                        if(moved){
                            shuffleCount +=1;
                            currentMove = 3;
                        }else{
                            missCount +=1;
                        }
                        
                }
                totalCount +=1;
                
            }else {
                unnececasryMove +=1;
        }

        
        
    }
    gonnaCheck = true;
    console.log(`Miss count = ${missCount} and ${unnececasryMove} unnece Moves`)
    }
    whatAreYouDoing = "solving"
}
    

// It was an idea for animation
//Make a count and if it hits 100 and then stop it
// let dx = 1;
// // function animate(){
// //     requestAnimationFrame(animate);
// //     c1.clearRect(0,0, innerWidth, innerHeight);
// //     c1.beginPath();
// //     c1.num = 1;
// //     c1.fillText(can1.numText, can1.horz, can1.vert);
// //     c1.strokeStyle = 'blue';
// //     c1.stroke();
// //     can1.horz += dx;
// // }
// // animate();




function keyLeft(gonnaCheck){
    if(whatAreYouDoing !== "done"){
        moved = false;
        if(can1.horz - 100 === can9.horz && can1.vert === can9.vert){
            if(!moved){
                can1.horz -=100;
                can9.horz +=100;
                moved = true;
            }
        }
        if(can2.horz - 100 === can9.horz && can2.vert === can9.vert){
            if(!moved){
                can2.horz -=100;
                can9.horz +=100;
                moved = true;
            }
        }
        if(can3.horz - 100 === can9.horz && can3.vert === can9.vert){
            if(!moved){
                can3.horz -=100;
                can9.horz +=100;
                moved = true;
            }
        }
        if(can4.horz - 100 === can9.horz && can4.vert === can9.vert){
            if(!moved){
                can4.horz -=100;
                can9.horz +=100;
                moved = true;
            }
        }
        if(can5.horz - 100 === can9.horz && can5.vert === can9.vert){
            if(!moved){
                can5.horz -=100;
                can9.horz +=100;
                moved = true;
            }
        }
        if(can6.horz - 100 === can9.horz && can6.vert === can9.vert){
            if(!moved){
                can6.horz -=100;
                can9.horz +=100;
                moved = true;
            }
        }
        if(can7.horz - 100 === can9.horz && can7.vert === can9.vert){
            if(!moved){
                can7.horz -=100;
                can9.horz +=100;
                moved = true;
            }
        }
        if(can8.horz - 100 === can9.horz && can8.vert === can9.vert){
            if(!moved){
                can8.horz -=100;
                can9.horz +=100;
                moved = true;
            }
        }
        
        Check();
        display();
        return moved;
    }else{
        console.log('You alredfy finished game. Presss Shuffle')
    }
    

}

function keyUp(gonnaCheck){
    if(whatAreYouDoing !== "done"){

        moved = false;
        if(can1.vert - 100 === can9.vert && can1.horz === can9.horz){
            if(!moved){
                can1.vert -=100;
                can9.vert +=100;
                moved = true;
            }
        }
        if(can2.vert - 100 === can9.vert && can2.horz === can9.horz){
            if(!moved){
                can2.vert -=100;
                can9.vert +=100;
                moved = true;
            }
        }
        if(can3.vert - 100 === can9.vert && can3.horz === can9.horz){
            if(!moved){
                can3.vert -=100;
                can9.vert +=100;
                moved = true;
            }
        }
        if(can4.vert - 100 === can9.vert && can4.horz === can9.horz){
            if(!moved){
                can4.vert -=100;
                can9.vert +=100;
                moved = true;
            }
        }
        if(can5.vert - 100 === can9.vert && can5.horz === can9.horz){
            if(!moved){
                can5.vert -=100;
                can9.vert +=100;
                moved = true;
            }
        }
        if(can6.vert - 100 === can9.vert && can6.horz === can9.horz){
            if(!moved){
                can6.vert -=100;
                can9.vert +=100;
                moved = true;
            }
        }
        if(can7.vert - 100 === can9.vert && can7.horz === can9.horz){
            if(!moved){
                can7.vert -=100;
                can9.vert +=100;
                moved = true;
            }
        }
        if(can8.vert - 100 === can9.vert && can8.horz === can9.horz){
            if(!moved){
                can8.vert -=100;
                can9.vert +=100;
                moved = true;
            }
        }
        
        Check();
        display();
        return moved;
    }else{
        console.log('You alredfy finished game. Presss Shuffle')
    }
    
}

function keyDown(gonnaCheck){
    if(whatAreYouDoing !== "done"){
        moved = false;
        if(can1.vert + 100 === can9.vert && can1.horz === can9.horz){
            if(!moved){
                can1.vert +=100;
                can9.vert -=100;
                moved = true;
            }
        }
        if(can2.vert + 100 === can9.vert && can2.horz === can9.horz){
            if(!moved){
                can2.vert +=100;
                can9.vert -=100;
                moved = true;
            }
        }
        if(can3.vert + 100 === can9.vert && can3.horz === can9.horz){
            if(!moved){
                can3.vert +=100;
                can9.vert -=100;
                moved = true;
            }
        }
        if(can4.vert + 100 === can9.vert && can4.horz === can9.horz){
            if(!moved){
                can4.vert +=100;
                can9.vert -=100;
                moved = true;
            }
        }
        if(can5.vert + 100 === can9.vert && can5.horz === can9.horz){
            if(!moved){
                can5.vert +=100;
                can9.vert -=100;
                moved = true;
            }
        }
        if(can6.vert + 100 === can9.vert && can6.horz === can9.horz){
            if(!moved){
                can6.vert +=100;
                can9.vert -=100;
                moved = true;

            }
        }
        if(can7.vert + 100 === can9.vert && can7.horz === can9.horz){
            if(!moved){
                can7.vert +=100;
                can9.vert -=100;
                moved = true;
            }
        }
        if(can8.vert + 100 === can9.vert && can8.horz === can9.horz){
            if(!moved){
                can8.vert +=100;
                can9.vert -=100;
                moved = true;
            }
        }

        
        Check();
        display();
        return moved;
    }else{ 
        console.log('You alredfy finished game. Presss Shuffle') 
    }
}

function keyRight(gonnaCheck){
    if(whatAreYouDoing !== "done"){

        moved = false;

        if(can1.horz + 100 === can9.horz && can1.vert === can9.vert){
            if(!moved){
                can1.horz +=100;
                can9.horz -=100;
                moved = true;
            }
        }
        if(can2.horz + 100 === can9.horz && can2.vert === can9.vert){
            if(!moved){
                can2.horz +=100;
                can9.horz -=100;
                moved = true;
            }
        }
        if(can3.horz + 100 === can9.horz && can3.vert === can9.vert){
            if(!moved){
                can3.horz +=100;
                can9.horz -=100;
                moved = true;
            }
        }
        if(can4.horz + 100 === can9.horz && can4.vert === can9.vert){
            if(!moved){ 
                can4.horz +=100;
                can9.horz -=100;
                moved = true;
            }
        }
        if(can5.horz + 100 === can9.horz && can5.vert === can9.vert){
            if(!moved){
                can5.horz +=100;
                can9.horz -=100;
                moved = true;
            }
        }
        if(can6.horz + 100 === can9.horz && can6.vert === can9.vert){
            if(!moved){
                can6.horz +=100;
                can9.horz -=100;
                moved = true;
            }
        }
        if(can7.horz + 100 === can9.horz && can7.vert === can9.vert){
            if(!moved){
                can7.horz +=100;
                can9.horz -=100;
                moved = true;
            }
        }
        if(can8.horz + 100 === can9.horz && can8.vert === can9.vert){
            if(!moved){
                can8.horz +=100;
                can9.horz -=100;
                moved = true;
            }
        }
        Check();
        display();
        return moved;
    }else{ 
        console.log('You alredfy finished game. Presss Shuffle') 
    }
}


// moving thing

function display(){
    c1.clearRect(0,0, innerWidth, innerHeight);

    c1.fillText(can1.numText, can1.horz, can1.vert);
    c2.fillText(can2.numText, can2.horz, can2.vert);
    c3.fillText(can3.numText, can3.horz, can3.vert);
    c4.fillText(can4.numText, can4.horz, can4.vert);
    c5.fillText(can5.numText, can5.horz, can5.vert);
    c6.fillText(can6.numText, can6.horz, can6.vert);
    c7.fillText(can7.numText, can7.horz, can7.vert);
    c8.fillText(can8.numText, can8.horz, can8.vert);
    c9.fillText(can9.numText, can9.horz, can9.vert);
}

function Check(){
    if(whatAreYouDoing === "solving"){
        if(!moved){
            console.log('That move is not allowerd')
        }else{
            moveCount +=1;
            if(moveCount === 1){
                startTimer();
            }
            moveBtn.textContent = `Moves: ${moveCount}`
            finished();
        }
    }
    
}

function finished(){
    correct = 0;
    if(can1.horz === 500 && can1.vert === 100){
        correct +=1;
    }
    if(can2.horz === 600 && can2.vert === 100){
        correct +=1;
    }  
    if(can3.horz === 700 && can3.vert === 100){
        correct +=1;
    }  
    if(can4.horz === 500 && can4.vert === 200){
        correct +=1;
    }  
    if(can5.horz === 600 && can5.vert === 200){
        correct +=1;
    }  
    if(can6.horz === 700 && can6.vert === 200){
        correct +=1;
    }  
    if(can7.horz === 500 && can7.vert === 300){
        correct +=1;
    }  
    if(can8.horz === 600 && can8.vert === 300){
        correct +=1;
    }  
    if(correct === 8){
        pauseTimer(); 

        moveBtn.textContent = `Finished! total move: ${moveCount}`
        moveCount = 0;
        whatAreYouDoing = "done";
    }
    // else{
    //     console.log('Not done yet')
    // }
}



































var startTimerButton = document.querySelector('.startTimer');
var pauseTimerButton = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
let shortenDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;

const timeDis =document.getElementById('timeDis');

function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
// change 1 to 1000 above to run script every second instead of every millisecond. one other change will be needed in the getShowTime() function below for this to work. see comment there.   
 
    paused = 0;
    running = 1;
// timerDisplay.style.background = "#FF0000";
//     timerDisplay.style.cursor = "auto";
//     timerDisplay.style.color = "yellow";
//     startTimerButton.classList.add('lighter');
//     pauseTimerButton.classList.remove('lighter');
//     startTimerButton.style.cursor = "auto";
//     pauseTimerButton.style.cursor = "pointer";
  }
}
function pauseTimer(){
  if (!difference){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    // timerDisplay.style.background = "#A90000";
    // timerDisplay.style.color = "#690000";
    // timerDisplay.style.cursor = "pointer";
    // startTimerButton.classList.remove('lighter');
    // pauseTimerButton.classList.add('lighter');
    // startTimerButton.style.cursor = "pointer";
    // pauseTimerButton.style.cursor = "auto";
  } else {
// if the timer was already paused, when they click pause again, start the timer again
startTimer();
  }
}
function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
//   timerDisplay.innerHTML = 'Start Timer!';
//   timerDisplay.style.background = "#A90000";
//   timerDisplay.style.color = "#fff";
//   timerDisplay.style.cursor = "pointer";
//   startTimerButton.classList.remove('lighter');
//   pauseTimerButton.classList.remove('lighter');
//   startTimerButton.style.cursor = "pointer";
//   pauseTimerButton.style.cursor = "auto";
}
function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);
hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
//   timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
  legitSeconds = milliseconds/10
  intLegitSeconds = Math.floor(legitSeconds)

  if(legitSeconds === intLegitSeconds){
    shortenDisplay.innerHTML = minutes + ':' + intLegitSeconds +'0' ;
  }else{
    shortenDisplay.innerHTML = minutes + ':' + legitSeconds;
  }
  timeDis.textContent = `Timer: ${shortenDisplay.innerHTML}`
}