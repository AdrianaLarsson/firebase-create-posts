//function save teh id, title, and artist to firebase
const saveGenius = (artist, title, id) =>{
    return fs.collection('songs').add({
        "id": id,
        "title": title, 
        "artist": artist
    })
}

