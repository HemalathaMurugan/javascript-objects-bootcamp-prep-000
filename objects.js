var playlist={songTitle:artistName};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.songTitle=artistName;
  return playlist;
  
}

/*function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[songTitle]:`${artistName}`});
}*/

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}