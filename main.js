

 // Initialize the FirebaseUI Widget using Firebase.
 var ui = new firebaseui.auth.AuthUI(firebase.auth());

 const app = document.getElementById('main-app-content').style.display = "none"
 const LogIn = document.getElementById('firebaseui-auth-container')


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      LogedIn();
      var uid = user.uid;
      
    } else {
        NotLogedIn();
      
    }
  });

  const Signout = () => {
    
    firebase.auth().signOut().then(() => {
        NotLogedIn()
      }).catch((error) => {
        console.log(error)
      });
  }
  

  const LogedIn = () =>{

    const app = document.getElementById('main-app-content').style.display = "block"
    const LogIn = document.getElementById('firebaseui-auth-container').style.display = "none"

  }

  const NotLogedIn = () =>{

    const app = document.getElementById('main-app-content').style.display = "none"
    const LogIn = document.getElementById('firebaseui-auth-container').style.display = "block"

    ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Other config options...
      });

  }
  
  