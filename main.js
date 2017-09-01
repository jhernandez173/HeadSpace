
//created a variable referencing h1
var myHeading = document.querySelector('h1');
//edited the variable output
myHeading.textContent = 'HeadSpace';

//example of alert function
alert('Beginning of HeadSpace');

//creating my own function
function multiply(num1,num2){
	var result = num1*num2;
	//returns the result
	return result;
}

//how do I know where querySelector comes from?
/*document.querySelector('html').onclick = function(){
	alert('Ouch! Stop poking me!');
}
*/

//it seems as if the image I want changed will not change because 
//the var myImage is pointing to 'img', referencing the first 
//available image, Problem is that it overlaps the loop I've created?
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === "ConciseImages/Art.jpg") {
		myImage.setAttribute('src', "ConciseImages/Kai.jpg");
	} else {
		myImage.setAttribute('src',"ConciseImages/Art.jpg");
	}
}

//Personalized Welcome Message Code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Welcome to HeadSpace, ' + myName;
}

//if localStorage shows no name
if (!localStorage.getItem('name')) {
	//enable setUsername function
	setUserName();
} else {
	//enabled storedName as getItem from localStorage
	var storedName = localStorage.getItem('name');
	//myHeading var changes h2: textcontent changes string
	myHeading.innerHTML = 'Welcome to HeadSpace, ' + storedName;
}
//doesnt work tho bc setUserName doesn't delete localStorage name
myButton.onclick = function(){
	setUserName();
}



