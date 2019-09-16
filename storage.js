
//get a reference to the unordered list
const postList = document.querySelector('#posts');
console.log("postlist", postList)


const setupPosts = (data)=> {

    if (data.length){
        let html = '';
        data.forEach(doc =>{
            const post = doc.data();
    
            const li = `
            <li>
            <div id="post-${doc.id}" class="card-panel hoverable blue lighten-4">
              
                <div class="collapsible-header grey lighten-3">${post.title}
               
                <div id="${doc.id}" title="${post.title}" content="${post.content}">
                
                <i class="edit material-icons modal-trigger" href="#modal-update">edit</i>
                <i class="delete material-icons red-text">delete</i>
                </div> 
                </div>   
                </div>

                </div>
             
                  <div class="collapsible-body green lighten-4"><div class="collapsible-header grey lighten-3">${post.content}</div>
            <li>
            `;
            html += li;
        });
        postList.innerHTML = html


//function save teh id, title, and artist to firebase
const saveGenius = (id, title, artist) =>{
    return fs.collection('songs').add({
        "id": id,
        "title": title, 
        "artist": artist
    })
}

