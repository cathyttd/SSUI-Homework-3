$(document).ready(function(){ 
	addEventListeners();
});
 // Timer is used to count time and draw lines in the output text area
var items = []
var totalPrice = 0

// These are the event types the input area listens to

// Add all the event listeners to the input area
function addEventListeners() {
	$("#maple-apple").click(addMapleApple);
	$("#cinnamon-o").click(addCinnamon);
}

function addMapleApple(){
	for (var i = $("#quantity-input").val()-1; i >= 0; i--) {
		items.push("maple");
	}
	totalPrice += (parseInt($("#quantity-input").val())*10)
}

function addCinnamon(){
	for (var i = $("#quantity-input").val()-1; i >= 0; i--) {
		items.push("cinnamon-o");
		console.log(parseInt($("#quantity-input").val()))
	}
	totalPrice += parseInt($("#quantity-input").val())*5
}
