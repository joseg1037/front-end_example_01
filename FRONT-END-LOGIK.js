let [hours, minutes, seconds, milliseconds]=[0,0,0,0];
let timeoutId;
let divHoursValue,
divMinutesValue,
divSecondsValue, 
divMilisecondsValue, 
startButton, 
divItem,
divItemRounds;

window.onload=function(){
	divHoursValue=document.getElementById('div-hours-value');
	divMinutesValue=document.getElementById('div-minutes-value');
	divSecondsValue=document.getElementById('div-seconds-value'); 
	divMilisecondsValue=document.getElementById('div-milliseconds-value');
	startButton=document.getElementById("start-button");
	divItem=document.getElementById("div-item");	
	divItemRounds=document.getElementById("div-round-items");
}

function StartTimer(){	
	milliseconds+=1;
	if(milliseconds==100){
		seconds++;
		milliseconds=0;
		if(seconds==60){
			minutes++;
			seconds=0;
			if(minutes==60){
				hours++;				
				minutes=0;
			}
		}
	}
	let h = hours;
	let m = minutes;
	let s = seconds;
	let ms = milliseconds;
	if(hours<10)
		h="0"+h;
	if(minutes<10)
		m="0"+m;
	if(seconds<10)
		s="0"+s;
	if(milliseconds<10)
		ms="0"+ms;
	divHoursValue.innerHTML=h+":";
	divMinutesValue.innerHTML=m+":";
	divSecondsValue.innerHTML=s+":";
	divMilisecondsValue.innerHTML=ms;
	timeoutId=setTimeout(StartTimer, 10);
	startButton.disabled=true;
}
function StopTimer(){
	clearTimeout(timeoutId);
	startButton.disabled=false;
}
function ClearTimer(){
	clearTimeout(timeoutId);
	hours=0, minutes=0, seconds=0, milliseconds=0;
	divHoursValue.innerHTML="00:";
	divMinutesValue.innerHTML="00:";
	divSecondsValue.innerHTML="00:";
	divMilisecondsValue.innerHTML="00";
	startButton.disabled=false;
}
function AddRound(){
	var itemsCount=divItem.querySelectorAll("div").length;
	if(itemsCount>14)
		DeleteFirstRound();	
	var newDiv=document.createElement('div');
	var hoursString, minutesString, secondsString, millisecondsString;
	if(hours<10)
		hoursString=`0${hours}`;
	else
		hoursString=`${hours}`;
	if(minutes<10)
		minutesString=`0${minutes}`;
	else
		minutesString=`${minutes}`;
	if(seconds<10)
		secondsString=`0${seconds}`;
	else
		secondsString=`${seconds}`;
	if(milliseconds<10)
		millisecondsString=`0${milliseconds}`;
	else
		millisecondsString=`${milliseconds}`;
	newDiv.innerHTML=`${hoursString}:${minutesString}:${secondsString}:${millisecondsString}`;
	divItem.appendChild(newDiv);	
	divItemRounds.scrollTop=divItemRounds.scrollHeight;
}
function DeleteRounds(){
	while(divItem.firstChild){
		divItem.removeChild(divItem.firstChild);
	}
}
function DeleteFirstRound(){
	divItem.removeChild(divItem.firstChild);
}
