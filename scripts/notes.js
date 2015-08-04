$(document).ready(function() {
    refresh_notes()
    $(".clickableH2").hover(function() {
        $(this).addClass("hoverCursor")
    }, function() {
        $(this).removeClass("hoverCursor")
    })

    $('.clickableH2').on('mousedown', function(e) {

        var h2Obj = $(this)
        h2Obj.addClass('clickedH2');

    });

    $('.clickableH2').on('mouseup', function(e) {

        var h2Obj = $(this)
        h2Obj.removeClass('clickedH2');

    });


})

var refresh_notes = function() {
    var notes = JSON.parse(localStorage.editor_content)
    var notes_content = notes.content
    console.log(notes.filenumber)
    console.log(notes_content)
    document.getElementById("notes_list").innerHTML = ""
    if (notes.filenumber === 0) return
    for (var i = notes.filenumber - 1; i >= 0; i--) {
        var content = notes_content[i]
        var show_content = content.content
        console.log(content)
        if (show_content.length > 78) show_content = show_content.substr(0, 76) + "..."
        var one_note_background = (((notes.filenumber - i) % 2) == 1) ? "white" : "#F7F7F7"
        console.log(one_note_background + " " + (((notes.filenumber - i) % 2) == 1) + " " + (notes.filenumber - i))
        var innerHTML = "<div class='one_note' style = 'background-color: " + one_note_background + ";' id =" + i + "><div class='notes_title'>" + content.title + "</div><div class='notes_content'>" + show_content + "</div></div>"
        document.getElementById("notes_list").innerHTML += innerHTML
    }

    //div's reaction with mouse over the div
    $(".one_note").hover(function() {
        $(this).css("border", "1px solid lightblue")
        $(this).addClass("hoverCursor")
    }, function() {
        $(this).css("border", "0px solid white")
        $(this).removeClass("hoverCursor")
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

    main_html.html("<div class = 'show_page_title'>" + content.title + "</div><div id = 'epiceditor' style='width:695px; height:200px; background-color: white;'></div>")

    var opt = {
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

var clearSaves = function() {
    localStorage.editor_content = JSON.stringify({
        filenumber: 0,
        content: []
    })
    console.log(localStorage.editor_content.filenumber)
    refresh_notes()
}