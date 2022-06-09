var chart = document.getElementById("chart").getContext("2d");

chart.canvas.width = "500";
chart.canvas.height = "200";

var cw = chart.canvas.width;
var ch = chart.canvas.height;

var w = [0,cw/5,2*(cw/5),3*(cw/5),4*(cw/5),5*(cw/5)];

var h = [ch,ch-ch/5,ch-2*(ch/5),ch-3*(ch/5),ch-4*(ch/5),ch-5*(ch/5)];

var seconds = ['1s','2s','3s','4s', '5s','6s','7s','8s','9s','10s'];
var percentage = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
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

function drawPercentage(message)
{
    var ch = document.getElementById("chart");

    chart.clearRect(0, 0, chart.canvas.width, chart.canvas.height);

    chart.beginPath();

    //actual graph
    for(var i = 0; i < w.length; i++){
        console.log("Hi: ", message);
        chart.strokeStyle = '#1dd2af';
        chart.lineWidth = 2;
        chart.lineTo(w[i], Math.abs(parseFloat(message[i]) - 100));
        chart.stroke();
    }

    gridV();
    gridH();

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


var beforex = document.querySelector('#seconds>span:before');

for(var i = 1;i<w.length;i++){
	beforex.style.marginLeft = w[i];
}