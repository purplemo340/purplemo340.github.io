//var longWorkMin=50;
var longBreakMin=10;
var shortWorkMin=25;
var shortBreakMin=5;
reps=0;
num=shortWorkMin;
studyBreak=shortBreakMin;

//const check= document.createElement("p");
//const node = document.createTextNode('-');

function countdown(count) {
    var sec=count%60;
    var min=Math.floor(count/60);
    
    if (sec<=10){
        sec = sec.toString().padStart(2, '0')
        let time = (min+":"+sec);
        document.querySelector(".time").innerHTML=time.toString();
    }
    else{
    let time = (min+":"+sec);
    document.querySelector(".time").innerHTML=time.toString();
    }
}
function start(){
        reps+=1;
        if (reps%8==0){
            timer(longBreakMin);
            document.querySelector(".header").innerHTML="Take a Break! You Really Deserve It";
            
        }
        else if(reps%2==1){
            timer(num);
            document.querySelector(".header").innerHTML="Studying in Progress"
            //list=document.querySelector("br")
            //list.before("-")
            
            //console.log(list)
            //list.appendChild(check);
        }
        else{
            timer(studyBreak);
            document.querySelector(".header").innerHTML="Take a Break! You Deserve It";
        }
        
        
}
//console.log(document.addEventListener())
    document.querySelector('.start').addEventListener('click', function(){
        start()
    })
    document.querySelector('.reset').addEventListener('click', function(){
        clearInterval(start_timer);
        document.querySelector(".time").innerHTML="00:00";
        reps=0;
        console.log();
        document.querySelector(".header").innerHTML="See You Next Time!";
    })

function timer(num){
    num=num*60;
    start_timer=setInterval(() => {
        countdown(num);
        console.log(num);
        num=num-1;
        if (num==-1){
            clearInterval(start_timer);
            start()
        }
    }, 1000);


}