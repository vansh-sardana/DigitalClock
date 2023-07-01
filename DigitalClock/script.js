setInterval(() => {
    let time= new Date();
    let hour= document.getElementById("hour");
    let min= document.getElementById("min");
    let sec= document.getElementById("sec");
    let date=document.getElementById("date");
    let month=document.getElementById("month");
    let year=document.getElementById("year");
    let cHour=time.getHours();
    let cMin=time.getMinutes();
    let cSec=time.getSeconds();
    let cDay=time.getDay();
    let cDate=time.getDate();
    let cYear=time.getFullYear();
    let cMonth=time.getMonth();
    let day1=document.getElementById("day1");
    let day2=document.getElementById("day2");
    let day3=document.getElementById("day3");
    let day4=document.getElementById("day4");
    let day5=document.getElementById("day5");
    let day6=document.getElementById("day6");
    let day7=document.getElementById("day7");
    if (cHour<10){
        cHour='0'+cHour;
    }
    hour.innerHTML=cHour;
    
    if (cMin<10){
        cMin='0'+cMin;

    }
    min.innerHTML=cMin;

    if (cSec<10){
        cSec='0'+cSec;
    }
    sec.innerHTML=cSec;

    if (cDay==1){
        day1.style.color='white';
    }
    else if (cDay==2){
        day2.style.color='white';
    }
    else if (cDay==3){
        day3.style.color='white';
    }
    else if (cDay==4){
        day4.style.color='white';
    }
    else if (cDay==5){
        day5.style.color='white';
    }
    else if (cDay==6){
        day6.style.color='white';
    }
    else if (cDay==0){
        day7.style.color='white';
    }
    else{
        
    }


    if (cDate<10){
        cDate='0'+cDate;
    }
    date.innerHTML=cDate;
    
    if (cMonth==0){
        cMonth="January";
    }
    else if (cMonth==1){
        cMonth="February";
    }
    else if (cMonth==2){
        cMonth="March";
    }
    else if (cMonth==3){
        cMonth="April";
    }
    else if (cMonth==4){
        cMonth="May";
    }
    else if (cMonth==5){
        cMonth="June";
    }
    else if (cMonth==6){
        cMonth="July";
    }
    else if (cMonth==7){
        cMonth="August";
    }
    else if (cMonth==8){
        cMonth="September";
    }
    else if (cMonth==9){
        cMonth="October";
    }
    else if (cMonth==10){
        cMonth="Novermber";
    }
    else if (cMonth==11){
        cMonth="December";
    } 
    month.innerHTML=cMonth;
    year.innerHTML=cYear;



}, 1000);
