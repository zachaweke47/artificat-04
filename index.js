var formIsReady = [false, false, false, false, false, false, false, false, false];

// SELECTING ALL TEXT ELEMENTS
//var firstName = document.forms.userDetails.firstname;

// SELECTING ALL ERROR DISPLAY ELEMENTS
// var name_error = document.getElementById('name_error');

// SETTING ALL EVENT LISTENERS
// username.addEventListener('blur', nameVerify, true);


function Validate() {
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	var emailVar = document.getElementById("email").value;
	var phoneVar = document.getElementById("phone").value;
	var usernameVar = document.getElementById("username").value;
	var passwordVar = document.getElementById("password").value;
	var addressVar = document.getElementById("address").value;
	var cityVar = document.getElementById("city").value;
	var countryVar = document.getElementById("countries").value;
	var zipcodeVar = document.getElementById("zipcode").value;
	
	var firstNameError;
	var lastNameError;
	var emailVarError;
	var phoneVarError;
	var usernameVarError;
	var passwordVarError;
	var addressVarError;
	var cityVarError;
	var zipcodeVarError;
	
	
	function rightLength (localWord, localLength) {
		if (localWord === "" || localWord === null)
			return "is required.</p>";
		else if (localLength !==null && localWord.length > localLength)
			return "can not be more than " + localLength + " characters.</p>";
		else
			return "";
	}
	
	
//----------FIRST NAME----------	
	firstNameError = rightLength (firstName, 20);
	
	if (firstNameError !== "") {
		firstname.style.background = "Salmon";
		document.getElementById('firstnameerror').innerHTML = "<p>First name " + firstNameError;
		formIsReady [0] = false;
	} else if (!/^[a-zA-Z]+$/.test(firstName)) {
		firstname.style.background = "Salmon";
		document.getElementById('firstnameerror').innerHTML = "<p>First name can only contain letters.</p>";
		formIsReady [0] = false;
	} else {
		formIsReady [0] = true;
		firstname.style.background = "inherit";
		document.getElementById('firstnameerror').innerHTML = "";
	}
	
	
//----------LAST NAME----------
	lastNameError = rightLength (lastName, 50);
	
	if (lastNameError !== "") {
		lastname.style.background = "Salmon";
		document.getElementById('lastnameerror').innerHTML = "<p>Last name " + lastNameError;
		formIsReady [1] = false;
	} else if (!/^[a-zA-Z\s-]+$/.test(lastName)) {
		lastname.style.background = "Salmon";
		document.getElementById('lastnameerror').innerHTML = "<p>Last name can only contain letters, dashes (-) or spaces.</p>";
		formIsReady [1] = false;
	} else {
		formIsReady [1] = true;
		lastname.style.background = "inherit";
		document.getElementById('lastnameerror').innerHTML = "";
	}
	
	
//----------EMAIL ADDRESS----------
	
/*
This is based on the rules from
https://social.technet.microsoft.com/Forums/exchange/en-US/69f393aa-d555-4f8f-bb16-c636a129fc25/what-are-valid-and-invalid-email-address-characters
where only the domain name is validated as following hostname rules.
*/
	emailVarError = rightLength (emailVar, null);
	
	var atLoc = emailVar.lastIndexOf("@");	
	var emailLen = emailVar.length;
	var domain = emailVar.substring(atLoc + 1,emailLen);
		
	if (emailVarError !== "") {
		email.style.background = "Salmon";
		document.getElementById('emailerror').innerHTML = "<p>Email address " + emailVarError;
		formIsReady [2] = false;
	} else if (atLoc <= 0 || !/^[\w.-]+$/.test(domain) || domain.lastIndexOf(".") <= 0) {
		email.style.background = "Salmon";
		document.getElementById('emailerror').innerHTML = "<p>Not a valid email address.</p>";
		formIsReady [2] = false;
	} else {
		formIsReady [2] = true;
		email.style.background = "inherit";
		document.getElementById('emailerror').innerHTML = "";
	}
	
	
//----------PHONE NUMBER----------
	phoneVarError = rightLength (phoneVar, 15);
	
	if (phoneVarError !== "") {
		phone.style.background = "Salmon";
		document.getElementById('phoneerror').innerHTML = "<p>Phone Number " + phoneVarError;
		formIsReady [3] = false;
	} else if (!/^[0-9]+$/.test(phoneVar)) {
		phone.style.background = "Salmon";
		document.getElementById('phoneerror').innerHTML = "<p>Phone Number can only numbers.</p>";
		formIsReady [3] = false;
	} else {
		formIsReady [3] = true;
		phone.style.background = "inherit";
		document.getElementById('phoneerror').innerHTML = "";
	}
	
	
//----------USERNAME----------
	usernameVarError = rightLength (usernameVar, 12);
	
	if (usernameVarError !== "") {
		username.style.background = "Salmon";
		document.getElementById('usernameerror').innerHTML = "<p>Username " + usernameVarError;
		formIsReady [4] = false;
	} else {
		formIsReady [4] = true;
		username.style.background = "inherit";
		document.getElementById('usernameerror').innerHTML = "";
	}
	
	
//----------PASSWORD----------
	passwordVarError = rightLength (passwordVar, 7);
	
	if (passwordVarError !== "") {
		password.style.background = "Salmon";
		document.getElementById('passworderror').innerHTML = "<p>Password " + passwordVarError;
		formIsReady [5] = false;
	} else {
		formIsReady [5] = true;
		password.style.background = "inherit";
		document.getElementById('passworderror').innerHTML = "";
	}
	
	
//----------ADDRESS----------
	addressVarError = rightLength (addressVar, null);
	
	if (addressVarError !== "") {
		address.style.background = "Salmon";
		document.getElementById('addresserror').innerHTML = "<p>Address " + addressVarError;
		formIsReady [6] = false;
	} else {
		formIsReady [6] = true;
		address.style.background = "inherit";
		document.getElementById('addresserror').innerHTML = "";
	}
	
	
//----------CITY----------
	cityVarError = rightLength (cityVar, null);
	
	if (cityVarError !== "") {
		city.style.background = "Salmon";
		document.getElementById('cityerror').innerHTML = "<p>City " + cityVarError;
		formIsReady [7] = false;
	} else {
		formIsReady [7] = true;
		city.style.background = "inherit";
		document.getElementById('cityerror').innerHTML = "";
	}
	
	
//----------ZIP CODE----------
		
	if (countryVar === "United States") {
		
		zipcodeVarError = rightLength (zipcodeVar, 5);
		
		if (zipcodeVarError !== "") {
			zipcode.style.background = "Salmon";
			document.getElementById('zipcodeerror').innerHTML = "<p>Zip Code " + zipcodeVarError;
			formIsReady [8] = false;
		} else if (!/^[0-9]+$/.test(zipcodeVar) || zipcodeVar.length !== 5) {
			zipcode.style.background = "Salmon";
			document.getElementById('zipcodeerror').innerHTML = "<p>Zip Codes need to be 5 numeric digits.</p>";
			formIsReady [8] = false;
		} else {
			formIsReady [8] = true;
			zipcode.style.background = "inherit";
			document.getElementById('zipcodeerror').innerHTML = "";
		}
		
	} else {
		formIsReady [8] = true;
		zipcode.style.background = "inherit";
		document.getElementById('zipcodeerror').innerHTML = "";
	}


//----------TO CHECK THAT EVERY REQUIRED FIELD IS READY----------
	
	for (i = 0; i < 9; i++) {
		if (!formIsReady [i])
			return false;
	}
	
	return true;
  }
