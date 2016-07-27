
var songsLink = [];
var imagesLink = [];
var artistName = [];
var albumName = [];
var played = [];

function  displaySongs(container, data){
    if (data && data.length) {
        var list = document.createElement('ul');
        
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement('li');
            var songs = data[i];
            songsLink[i] = songs.path;
            imagesLink[i] = songs.image;
            artistName[i] = songs.artist;
            albumName[i] = songs.album;
            played[i] = false;
            var songNumber = i + 1;
            li.innerHTML = '<p>' + songNumber + '. ' + songs.artist + ' - ' + songs.song + 
            '</p><button id="' + i + '" onclick="buttonClick(' + i + ')"></button>';
            list.appendChild(li);
        }
        container.appendChild(list);
        for (var i = 0; i < data.length; i++){
            document.getElementById(i).className = "fa fa-play fa-2x";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
	
	Ajax.request('GET', 'server.php', true, function(response) {
		var songs = JSON.parse(response);
	    document.getElementById('result').innerHTML = '';
	    displaySongs(document.getElementById('result'), songs)
	});
	
});


/* function buttonClick(songId){
    if (document.getElementById(songId).className === "fa fa-play fa-2x"){
        document.getElementById(songId).className = "fa fa-pause fa-2x";
        for (var i = 0; i < 9; i++ ){
            if (i != songId){
                document.getElementById(i).className = "fa fa-play fa-2x";
            }
        }
        playSong(songId);
    } else if (document.getElementById(songId).className === "fa fa-pause fa-2x"){
        document.getElementById(songId).className = "fa fa-play fa-2x";
        pauseSong();
    }
}

function seconds2time(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var seconds = Math.round(seconds - (hours * 3600) - (minutes * 60));
    var time = "";

    if (hours != 0) {
    	time = hours + " : ";
    }
    if (minutes != 0 || time !== "") {
    	minutes = (minutes < 10 && time !== "") ? "0" + minutes : String(minutes);
    	time += minutes + " : ";
    }
    if (time === "") {
    	time = seconds;
    }
    else {
    	time += (seconds < 10) ? "0" + seconds : String(seconds);
    }
    return time;
}


var lastSong;

function playSong(songId){
    if (played[songId]){
        document.getElementById('myAudio').play();
    } else {
        var songName = 'songs/' + songsLink[songId];
        document.getElementById('myAudio').src = songName;
        document.getElementById('myAudio').play();
        played[lastSong] = false;
        lastSong = songId;
        played[lastSong] = true;
    }
    var imgName = 'images/' + imagesLink[songId];
    document.getElementById('showingImage').src = imgName;
    document.getElementById('myAudio').addEventListener("loadeddata", function() {
        document.getElementById('songLength').innerHTML = seconds2time(this.duration);
        document.getElementById('timePlaying').innerHTML = seconds2time(this.currentTime);
    });
    var title = artistName[songId] + ' - ' + albumName[songId];
    document.getElementById('name').innerHTML = title;
}

function  pauseSong(){
    document.getElementById('myAudio').pause();
} */

