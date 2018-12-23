var playlist={melody:'Ilayaraja', romance:'Yuvan'};

function updatePlaylist(playlist, artistName, songTitle){
    return Object.assign({}, playlist, {songTitle:[artistName]});
   //title=party, name=Vijay Antony
   //return newPlaylist;
}