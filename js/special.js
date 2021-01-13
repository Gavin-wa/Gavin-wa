(function() {
	//special function
	var	 menu = {
		name: 'Ham and Cheese Sub',
		oCost: 5.99, // starting price $5.99
		discount: 25, // % discount
		offerPrice: function() {
			var offerRate = this.oCost * ((100 - this.discount) / 100);
			return offerRate;
		}
	};
	
	// Write out for menu item, starting price, and discount price
	var menuName, oCost, dCost;
	
	menuName = document.getElementById('MenuName');
	oCost = document.getElementById('oCost');
	dCost = document.getElementById('dCost');
	
	menuName.textContent = menu.name; //item name
	oCost.textContent = '$' + menu.oCost.toFixed(2); //old offer
	dCost.textContent = '$' + menu.offerPrice(); //new offer
	
	//expiry details
	
	var expiryMsg; //msg when deal ends
	var today; //todays date
	var elEnds; 
	
	function offerExpires(today) {
		var weekFromToday, day, date, month, year, dayNames, monthNames;
		// 7 days from today in milliseconds
		weekFromToday = new Date(today.getTime()+ 7 * 24 * 60 * 60 * 1000);
		//array to hold week names and months
		dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		// Date info shown on page
		day = dayNames[weekFromToday.getDay()];
		date = weekFromToday.getDate();
		month = monthNames[weekFromToday.getMonth()];
		year = weekFromToday.getFullYear();
		//Message displayed
		
	expiryMsg = 'This limited time deal expires next ';
	expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
	return expiryMsg;
	}
	
	today = new Date();
	elEnds = document.getElementById('offerEnds');
	elEnds.innerHTML = offerExpires(today);
	
}());