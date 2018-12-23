var playlist={melody:'Ilayaraja', romance:'Yuvan'};

function updatePlaylist({newPlaylist}, name, title) {
    return Object.assign({}, playList, {title:[name]})
   //title=party, name=Vijay Antony
   //return newPlaylist;
}