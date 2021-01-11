// welcome vars//
var message = 'Welcome to Super Sandwich Deli, we are currently ';
var time;
var today = new Date();
var hourNow = today.getHours();
if (hourNow > 15) {
    time = 'CLOSED.';
 } 
	else if (hourNow > 0) {
        time = 'OPEN.';
    } 
var welcome = message + time;
document.write(welcome);