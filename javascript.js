const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
	button.addEventListener('click', calculate);
});

function calculate(event) {
	let buttonClicked = event.target.value;

	if (buttonClicked === '=') {
		display.value = eval(display.value);
		
	}
	else if (buttonClicked === 'c') {
		display.value = '';
	}
	else {
		display.value += buttonClicked;
	}
	
}