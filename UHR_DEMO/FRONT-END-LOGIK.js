let [hours, minutes, seconds, milliseconds]=[0,0,0,0];
let timeoutId;

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
	document.getElementById('div-hours-value').innerHTML=h+":";
	document.getElementById('div-minutes-value').innerHTML=m+":";
	document.getElementById('div-seconds-value').innerHTML=s+":";
	document.getElementById('div-milliseconds-value').innerHTML=ms;
	timeoutId=setTimeout(StartTimer, 10);
	document.getElementById("start-button").disabled=true;
}
function StopTimer(){
	clearTimeout(timeoutId);
	document.getElementById("start-button").disabled=false;
}
function ClearTimer(){
	clearTimeout(timeoutId);
	hours=0, minutes=0, seconds=0, milliseconds=0;
	document.getElementById('div-hours-value').innerHTML="00:";
	document.getElementById('div-minutes-value').innerHTML="00:";
	document.getElementById('div-seconds-value').innerHTML="00:";
	document.getElementById('div-milliseconds-value').innerHTML="00";
	document.getElementById("start-button").disabled=false;
}
function AddRound(){
	var itemsCount=document.getElementById("div-item").querySelectorAll("div").length;
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
		document.getElementById("div-item").appendChild(newDiv);	
}
function DeleteRounds(){
	var roundsDiv=document.getElementById("div-item");
	while(roundsDiv.firstChild){
		roundsDiv.removeChild(roundsDiv.firstChild);
	}
}
function DeleteFirstRound(){
	var roundsDiv=document.getElementById("div-item");
	roundsDiv.removeChild(roundsDiv.firstChild);
}