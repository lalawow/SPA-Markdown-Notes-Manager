function save() {
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
	window.parent.postMessage("saved","*")
}

