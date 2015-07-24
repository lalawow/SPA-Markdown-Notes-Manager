
function helloworld() {
	console.log("hello world")
}

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
  if (e.data == "saved") {
  	console.log("message got!")
  	var notes = JSON.parse(localStorage.editor_content)
	show_page(notes.filenumber-1)
  	refresh_notes()
  }
},false);