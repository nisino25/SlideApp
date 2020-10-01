var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.55;


let c1 = canvas.getContext('2d');
let c2 = canvas.getContext('2d');
let c3 = canvas.getContext('2d');
let c4 = canvas.getContext('2d');
let c5 = canvas.getContext('2d');
let c6 = canvas.getContext('2d');
let c7 = canvas.getContext('2d');
let c8 = canvas.getContext('2d');
let c9 = canvas.getContext('2d');
 



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



// Key function

keyL = document.getElementById('keyL').addEventListener('click', keyLeft);
keyU = document.getElementById('keyU').addEventListener('click', keyUp);
keyD = document.getElementById('keyD').addEventListener('click', keyDown);
keyR = document.getElementById('keyR').addEventListener('click', keyRight);
keyZ = document.getElementById('shuffle').addEventListener('click', shuffle);


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
    shuffleCount = 0;
    missCount = 0
    currentMove = 10;
    totalCount = 0;

    while(shuffleCount < 100){
        function getRandomInt() {
            randomNum =  Math.floor(Math.random() * Math.floor(4));
            console.log(randomNum)
            return randomNum;
        }
        getRandomInt();
        if(currentMove !== randomNum){
            if(randomNum === 0){
                keyLeft();
                if(moved){
                    shuffleCount +=1;
                    currentMove = 0;
                }else{
                    missCount +=1;
                }
            }else if (randomNum === 1 ){
                keyUp();
                    if(moved){
                        shuffleCount +=1;
                        currentMove = 1;
                    }else{
                        missCount +=1;
                    }
            }else if (randomNum === 2){
                keyDown();
                    if(moved){
                        shuffleCount +=1;
                        currentMove = 2;
                    }else{
                        missCount +=1;
                    }
            }else if (randomNum === 3){
                keyRight();
                    if(moved){
                        shuffleCount +=1;
                        currentMove = 3;
                    }else{
                        missCount +=1;
                    }
                    
            }
            totalCount +=1;
            
        }
        
        
    }
    console.log(`Miss count = ${missCount} and ${totalCount}`)
}

// Make a count and if it hits 100 and then stop it

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


function keyLeft(){
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
    

}

function keyUp(){
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
    
}

function keyDown(){
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
    
}

function keyRight(){
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
    // if(!moved){
    //     console.log('That move is not allowerd')
    // }else{
    //     finished();
    // }
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
        btns = document.getElementById('dirBtns')
        btns.style.display = 'none'
        console.log('DONE')
    }
    // else{
    //     console.log('Not done yet')
    // }
}