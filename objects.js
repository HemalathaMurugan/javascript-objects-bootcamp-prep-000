var playlist={Sundari:'Ilayaraja', orukal:'Yuvan'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Mustafa'] = "AR Rehman" ;
  return playlist;
   //return Object.assign({}, playlist, {[Mustafa]:"AR Rehman"});
}

/*function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign({}, playlist, {[Mustafa]:"AR Rehman"});
}*/

function removeFromPlaylist(playlist, artistName) {
  playlist=playlist.delete['Sundari'];
  return playlist;
}