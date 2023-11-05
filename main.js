class App 
{
  constructor()
  {
    this.userId = "";
    this.ui = new firebaseui.auth.AuthUI(auth);
     
    //screens and modal divs 
    this.myAuth = document.querySelector('#firebaseui-auth-container');
    this.app = document.querySelector('#main-app-content');


    this.upload = document.querySelector('#upload-screen');
    this.editModal = document.querySelector('#edit-modal').style.display = "none";
    
    
    //log out button
    this.logout = document.querySelector('#logout');

    //upload button
     this.uploadButton = document.querySelector('#upload-button');

     //this.imageview = document.querySelector('#display');

     //more options button
     this.more =document.querySelector('#moreOptions')
         
    // the post section/ elements
    this.selectedMedia = document.querySelector('#upload-image');
    this.description = document.querySelector('#upload-image-description').value;

    //post button 
    this.post = document.querySelector('#post-button');
    this.updatebutton = document.querySelector('#update-button')
     
    // Modal menu tabs 
    this.modaliterms = document.getElementsByClassName('modal-tabs');

    //Modal buttons
    this.edit =document.querySelector('#editButton');
    this.delete =document.querySelector('#deleteButton');

    //this.handleAuth();
    
    
    
    
    
    //sign out button 
    this.logout.addEventListener('click', () => {
      this.logout.style.display = "none";
      this.handleLogout();
    });

    //uplaod button event listener calls the screen only 
    this.uploadButton.addEventListener('click', () => {

      this.uploadScreen();

    });

    //post button event listener uploads the informaion
    this.post.addEventListener('click', () => {
      


      
    


      this.handleUpload();
      this.handleDataSave()
      this.handleRead();

    });

    //more options button 
    this.more.addEventListener('click', () => {
    });

    this.more.addEventListener('clicl',() =>{
       
      this.handleModalcall()
      
    });

    
    this.edit.addEventListener('clicl',() =>{

      this.uploadScreen()
      this.updatebutton.style.display = "block";
      
    });

    this.delete.addEventListener('clicl',() =>{
       this.handleDelete()
    });

    this.selectedMedia.addEventListener("change",function(){

      const reader = new FileReader();
      
      reader.addEventListener("load", () =>{
        var uploaded_image = reader.result;
        
        this.imageview = document.querySelector('#display').style.backgroundImage = `url(${uploaded_image})`
      });
      reader.readAsDataURL(this.files[0]);
    })
  }


  handleAuth(){
    auth.onAuthStateChanged((user) => {
      if (user) {

        console.log(user);
         this.userId = user.uid;
        this.redirectToApp();

      } else {
        this.redirectToAuth();
      };  

    
    });
  } 

  redirectToApp(){
    this.myAuth.style.display = "none";
    this.app.style.display = "block";
    this.upload.style.display = "none";

  }


  redirectToAuth(){
    this.myAuth.style.display = "block";
    this.app.style.display = "none";
  
  
    this.ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
  
          this.userId = authResult.user.uid;
          this.$authUserText.innerHTML = user.displayName; 
          this.redirectToApp();
        },
      },
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Other config options...
    });
    
  }
  
  handleLogout(){
    auth
      .signOut()
      .then(() => {
        this.redirectToAuth();
      })
      .catch((error) => {
        console.log("ERROR OCCURED", error);
      });
  }

  handleUpload(){
 
    
  

function uploadBytes(file){
      
      var storageRef = firebase.storage().ref();
      var img = storageRef.child('images/Auth-code.PNG')
     
      // 'file' comes from the Blob or File API
      img.put(file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      
      });

      //get the url and store it in a collection
      //const imgURL = img.snapshot.ref.getDownloadURL();

      
    }

    uploadBytes()
    
   

}
  
  handleDataSave(){

    function DataSavesToDatabase(){
                                      // in the.doc put he user uid
      var Post = db.collection("Post").doc("Test");
            
        Post.set({
          
          //Description: this.description,
          //imgURL:this.imgURL 

          escription: "you",
          imgURL:"work" 
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          //console.error("Error adding document: ", error);
      });

    }
    DataSavesToDatabase()

  }

  handleRead(){

    
      var docRef = db.collection("Post").doc("Test");

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });


  }

  handleDataPopulation(){
    //Read the data from the databasase and populate the elements

  // in the.doc put he user uid tell it to read all the post 
  var neededinfo =db.collection("Post").doc("Test").
    

  // dont display the data but assign it to the post ellements per post sort of like create all those elements of the post 
  // as it loops through the data
  neededinfo.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);

  });
});

}

  handleDelete(){

      function deletePicture(){
        
        // Create a reference to the file to delete
      var desertRef = storageRef.child('images/desert.jpg'); // pay special attentin to the referance 

      // Delete the file
      desertRef.delete().then(() => {
        // File deleted successfully
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });

    }

    function deleteData(){

      db.collection("cities").doc("DC").delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

    }

    deletePicture()
    deleteData()
}
  
  handleUpdate(){

    var washingtonRef = db.collection("cities").doc("DC");

      // Set the "capital" field of the city 'DC'
      return washingtonRef.update({
          capital: true
      })
      .then(() => {
          console.log("Document successfully updated!");
      })
      .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });


// try this first 

    db.collection("users").doc("frank").update({
      "age": 13,
      "favorites.color": "Red"
    })
    .then(() => {
      console.log("Document successfully updated!");
    });
}
handleModalcall(){
 //if the post id belongs to the same user uid and the same one currently logged in
 if(2+2){
          
  // But first set the edit and delet menu tabs RED and visiable

 this.editModal.style.display = "block";




}else{
   //display the menu tab without the two menu tabs

}
}

  uploadScreen(){
    this.myAuth.style.display = "none";
    
    this.app.style.display = "none";
    
    this.upload.style.display = "block";
}


// how do we handle update if the upload screen in called from the edit tab 
// the update button needs to be there

}
new App();
  
  