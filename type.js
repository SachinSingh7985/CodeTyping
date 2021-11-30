const ln = [ 'Twinkle, twinkle, little star',
'How I wonder what you are',
'Up above the world so high',
'Like a diamond in the sky',
'Twinkle, twinkle, little star',
'How I wonder what you are',
'Twinkle, twinkle, little star',
'How I wonder what you are',
'Up above the world so high',
'Like a diamond in the sky',
'Twinkle, twinkle, little star',
'How I wonder what you are',
'Twinkle, twinkle, little star',
'How I wonder what you are',
'Up above the world so high',
'Like a diamond in the sky',
'Twinkle, twinkle, little star',
'How I wonder what you are',
'Twinkle, twinkle, little star',
'How I wonder what you are',
'Up above the world so high',
'Like a diamond in the sky',
'Twinkle, twinkle, little star',
'How I wonder what you are',
];

const lan = new Array();
for(var i=0;i<9;i++){
    lan.push(ln);
}



const content = document.querySelector('.reset_btn');
const span1 = document.querySelector('#speed');
const span2 = document.querySelector('#accuracy');
const span3 = document.querySelector('#errors');
const span4 = document.querySelector('#time');

var lang = [] ;
lang[0] = document.querySelector('#lang1');
lang[1] = document.querySelector('#lang2');
lang[2] = document.querySelector('#lang3');
lang[3] = document.querySelector('#lang4');
lang[4] = document.querySelector('#lang5');
lang[5] = document.querySelector('#lang6');
lang[6] = document.querySelector('#lang7');
lang[7] = document.querySelector('#lang8');

const main_content = document.querySelector('.main_content');
const main = document.querySelector('.main');

const out = document.querySelector('.out');
const inp = document.querySelector('.inp');

const start_btn = document.querySelector('.start_btn');
const reset_btn = document.querySelector('.reset_btn');
const stop_btn = document.querySelector('.stop_btn');


var timer = 0 , speed = 0 , accuracy = 0 , error = 0 , total = 0 , correct = 0 ;
var counter = 0 , current_lan = 0;
var startTime = 0;
var endTime = 0;
var boolean = false;
out.innerText = lan[current_lan][counter]+"\r\n";
out.innerText += lan[current_lan][counter+1]+"\r\n";
counter = 1;
lang[0].style.backgroundColor = "orange";



function change_info(){
    span1.innerHTML = Math.trunc(speed);
    span2.innerHTML = Math.trunc(accuracy);
    span3.innerHTML = Math.trunc(error);
}   

function reset(){
    timer = 0;
    speed = 0;
    accuracy = 0;
    error = 0;
    total = 0;
}

function display(){
     out.innerText = lan[current_lan][counter]+"\r\n";
     out.innerText += lan[current_lan][counter+1]+"\r\n";
     counter++;
}

function change_content(val){
   reset();
   counter = 0;
   var x= current_lan;
   lang[x].style.backgroundColor = "white";
   current_lan = val;
   var x= current_lan;
   lang[x].style.backgroundColor = "orange";
   display(val);  
}



lang[0].addEventListener('click',() => {
    if(boolean == false)
    change_content(0);
})

lang[1].addEventListener('click',() => {
    if(boolean == false)
    change_content(1);
})

lang[2].addEventListener('click',() => {
    if(boolean == false)
    change_content(2);
})

lang[3].addEventListener('click',() => {
    if(boolean == false)
    change_content(3);
})

lang[4].addEventListener('click',() => {
    if(boolean == false)
    change_content(4);
})

lang[5].addEventListener('click',() => {
    if(boolean == false)
    change_content(5);
})

lang[6].addEventListener('click',() => {
    if(boolean == false)
    change_content(6);
})

lang[7].addEventListener('click',() => {
    if(boolean == false)
    change_content(7);
})




function do_math(cur,str){
    let i = cur.length, j = str.length;
    console.log(cur);
    console.log(str);
    total += i;
    for(let k = 0 ; k < Math.min(i,j); k++){
        if(cur[k] == str[k]){
            ++correct;
        }
    }
    endTime = performance.now();
    time = (endTime - startTime)/1000;
    error = (total - correct);
    accuracy = (correct/total)*100;
    speed = (correct*12)/(time);
    change_info();
}

function helper() {
    console.log(inp.innerText);
    const str = inp.value;
    const cur = lan[current_lan][counter-1];
    display();
    do_math(cur,str);
    inp.value = "";
}

main.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        helper();
    }
});


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    let timer_Id = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        // console.log(timer);

        if (--timer < 0) {
            boolean = false;
            display.textContent = "01:00";
            helper();
            inp.innerText = "";
            setTimeout(() => { clearInterval(timer_Id); console.log('stop'); }, 0);               
        }
    }, 1000); 
}


start_btn.addEventListener('click',() => {
    if(boolean == false){
            boolean = true;
            reset();
        startTime = performance.now();
        var OneMinutes = 60 ,
        display = document.querySelector('#time');
        startTimer(OneMinutes, display);
    }
    
})










