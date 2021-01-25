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
np = true;
newPlaylist.click( function (){
    if (np === true){
        np = false;
        popUp();
    }
})

// pop Up
function popUp (){
    $('#page').append('<div id="popUp"></div>');
    $('#popUp').css({
        "visibility" : "visible",
        "index" : "1",
        "position" : "absolute",
        "text-align" : "center",
        "width" : "98%",
        "padding" : "1rem",
        "height" : "315px",
        "background-color" : "#8D99AE",
    }).append('<input type="text" id="playlistName"><button id="addPlaylistName">Add Playlist</button>');

    // create new playlist
    $('#addPlaylistName').click( function (){
        $('#playlist').append('<button>' + $("#playlistName").val() + '</button>')
        $('#popUp').css("visibility", "hidden").html("");

        np = true;
    })
}

