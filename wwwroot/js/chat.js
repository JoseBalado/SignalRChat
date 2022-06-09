"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function (user, message) {
    document.getElementById("percentageUsage").innerHTML = "CPU Percentage Usage: " + message;
});

connection.on("SendQueue", function (user, message) {
    drawPercentage(message);
});

connection.start().then(function () {
    console.log("Connection started.");
}).catch(function (err) {
    return console.error(err.toString());
});
