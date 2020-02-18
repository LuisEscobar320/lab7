'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeCtr").click(sendData);
	console.log("Button hit");
}

function sendData(){
	ga("send", "event", 'like', 'click');
	console.log("data sent");
}