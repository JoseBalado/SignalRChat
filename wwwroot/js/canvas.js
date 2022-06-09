var chart = document.getElementById("chart").getContext("2d");

chart.canvas.width = "300";
chart.canvas.height = "150";

var cw = chart.canvas.width;
var ch = chart.canvas.height;

var w = [0,cw/5,2*(cw/5),3*(cw/5),4*(cw/5),5*(cw/5)];

var h = [ch,ch-ch/5,ch-2*(ch/5),ch-3*(ch/5),ch-4*(ch/5),ch-5*(ch/5)];

var weeks = ['week1','week2','week3','week4'];
var values = [100,200,300,400,500];
var val = [];


for(var i = 0;i<weeks.length;i++){
	var week = document.createElement('span');
	var text = document.createTextNode(weeks[i])
	week.appendChild(text);
	document.getElementById('weeks').appendChild(week);
}

for(var i = values.length-1;i>=0;i--){
	var value = document.createElement('span');
	var text_value = document.createTextNode(values[i])
	value.appendChild(text_value);
	document.getElementById('values').appendChild(value);
}

var ch = document.getElementById("chart");

chart.beginPath();
      
//actual graph      
for(var i =0;i<w.length;i++){

	chart.moveTo(0, ch);
	chart.strokeStyle = '#1dd2af';
	chart.lineWidth = 2;
	chart.lineTo(w[i], h[Math.floor((Math.random() * 4) + 1)]);
	chart.stroke();
}

// vertical lines
function gridV(){
	
	for(var i =1;i<w.length-1;i++){
		chart.strokeStyle = 'rgba(29, 210, 175,0.3)';
		chart.lineWidth = 1;
		chart.moveTo(w[i], 0);
		chart.lineTo(w[i], 150);
	  }
	      chart.stroke();
  	  }

//horizontal lines
function gridH(){
	
	for(var i =1;i<h.length-1;i++){
		chart.strokeStyle = 'rgba(29, 210, 175,0.3)';
		chart.lineWidth = 1;
		chart.moveTo(0,h[i]);
		chart.lineTo(3000,h[i]);
	  }
	      chart.stroke();
  	  }

  
gridV();
gridH();


var beforex = document.querySelector('#weeks>span:before');

for(var i = 1;i<w.length;i++){
	beforex.style.marginLeft = w[i];
}
