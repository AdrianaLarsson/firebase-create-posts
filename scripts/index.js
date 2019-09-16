
//update posts

        const editIcons = document.querySelectorAll('.edit');
        editIcons.forEach(editIcon =>{
            editIcon.addEventListener('click', (e)=>{
                let id = e.target.parentElement.getAttribute('id');
                let postTitle = e.target.parentElement.getAttribute('title');
                let postContent = e.target.parentElement.getAttribute('content');
    
                const updatePost = document.querySelector('#update-form');
                updatePost.title.value = postTitle;
                updatePost.content.value = postContent;
    
                updatePost.addEventListener('submit', (e)=>{
                    e.preventDefault();
                    fs.collection('posts').doc(id).set({
                        title: updatePost.title.value,
                        content: updatePost.content.value
                    }).then(()=>{
                        const modal = document.querySelector('#modal-update');
                        M.Modal.getInstance(modal).close();
                        updatePost.reset();
                        location.reload();
                        console.log('Document updated successfully');
                        
                    }).catch(function(error){
                        console.error("Error updating document:", error);
                    });
                })
    
            })
        })




//delete posts

        const deleteIcons = document.querySelectorAll('.delete');
         console.log("deleteicons", deleteIcons)
         deleteIcons.forEach(deleteIcon =>{
            deleteIcon.addEventListener('click', (e)=>{
                e.stopPropagation();
               let id = e.target.parentElement.getAttribute('id');
                console.log(id);
               fs.collection('posts').doc(id).delete()
                let removeEl = document.getElementById(`post-${id}`)
                console.log(removeEl)
                removeEl.remove()
            
           })

         })
        
   }
 }


fs.collection('posts').get().then(snapshot => {
    setupPosts(snapshot.docs);
});

//create new posts
const createPost = document.querySelector('#create-form');
createPost.addEventListener('submit', (e)=>{
    e.preventDefault();
    fs.collection('posts').add({
        title: createPost.title.value,
        content: createPost.content.value
    }).then(()=>{
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createPost.reset();
        location.reload();
        console.log('Document created successfully')
    }).catch(function(error){
        console.error("Error writing document:", error);
    });
})



//links/ref to the id="artist" and (title)
function song(id){
    var artist = document.querySelector("#artists");
    var title = document.querySelector("#title");
   // var images = document.querySelector("#images")

   //fetsh url, genius rapidapi, get method, api host and api key
    fetch(`https://genius.p.rapidapi.com/artists/${id}/songs`, {
        "method":"GET",
        "headers": {
            "x-rapidapi-host": "genius.p.rapidapi.com",
            "x-rapidapi-key": "77e948d1f6msh1fb9c1d3089d12bp121fb6jsn41e647859f85"
        }
    })
    //show the apikey
    .then (function(response){
        response.json()
        .then(function(songs){
            console.log(songs.response);
            songs.response.songs.forEach(function(element){
                console.log(element);
                let img = element.primary_artist.image_url;
                console.log(img)
              
                console.log( " Artist " + element.primary_artist.name + "" + " Title " + element.full_title)
                artist.innerHTML +=  `</br>`+  element.primary_artist.name 
                title.innerHTML += `</br>`+  element.full_title 
                id.innerHTML = `</br>`+ " ID " + element.id

                // var image = images.innerHTML += `<img src="${img}" />`;
                 
            });

        })
    })
}



//this listens for when all the DOM content has been loaded then executes this function
document.addEventListener('DOMContentLoaded', function() {

    //this line initializes the modals
        var modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
      
        //this line initializes the items
        var items = document.querySelectorAll('.collapsible');
        M.Collapsible.init(items);
      
      });

   
       
       
   {/* <div class="card-panel hoverable green lighten-4"><div class="collapsible-header grey lighten-3">${post.title}<i class="delete material-icons red-text left">delete</i></div></div>
   <div id="${doc.id}" title="${post.title}" content="${post.content}" style="display:block">
  
   </div>
   
      <div class="collapsible-body blue lighten-4"><div class="collapsible-header grey lighten-3">${post.content}</div>
    <li> */}

    

//     <li>
//     <div class="card-panel hoverable blue lighten-4"> <div class="collapsible-header grey lighten-3" style="display:block"><i class="delete material-icons green-text">delete</i><i class="edit material-icons blue-text">edit</i><center>${post.title}</center></div>
   
//         <div class="left">
//             <div id="${doc.id}" title="${post.title}" content="${post.content}" style="display:block" >
                
                
//              </div>   
//         </div>
//     </div>
//     <div class="collapsible-body green lighten-4"><div class="collapsible-header grey lighten-3">${post.content}</div>
// </li>

