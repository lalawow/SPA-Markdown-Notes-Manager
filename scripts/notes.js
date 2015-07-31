$(document).ready(function() {
	refresh_notes()

})

var refresh_notes = function() {
	var notes = JSON.parse(localStorage.editor_content)
	var notes_content = notes.content
	document.getElementById("notes_list").innerHTML = ""
	for (var i = notes.filenumber - 1; i >= 0; i--) {
		var content = notes_content[i]
		var show_content = content.content
		if (show_content.length > 40) show_content = show_content.substr(0,40)+"..."
		var innerHTML = "<div class='one_note' id ="+i+"><div class='notes_title'>"+content.title+"</div><div class='notes_content'>"+show_content+"</div></div>"
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

	main_html.html("<div class = 'show_page_title'>"+content.title+"</div><div id = 'epiceditor' style='width:695px; height:200px; background-color: white;'></div>")
    
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

var newNote = function() {
 	var main_html = '<iframe id = "iframe_html" src="editor.html" style = "width: 100%; height: 100%"></iframe>'
    $("#main").html(main_html)
}
    
/*var  opt ={
					file: {
    				name: 'file1',
    				defaultContent: '',
    				autoSave: false
  					},
  					basePath: './'
  				}
		var editor = new EpicEditor(opt).load()
		if (!localStorage.editor_content) {
		localStorage.editor_content = JSON.stringify({
			"filenumber": 0,
			"content": []
		}) }
		console.log(localStorage.editor_content)
		editor.getElement('editor').body.innerText = "" 



var save = function(editor) {
	console.log(localStorage.editor_content)
	var storage_content = JSON.parse(localStorage.editor_content)
	console.log(storage_content)
	var new_title = $('input[id="loadFileName"]').val()
	var new_content = editor.getElement('editor').body.innerText
	var new_time = new Date()
	console.log("new title: "+new_title)
	console.log("new content: "+new_content)
	var file_id_number = storage_content["filenumber"] + 1
	storage_content["filenumber"] ++
	var new_json = {
		id: file_id_number,
		title: new_title,
		content: new_content
//		time: new_time
	} 
	storage_content["content"].push(new_json)
	localStorage.editor_content = JSON.stringify(storage_content)
    console.log(localStorage.editor_content)
	console.log("save OK!")
	show_page(new_json.id - 1)
}
*/