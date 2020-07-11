var milliSeconds = 0;
var seconds = 0;
var minutes = 0;
var Lap = 0;
var ticking;
var lapRecords = [];
var nextButtonTrig = 0;
var privButtonTrig = 0;
var recordCurrentLocation = 0;

function startTicking(){
    milliSeconds = milliSeconds + 1;
    document.getElementById("sw_MilliSeconds").innerHTML = milliSeconds;
    if(milliSeconds >=100){
        milliSeconds = 0;
        seconds = seconds + 1;
        document.getElementById("sw_Seconds").innerHTML = seconds;
        document.getElementById("sw_Minutes").innerHTML = minutes;
        if(seconds>=59){
            seconds = 0;
            minutes = minutes + 1;}
    }
}

function sw_Start(){
    document.getElementById("newLapButtonStatus").disabled = false; 
    document.getElementById("startButtonStatus").disabled = true; 
    ticking = setInterval(startTicking,10);
}

function sw_NewLap(){
    Lap = Lap + 1;
    lapRecords.push("Lap :"+Lap+" Min :"+minutes+" Sec :"+seconds+" Ms :"+milliSeconds);
    document.getElementById("lapDisplay").innerHTML = lapRecords[Lap-1];
    nextButtonTrig = 0;
    privButtonTrig = 0;
    recordCurrentLocation = Lap;
    console.log("record Current Loction  = "+recordCurrentLocation);
    // document.write("<br> Lap:"+Lap+" Minutes: "+minutes+" Seconds: "+seconds+"MilliSeconds: "+milliSeconds);
}

function sw_Pause(){
     clearInterval(ticking);
     document.getElementById("startButtonStatus").disabled = false;
     document.getElementById("newLapButtonStatus").disabled = true;  

}

function sw_Reset(){
    sw_Pause();
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("sw_MilliSeconds").innerHTML = milliSeconds;
    document.getElementById("sw_Seconds").innerHTML = seconds;
    document.getElementById("sw_Minutes").innerHTML = minutes;
    document.getElementById("startButtonStatus").disabled = false; 
    document.getElementById("lapDisplay").innerHTML = "Lap Recod";
    document.getElementById("newLapButtonStatus").disabled = true; 
    location.reload();
}

function nextRecord(){
    if(recordCurrentLocation < lapRecords.length)
    { 
        recordCurrentLocation = recordCurrentLocation + 1;
        document.getElementById("lapDisplay").innerHTML = lapRecords[recordCurrentLocation-1];
        console.log("record Current Loction  = "+recordCurrentLocation);
    }
}

function privRecord(){
    
    if(recordCurrentLocation > 1)
    {recordCurrentLocation = recordCurrentLocation - 1;
        document.getElementById("lapDisplay").innerHTML = lapRecords[recordCurrentLocation-1];
        // console.log("record Current Loction  = "+recordCurrentLocation);
        // console.log("lap record["+recordCurrentLocation+"] = "+lapRecords[recordCurrentLocation-1]);
    }
}