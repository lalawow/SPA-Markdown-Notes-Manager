function consolelog() {
	console.log(editor.getElement('editor').body.innerHTML);
}

function old_saveFile() {
	
	editor.importFile('file2',editor.getElement('editor').body.innerText); 
	console.log(editor.getElement('editor').body.innerText);
	console.log(editor.getElement('editor').body.innerHTML)
	//Imports a file when the user clicks this button
//	editor.importFile('file1',"hello world!"); 
	console.log("save OK!")
}

function old_loadFile() {
	editor.open('file2');
//	console.log(file1.md);
	console.log("load OK!");
}

function saveFile() {
	
	var content = editor.getElement('editor').body.innerText; 
	var len = localStorage.editor_content.length
	console.log(len)
	localStorage.editor_content=content
	console.log(localStorage.editor_content)
	//Imports a file when the user clicks this button
//	editor.importFile('file1',"hello world!"); 
	console.log("save OK!")
}

function loadFile() {
	var content = localStorage.editor_content
	console.log(content)
	editor.getElement('editor').body.innerText = content
}