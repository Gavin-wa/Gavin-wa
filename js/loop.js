var table = 2; // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1; // Set counter to 1
var msg = ''; // Message
var rng = Math.floor((Math.random() * 10) + 1);

if (rng % 2 === 0) {
	var operator = 'notaddition';
} else {
	var operator = 'addition';
}


if (operator === 'addition') {
	// Do addition
	while (i < 11) {
		msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
		i++;
		table++;
	}
} else {
	// Do multiplication
	while (i < 11) {
		msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
		i++;
		table++;
	}
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;