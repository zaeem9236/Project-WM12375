

function login() {
    let email = document.getElementById('usr-login');
    let pass = document.getElementById("pwd-login");
    // console.log(email.value);
    // console.log(pass.value);
    // console.log("Login");

    firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
        .then(function (result) {
            if (result.operationType === "signIn") {
                window.location.replace('chatview.html');
            }
        })


        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert("Please enter a valid Email/password");
        });
}

let signup = () => {
    let name = document.getElementById('signup_name').value;
    let email = document.getElementById('signup_email').value;
    let pwd = document.getElementById('signup_pwd').value;
    let cpwd = document.getElementById('signup_cpwd').value;
    if(pwd === cpwd){
    firebase.auth().createUserWithEmailAndPassword(email, pwd)
        .then(function (result) {
            var key = firebase.database().ref('/chatApp/').push().key;
            var user = new Object()
                user.key =  key;
                user.name =  name;
                user.email =  email;
                user.messages = {
                    message1: "salam",
                    message2: "kaisay ho",
                    message3: "message me when free"
                };
                var cars = new Array();
                var oo = {
                    name: "volvo",
                    tyres: "beatuful",
                    price: 154000

                };
                cars.push(oo);

            firebase.database().ref('/chatApp/users/'+key).set(cars);
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === "auth/email-already-in-use"){
            alert("You are already Registered");
            }
            // ...
        });
    }else{
        alert("Please enter same password in both fields");
    }
}

