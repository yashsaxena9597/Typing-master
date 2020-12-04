var totalSeconds = 0;
var timerVar;
var str1=document.getElementById("test-text").innerHTML;
var str2="";
var c;
function Agree()
{	
	document.getElementById("approval").style.display="none";
	document.getElementById("text-area").style.display="block";
	// countTimer();
	
	
}
function starttime()
{		
	var a=str2.length;
	if(a==0)
	{
	countTimer();
	timerVar = setInterval(countTimer, 1000);
	}
 

}


function countTimer() {

           ++totalSeconds;
           var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var seconds = totalSeconds - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
        }
        function comp(){

        	str2=document.getElementById("area").value;


        	 c= str1.localeCompare(str2);
        	 if(c==0)
        	 {
        	 	clearInterval(timerVar);
        	 	document.getElementById("area").style.borderColor = "green";
        	 	document.getElementById("area").disabled="true";

        	 }
        	 else{
        	 	document.getElementById("area").style.borderColor = "red";

        	 }

        }