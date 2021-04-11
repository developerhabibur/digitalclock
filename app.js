let hour = document.getElementById('hour')
let min = document.getElementById('minute')
let sec = document.getElementById('second')
let progess = document.getElementById('progress')
let clock = document.getElementById('clock-container')


function runTime(){
    let date = new Date()
    let mini = date.getMinutes()
    let secs = date.getSeconds()
    let num =  mini < 10 ?  '0'+mini : ''+mini
    let secnum =  secs < 10 ?  '0'+secs : ''+secs
    
    
    hour.innerHTML = date.getHours()
    min.innerHTML = num 
    sec.innerHTML = secnum 
 
    progress.style.width = secs/60*100 +'%'

    if(secs%2 == 0){
        clock.style.background ='red'
    }else{
        clock.style.background ='green'
    }
}


setInterval(runTime, 1000)