var playlist={melody:'Ilayaraja', romance:'Yuvan'};

function updatePlaylist({newPlaylist}, name, title) {
   newPlaylist=Object.assign({}, playList, {title:[name]})
   //title=party, name=Vijay Antony
   return newPlaylist;
}