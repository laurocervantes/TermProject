var firebaseConfig = {
    apiKey: "AIzaSyDbSVboE_cPY-NTehA9Uu-HIcduU3kmUPY",
    authDomain: "firevuechats.firebaseapp.com",
    databaseURL: "https://firevuechats-default-rtdb.firebaseio.com",
    projectId: "firevuechats",
    storageBucket: "firevuechats.appspot.com",
    messagingSenderId: "1068687823149",
    appId: "1:1068687823149:web:3637e9910a378e2afb83a4"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("fomData")

//Get Submit Form
let forma = document.getElementById('forma')

//Create Event Listener To Allow Form Submission
forma.addEventListener("submit", (e) => {
    //Prevent Default Form Submission Behavior

    let firstName = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value

    //Get Form Values
    //Save Form Data To Firebase
    db.doc().set({
        name: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message
    }).then( () => {
        alert("Form Successfully Submitted!!")
    }).catch((error) => {
        console.log(error)
        alert('An Error Ocurred, Try Again')
    })


    e.preventDefault()
})