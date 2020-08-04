const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mess = document.getElementById('errorText');
const nghe = document.getElementById('profession');
const male = document.getElementById('gender_Male')
const female = document.getElementById('gender_Female')

form.addEventListener('submit', e => {
	e.preventDefault();

	mess.innerHTML = '';
	checkName();
	checkGender();
	checkPhone();
	checkMail();
	checkNghe();
	CheckPass1();
	CheckPass2();
});


	// trim to remove the whitespaces
function checkName(){
	const usernameValue = username.value.trim();
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
		mess.innerHTML += 'Name :' + username.value + '<br>';
	}
}

function checkGender(){
	if(male.checked){
		mess.innerHTML += 'Gender :' + male.value + '<br>';
	}else if(female.checked){
		mess.innerHTML += 'Gender :' + female.value + '<br>';
	}
}

function checkPhone(){
	const phoneValue=phone.value.trim();
	if(phoneValue === ''){
		setErrorFor(phone,"Phone cannot be blank");
	}else if(!isPhone(phoneValue)){
		setErrorFor(phone, 'Not a valid phone');
	}else{
		setSuccessFor(phone);
		mess.innerHTML += 'Phone :' + phone.value + '<br>';
	}
}

function checkMail(){
	const emailValue = email.value.trim();
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
		mess.innerHTML += 'Email :' + email.value + '<br>';
	}
}	

function checkNghe(){
	if (nghe.options['id1'].selected){
		setErrorFor(nghe, 'Profession cannot be blank');
	}else{
		setSuccessFor(nghe);
		mess.innerHTML += 'Profession :' + nghe.options[nghe.selectedIndex].innerText + '<br>';
	}
}

function CheckPass1(){
	const passwordValue = password.value.trim();
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

}

function CheckPass2(){
	const password2Value = password2.value.trim();
	const passwordValue = password.value.trim();
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
		mess.innerHTML += 'Password matches';
	}
}
	

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
	//alert("Error");
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	//alert("Success");
}

function isEmail(email) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function isPhone(phone){
	return /((09|03|07|08|05)+([0-9]{8})\b)/g.test(phone);
}
