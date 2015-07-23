$(document).ready(function() {
	refresh_notes()

})

var refresh_notes = function() {
	var notes = JSON.parse(localStorage.editor_content)
	var notes_content = notes.content
	document.getElementById("notes_list").innerHTML = ""
	for (var i = notes.filenumber - 1; i >= 0; i--) {
		var content = notes_content[i]
		var innerHTML = "<div class='one_note'><div class='notes_title'>"+content.title+"</div><div class='notes_content'>"+content.content+"</div></div>"
		document.getElementById("notes_list").innerHTML += innerHTML
	}	
}
