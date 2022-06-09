var chart = document.getElementById("chart").getContext("2d");

chart.canvas.width = "300";
chart.canvas.height = "150";

var cw = chart.canvas.width;
var ch = chart.canvas.height;

var w = [0,cw/5,2*(cw/5),3*(cw/5),4*(cw/5),5*(cw/5)];

var h = [ch,ch-ch/5,ch-2*(ch/5),ch-3*(ch/5),ch-4*(ch/5),ch-5*(ch/5)];

var seconds = ['second1','second2','second3','second4', 'second5','second6','second7','second8','second9','second10'];
var percentage = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var val = [];


for(var i = 0;i<seconds.length;i++){
	var second = document.createElement('span');
	var text = document.createTextNode(seconds[i])
	second.appendChild(text);
	document.getElementById('seconds').appendChild(second);
}

for(var i = percentage.length-1;i>=0;i--){
	var value = document.createElement('span');
	var text_percentage = document.createTextNode(percentage[i])
	value.appendChild(text_percentage);
	document.getElementById('percentage').appendChild(value);
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
