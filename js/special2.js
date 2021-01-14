(function() {


	// Menu Object
	var menu = {
		name: 'Ham and Cheese menu',
		menuRate: 5, // Amount in dollars
		discount: 25, // Percentage discount
		offerPrice: function() {
			var offerRate = this.menuRate * ((100 - this.discount) / 100);
			return offerRate;
		}
	};

	// Write out for menu item, starting price, and discount price
	var menuName, menuRate, specialRate;
	menuName = document.getElementById('menuName');
	menuRate = document.getElementById('menuRate');
	specialRate = document.getElementById('specialRate');

	menu.textContent = menu.name; // Write menu name
	menuRate.textContent = '$' + menu.menuRate.toFixed(2); // Write menu rate
	specialRate.textContent = '$' + menu.offerPrice(); // Write offer price


	// Menu item and expiry object
	var expiryMsg; // Message displayed to users
	var today; // Today's date
	var elEnds; // The element that shows the message about the offer ending

	function offerExpires(today) {
		// Declare variables within the function for local scope
		var weekFromToday, day, date, month, year, dayNames, monthNames;

		// Add 7 days time (added in milliseconds)
		weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

		// Create arrays to hold the names of days / months
		dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		// Collect the parts of the date to show on the page
		day = dayNames[weekFromToday.getDay()];
		date = weekFromToday.getDate();
		month = monthNames[weekFromToday.getMonth()];
		year = weekFromToday.getFullYear();

		// Create the message
		expiryMsg = 'Limited time offer expires next ';
		expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
		return expiryMsg;
	}

	today = new Date(); // Put today's date in variable
	elEnds = document.getElementById('offerEnds'); // Get the offerEnds element
	elEnds.innerHTML = offerExpires(today); // Add the expiry message

	// Finish the immediately invoked function expression
}());