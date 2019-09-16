//function save teh id, title, and artist to firebase
const saveGenius = (id, title, artist) =>{
    return fs.collection('songs').add({
        "id": id,
        "title": title, 
        "artist": artist
    })
}

