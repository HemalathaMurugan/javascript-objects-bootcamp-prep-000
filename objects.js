var playlist={artist};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName=songTitle;
  return playlist;
  
}

/*function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[songTitle]:`${artistName}`});
}*/

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}