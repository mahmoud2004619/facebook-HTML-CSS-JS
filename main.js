function formValidit() {
	var Firstname = document.getElementById("fname").value;
	var Lastname = document.getElementById("lname").value;
	var Email = document.getElementById("email").value;
	var Phone = document.getElementById("phone").value;
	var Password = document.getElementById('pass').value;
	var error = document.getElementById("error");
	var text = "";

	if (Firstname.length < 4) {
		text = "please enter validate firstname";
		error.innerHTML = text;
		return false;
	} else if (Lastname.length < 4) {
		text = "please enter validate lastname";
		error.innerHTML = text;
		return false;
	} else if (Email.indexof = ("@") == -1 || Email.length < 15) {
		text = "please enter validate E-mail";
		error.innerHTML = text;
		return false;
	} else if (isNaN(Phone) || Phone.length != 11) {
		text = "please enter validate Phone";
		error.innerHTML = text;
		return false;
	} else if (Password.length < 6) {
		text = "please enter validate Password";
		error.innerHTML = text;
		return false;
	} else {
		alert("Done");
		return true;
	}
}           