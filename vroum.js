// Add Buttons:
let newPlaylist = $('#newPlaylist');
let addMusic = $('#addMusic');
// Del Buttons:
let delPlaylist = $('#delPlaylist');
let delMusic = $('#delMusic');
//
let playlist = $('#playlist');
let liste = $('#liste');

// add playlist
newPlaylist.click( function (){
    popUp();
})

// pop Up
function popUp (){
    $('#page').append('<div id="popUp"></div>');
    $('#popUp').css({
        "index" : "1",
        "position" : "absolute",
        "text-align" : "center",
        "width" : "98%",
        "padding" : "1rem",
        "height" : "315px",
        "background-color" : "#8D99AE",
    }).append('<input type="text" id="playlistName"><button id="addPlaylistName">Add Playlist</button>');
}

$('#addPlaylistName').click( function (){
    $('#popUp').css({"visibility": "hidden"});
})
