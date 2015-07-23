function newNote() {
	document.getElementById('iframe_html').src = "editor.html"
	console.log(document.getElementById('iframe_html').src)
}

function helloworld() {
	console.log("hello world")
}

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
  if (e.data == "intro") {
  	console.log("message got!")
  	document.getElementById('iframe_html').src = "intro.html"
  	refresh_notes()
  }
},false);