dayEl=document.getElementById('days');
hourEl=document.getElementById('hours');
minuteEl=document.getElementById('minutes');
secoundEl=document.getElementById('secound');


var newY=('Jan 16, 2024 ');
// console.log(currentdate.getTime());


let countdwon=function(){
    

    var newdate=new Date(newY);
    currentdate=new Date();

    const totalsecounds=(newdate-currentdate)/1000;

    let days=Math.floor(totalsecounds / 3600 /24);
    let hrs = Math.floor(totalsecounds/3600 ) % 24;
    let minutes = Math.floor(totalsecounds / 60) %60;
    let scs = Math.floor(totalsecounds)%60;




    dayEl.innerHTML=formatTime(days);
    hourEl.innerHTML=formatTime(hrs);
    minuteEl.innerHTML=formatTime(minutes);
    secoundEl.innerHTML=formatTime(scs);

    function formatTime(time){
        return time<10?(`0${time}`) : time
    }
    
}

//-initial call

countdwon();
setInterval(countdwon,1000);

