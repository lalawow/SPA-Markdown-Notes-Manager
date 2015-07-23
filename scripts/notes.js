$(document).ready(function() {
	refresh_notes()

})

var refresh_notes = function() {
	var notes = JSON.parse(localStorage.editor_content)
	var notes_content = notes.content
	document.getElementById("notes_list").innerHTML = ""
	for (var i = notes.filenumber - 1; i >= 0; i--) {
		var content = notes_content[i]
		var innerHTML = "<div class='one_note' id ="+i+"><div class='notes_title'>"+content.title+"</div><div class='notes_content'>"+content.content+"</div></div>"
		document.getElementById("notes_list").innerHTML += innerHTML
	}	

	//div's reaction with mouse over the div
	$(".one_note").hover(function() {
  		$(this).css("border","3px solid lightgrey")
 	}, function(){
 		$(this).css("border","3px solid white")
 	})

	$(".one_note").click(function() {
		show_page($(this).attr("id"))
	})

}


var show_page = function(file_id) {
	var notes = JSON.parse(localStorage.editor_content)
	var notes_content = notes.content
	var content = notes_content[parseInt(file_id)]	
	var main_html = $("#main")

	main_html.html("<h1>hello World</h1>")
	main_html.html("<div class = 'show_page_title'>"+content.title+"</div><div id = 'epiceditor' style='width:800px; height:200px;'></div>")
    
	var  opt ={
					file: {
    					name: 'file1',
    					defaultContent: '',
    					autoSave: false
  					},
  					button: {
    					preview: false,
    					fullscreen: false,
    					bar: "auto"
  					},
  					basePath: './'
  				}
		var editor = new EpicEditor(opt).load()
		
//		console.log(localStorage.editor_content)

	editor.getElement('editor').body.innerText = content.content
	editor.preview();

}