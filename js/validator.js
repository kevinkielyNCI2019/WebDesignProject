function myValidator(){
	
	var firstName = document.getElementById('fname').value;
	var emailAdd = document.getElementById('email').value;
	var message = document.getElementById('msg').value;

	var emailAddRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|ie|uk)\b$/;
    
	
	//check fields
	
	if(firstName !== "" && emailAdd !== "" && message !== "" && emailAddRegex.test(emailAdd) )
	
	{
		console.log("testing1");
		window.alert("We will get back to you shortly");
		
		
	}
	
	else if(firstName===""){
		console.log("testing2");
				window.alert("You did not enter first name correctly");

	}
	
	else if(emailAdd===""){
		console.log("testing3");
				window.alert("You did not enter emailAdd correctly");

	}
	
	else if(msg===""){
		console.log("testing4");
				window.alert("You did not enter password correctly");

	}
	
	else {
		window.alert("Errors please try again!");
	}
}