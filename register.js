
const db = firebase.database().ref();

let createAccount = document.querySelector("button");

let email = document.getElementById("email");
let pwd = document.getElementById("password");


console.log("didnt update");

createAccount.onclick = updateDB;


console.log("working");


function updateDB(event) {
    event.preventDefault();
    let emailVal = email.value;
    let pwdVal = pwd.value;
    let x = true;

    email.value = "";
    pwd.value = "";

    checkForDuplicates(emailVal)
    if (x) {
        console.log("2");
        let value = {
            email: emailVal,
            pwd: pwdVal
        };
        db.push(value);
    }
    window.location.replace("login.html");


}
function checkForDuplicates(emailParameter){
    db.on('value', (snapshot) => {
        let data = snapshot.val();
        let data_values = Object.values(data);

        console.log(data_values);

        for (let i = 0; i < data_values.length; i++) {
            let email_inDB = data_values[i].email;
            console.log(email_inDB);
            console.log(emailParameter);
            console.log("---------");

            console.log("1");
            if (email_inDB == emailParameter) {

                console.log("if statement passed");
                //alert("Email already in use!");
                x = false;
                break;
            }
        }
        
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
    });
}


/**
 * https://rapidapi.com/sshanbond/api/university-college-list-and-rankings/   - college rankings
 *  https://rapidapi.com/Hotciti/api/hotciti/  - a bunch of stuff
 * https://rapidapi.com/Edeon/api/colleges-and-fields-of-study/  - field of study & city/satte & name
 * 
 * https://rapidapi.com/exlphy-zYgj8aRtn4K/api/cutoff-merit-fetcher1/  -- FREE list of colleges 
 */


/*
/**
 * function updateDB(event) {
    event.preventDefault();
    var emailVal = email.value;
    var pwdVal = pwd.value;
    var x = true;

    email.value = "";
    pwd.value = "";

    checkForDuplicates(emailVal).then((check) => {
        if (check) {
            let value = {
                email: emailVal,
                pwd: pwdVal
            };
            db.push(value);
        }
    })
    
}
async function checkForDuplicates(emailParameter) {
   

    db.on('value', (snapshot) => {
        let data = snapshot.val();
        let data_values = Object.values(data);

        console.log(data_values);

        for (let i = 0; i < data_values.length; i++) {
            let email_inDB = data_values[i].email;
            console.log(email_inDB);
            console.log(emailParameter);
            console.log("---------");

            if (email_inDB == emailParameter) {
                console.log("if statement passed");
                alert("Email already in use!");
                return false;
            }
        }

        return true;

    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
    }); 
}


 * 

*/

