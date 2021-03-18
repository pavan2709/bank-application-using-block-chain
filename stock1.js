            
  var firebaseConfig = {
    apiKey: "AIzaSyBmnxCxomdaV1wHOBFqDgiCHDAL9wdmgEs",
    authDomain: "form-258a0.firebaseapp.com",
    databaseURL: "https://form-258a0.firebaseio.com",
    projectId: "form-258a0",
    storageBucket: "form-258a0.appspot.com",
    messagingSenderId: "237949768225",
    appId: "1:237949768225:web:b0a6d73eeb3b2dd22e8960"
  };
  firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

function SignUp()
{
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("signed Up");

}



function SignIn()
{
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed In : " + email.value);
  firebase.auth().onAuthStateChanged(function(currentUser) {
    if (currentUser) {
     window.location="http://localhost:8080/";
    }
  });
  



}


function SignOut()
{

 auth.signOut();
 alert("Signed Out");

}


auth.onAuthStateChanged(function(user)
{


  if(user)
          {

            var email = user.email;
            alert("Active User : " + email );




          }

  else
  {

      alert("No Active User");

  }



});

