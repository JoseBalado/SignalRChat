var chart = document.getElementById("chart").getContext("2d");

var canvasWidth = chart.canvas.width;
var canvasHight = chart.canvas.height;

canvasWidth = 400;
canvasHight = 200;

var cw = chart.canvas.width;
var ch = chart.canvas.height;

var w = [0,  1 * (cw / 10), 2 *(cw / 10), 3 * (cw / 10), 4 * (cw / 10), 5 * (cw / 10),
         6 * (cw / 10), 7 * (cw / 10), 8 * (cw / 10), 9 * (cw / 10), 10 * (cw / 10)];

var h = [ch,ch - 1 * (ch/5),ch-2*(ch/5),ch-3*(ch/5),ch-4*(ch/5),ch-5*(ch/5),ch-6*(ch/5),ch-7*(ch/5),ch-8*(ch/5),ch-9*(ch/5)];

var seconds = ['10s','20s','30s','40s', '50s','60s','70s','80s','90s','100s'];
var percentage = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


for(var i = 0 ;i<seconds.length; i++){
	var second = document.createElement('span');
	var text = document.createTextNode(seconds[i])
	second.appendChild(text);
	document.getElementById('seconds').appendChild(second);
}

for(var i = percentage.length - 1; i>=0; i--){
	var value = document.createElement('span');
	var text_percentage = document.createTextNode(percentage[i])
	value.appendChild(text_percentage);
	document.getElementById('percentage').appendChild(value);
}

function drawPercentage(message)
{
    chart.clearRect(0, 0, chart.canvas.width, chart.canvas.height);

    chart.beginPath();

    //actual graph
    for(var i = 0; i < message.length; i++){
        console.log("Hi: ", message);
        chart.strokeStyle = '#1dd2af';
        chart.lineWidth = 2;
        chart.lineTo(i * canvasWidth / message.length, Math.abs(parseFloat(message[i]) - 100));
        chart.stroke();
    }

    gridV();
    gridH();

}

// vertical lines
function gridV(){
	
	for(var i = 0; i <= 10; i++){
		chart.strokeStyle = 'rgba(29, 210, 175,0.3)';
		chart.lineWidth = 1;
		chart.moveTo(i * canvasWidth / 10, 0);
		chart.lineTo(i * canvasWidth / 10, canvasHight);
	  }

	  chart.stroke();
}

//horizontal lines
function gridH(){
	
	for(var i =1; i<h.length-1; i++){
		chart.strokeStyle = 'rgba(29, 210, 175,0.3)';
		chart.lineWidth = 1;
		chart.moveTo(0,h[i]);
		chart.lineTo(canvasWidth, h[i]);
	  }
	      chart.stroke();
}

  
gridV();
gridH();


var beforex = document.querySelector('#seconds>span:before');

for(var i = 1;i<w.length;i++){
	beforex.style.marginLeft = w[i];
}