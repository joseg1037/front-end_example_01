const _=window._;
let [hours, minutes, seconds, milliseconds]=[0,0,0,0];
let timeoutId, timer;
let divHoursValue,
divMinutesValue,
divSecondsValue, 
divMillisecondsValue, 
startButton, 
divItem,
divItemRounds;


window.onload=function(){
	divHoursValue=document.getElementById('div-hours-value');
	divMinutesValue=document.getElementById('div-minutes-value');
	divSecondsValue=document.getElementById('div-seconds-value'); 
	divMillisecondsValue=document.getElementById('div-milliseconds-value');
	startButton=document.getElementById("start-button");
	divItem=document.getElementById("div-item");	
	divItemRounds=document.getElementById("div-round-items");
	startButton.addEventListener("click", function(){
		GetMilliseconds();
		StartTimer();
	});
}
const debouncedStartTimer=_.debounce(StartTimer, 1000);	
const debouncedMilliseconds=_.debounce(GetMilliseconds, 1);	
function StartTimer(){		
	seconds++;
	if(seconds===60){
		seconds=0;
		minutes++;
		if(minutes===60){
			minutes=0;
			hours++;				
		}
	}	
	let h = hours;
	let m = minutes;
	let s = seconds;
	if(hours<10)
		h="0"+h;
	if(minutes<10)
		m="0"+m;
	if(seconds<10)
		s="0"+s;	
	divHoursValue.innerHTML=h+":";
	divMinutesValue.innerHTML=m+":";
	divSecondsValue.innerHTML=s+":";
	debouncedStartTimer(StartTimer, 1000);
	startButton.disabled=true;
}

function GetMilliseconds(){
	milliseconds++;	
	if(milliseconds===100)
		milliseconds=0;		
	let ms=milliseconds;
	if(milliseconds<10)
		ms="0"+ms;
	divMillisecondsValue.innerHTML=ms;
	debouncedMilliseconds(GetMilliseconds, 1);
}
function StopTimer(){
	debouncedMilliseconds.cancel();
	debouncedStartTimer.cancel();
	startButton.disabled=false;	
}
function ClearTimer(){
	debouncedMilliseconds.cancel();
	debouncedStartTimer.cancel();	
	hours=0, minutes=0, seconds=0, milliseconds=0;
	divHoursValue.innerHTML="00:";
	divMinutesValue.innerHTML="00:";
	divSecondsValue.innerHTML="00:";
	divMillisecondsValue.innerHTML="00";	
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
