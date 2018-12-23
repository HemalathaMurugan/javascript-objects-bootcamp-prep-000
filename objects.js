var playlist={Sundari:'Ilayaraja', orukal:'Yuvan'};

/*function updatePlaylist(playlist, artistName, songTitle) {
  playlist.songTitle=artistName;
  return playlist;
   //return Object.assign({}, playlist, {[Mustafa]:"AR Rehman"});
}*/

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[songTitle]:`${artistName}`});
}

function removeFromPlaylist(playlist, artistName) {
  playlist=playlist.delete[artistName];
  return playlist;
}