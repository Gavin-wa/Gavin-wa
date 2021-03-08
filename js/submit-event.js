(function(){ 
  var form = document.getElementById('login');       // Get form element

  addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements
    var username = elements.username.value;          // Select username entered
    var pwd = elements.pwd.value;
	var msg;
	if (username == 'admin' && pwd == 'password') {
    var msg      = 'Welcome ' + username; }           // Create welcome message
	
	else {
	var msg = 'Invalid Credentials';
	}
    document.getElementById('main').textContent = msg; // Write welcome message
  });
}());