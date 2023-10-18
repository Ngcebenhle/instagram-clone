
 // Initialize the FirebaseUI Widget using Firebase.
 var ui = new firebaseui.auth.AuthUI(firebase.auth());


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
  
     LogedIn()
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    var uid = user.uid;
    // ...
  } else {
      NotLogedIn()
    // User is signed out
    // ...
  }
});



  const Signout = async() => {
    
    firebase.auth().signOut().then(() => {
        NotLogedIn()
      }).catch((error) => {
        console.log(error)
      });
  }
  
  const logout = document.getElementById('logout').onclick = Signout()

  const LogedIn = () =>{

    const app = document.getElementById('main-app-content').style.display = "block"
    const LogIn = document.getElementById('firebaseui-auth-container').style.display = "none"
    
    console.log("i am in ")
  
  }

  const NotLogedIn = () =>{

    const app = document.getElementById('main-app-content').style.display = "none"
    const LogIn = document.getElementById('firebaseui-auth-container').style.display = "block"
 
    ui.start('#firebaseui-auth-container', {

      
        signInOptions: [

          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          //signInMethod: firebase.auth.Auth.fetchSignInMethodsForEmail.EMAIL_PASSWORD_SIGN_IN_METHOD
        
         
        ],

        // Other config options...
      });

    
  

  

  }
  
  