var chart = document.getElementById("chart").getContext("2d");

var canvasWidth = chart.canvas.width;
var canvasHight = chart.canvas.height;

for(var i = 1 ; i <= 10; i++){
	var second = document.createElement('span');
	var text = document.createTextNode(`${i * 10}s`)
	second.appendChild(text);
	document.getElementById('seconds').appendChild(second);
}

for(var i = 10; i >= 1; i--){
	var value = document.createElement('span');
	var text_percentage = document.createTextNode(`${i}`)
	value.appendChild(text_percentage);
	document.getElementById('percentage').appendChild(value);
}

function drawPercentage(message)
{
    var totalNUmberOfHorizontalDivisions = 11;
    chart.clearRect(0, 0, chart.canvas.width, chart.canvas.height);

    chart.beginPath();

    //actual graph
    for(var i = 0; i < message.length; i++){
        console.log("Hi: ", message);
        chart.strokeStyle = '#1dd2af';
        chart.lineWidth = 2;
        chart.lineTo(i * canvasWidth / (totalNUmberOfHorizontalDivisions - 1), canvasHight - (canvasHight * Math.abs(parseFloat(message[i])) / 100));
    }

    chart.stroke();

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
	
	for(var i = 0; i <= 10; i++){
		chart.strokeStyle = 'rgba(29, 210, 175,0.3)';
		chart.lineWidth = 1;
		chart.moveTo(0, i * canvasHight / 10);
		chart.lineTo(canvasWidth, i * canvasHight / 10);
    }

     chart.stroke();
}

  
gridV();
gridH();
