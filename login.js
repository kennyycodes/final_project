/**
 * @TODO get a reference to the Firebase Database object
 */
const db = firebase.database().ref();

const arr = [];



const email = document.getElementById("email");
const password = document.getElementById("password");
const login_btn = document.getElementById("login");
const register_btn = document.getElementById("register");


login_btn.onclick = checkDB;

// checks if the login data is matched in the databse
function checkDB(event) {
    event.preventDefault();
    let emailVal = email.value;
    let pwdVal = password.value;
    // console.log(emailVal);
    // console.log(pwdVal);
    /*  
        -logic-
        when user presses button
        go thru button and find the corresponding email
        then check the password 
    */

    // Attach an event listener to listen for changes in the data

    db.on('value', (snapshot) => {
        let data = snapshot.val();
        let data_values = Object.values(data);
        let x;
        // Object.keys(data).forEach((email) => {
        //     arr.push({ [email]: data[email] });
        // });

        // console.log(data);
        // console.log(arr);
        // console.log(arr[0]);
        // console.log(data[0]); prints undefined
        for (let i = 0; i < data_values.length; i++) {
            let email_inDB = data_values[i].email;
            let pwd_inDB = data_values[i].pwd;
            if (email_inDB == emailVal && pwd_inDB == pwdVal) {
                console.log("kenny");
                window.location.replace("filters.html");
                x=false
                break;
            }
            x=true;
        }
        if (x) {
            console.log("omrana");
            alert("Invalid email or password");
        }
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
    });
}
