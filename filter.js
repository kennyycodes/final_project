

let button = document.getElementById("btn");
let results = document.getElementById("results");
let select = document.getElementById("stateDropdown");
let majorSelect = document.getElementById("major");
// let backButton = docu
//hard code top 20 universities for each major

let priorityEngineering = ["MASSACHUSETTS INSTITUTE OF TECHNOLOGY", "RICE UNIVERSITY",
    "STANFORD UNIVERSITY", "CALIFORNIA INSTITUTE OF TECHNOLOGY", "PRINCETON UNIVERSITY",
    "GEORGIA INSTITUTE OF TECHNOLOGY", "HARVARD UNIVERSITY", "YALE UNIVERSITY", "VANDERBILT UNIVERSITY",
    "COLUMBIA UNIVERSITY", "JOHN HOPKINS UNIVERSITY", "DUKE UNIVERSITY", "WASHINGTON UNIVERSITY", "UNIVERSITY OF PENNSYLVANIA",
    "CARNEGIE MELLON UNIVERSITY", "CORNELL UNIVERSITY", "UNIVERSITY OF MICHIGAN - ANN ARBOR",
    "NORTHWESTERN UNIVERSITY", "DARTMOUTH COLLEGE", "UNIVERSITY OF SOUTHERN CALIFORNIA"];

let priorityCS = ["MASSACHUSETTS INSTITUTE OF TECHNOLOGY", "STANFORD UNIVERSITY", "CALIFORNIA INSTITUTE OF TECHNOLOGY",
    "CARNEGIE MELLON UNIVERSITY", "PRINCETON UNIVERSITY", "GEORGIA INSTITUTE OF TECHNOLOGY", "HARVARD UNIVERSITY",
    "COLUMBIA UNIVERSITY", "DUKE UNIVERSITY", "YALE UNIVERSITY", "RICE UNIVERSITY", "BROWN UNIVERSITY",
    "UNIVERSITY OF MICHIGAN-ANN ARBOR", "HARVEY MUDD COLLEGE", "CORNELL UNIVERSITY", "UNIVERSITY OF PENNSYLVANIA",
    "DARTMOUTH COLLEGE", "UNIVERSITY OF SOUTHERN CALIFORNIA", "JOHNS HOPKINS UNIVERSITY", "UNIVERSITY OF CHICAGO"];

let priorityLaw = ["VANDERBILT UNIVERSITY", "NORTHWESTERN UNIVERSITY", "TULANE UNIVERSITY", "UNIVERSITY OF MIAMI", "AMHERST COLLEGE",
    "UNIVERSITY OF RICHMOND", "UNIVERSITY OF WASHINGTON", "UNIVERSITY OF CALIFORNIA-BERKELEY", "AMERICAN UNIVERSITY",
    "UNIVERSITY OF WISCONSIN", "WEST POINT", "SCRIPPS COLLEGE", "PENN STATE", "LIBERTY UNIVERSITY", "NOVA SOUTHEASTERN UNIVERSITY", "UNIVERSITY OF PITTSBURGH",
    "COLLEGE OF SAINT MARY", "MISSISSIPPI COLLEGE", "DRAKE UNIVERSITY", "LOYOLA UNIVERSITY CHICAGO"];

let priorityBusiness = ["UNIVERSITY OF PENNSYLVANIA", "UNIVERSITY OF SOUTHERN CALIFORNIA", "MASSACHUSETTS INSTITUTE OF TECHNOLOGY",
    "GEORGETOWN UNIVERSITY", "WASHINGTON UNIVERSITY", "RICE UNIVERSITY", "CORNELL UNIVERSITY", "UNIVERSITY OF MICHIGAN-ANN ARBOR",
    "UNIVERSITY OF TEXAS - AUSTIN", "NORTHEASTERN UNIVERSITY", "WASHINGTON AND LEE UNIVERSITY", "COLUMBIA UNIVERSITY",
    "NORTHWESTERN UNIVERSITY", "UNIVERSITY OF FLORIDA", "BABSON COLLEGE", "NEW YORK UNIVERSITY", "UNIVERSITY OF NOTRE DAME",
    "UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL", "UNIVERSITY OF GEORGIA", "WAKE FOREST UNIVERSITY"];

let priorityMedical = ["BROWN UNIVERSITY", "NORTHWESTERN UNIVERSITY", "UNIVERSITY OF CHICAGO", "GEORGETOWN UNIVERSITY", "UNIVERSITY OF NOTRE DAME",
    "JOHNS HOPKINS UNIVERSITY", "BOSTON UNIVERSITY", "LEHIGH UNIVERSITY", "PENN STATE", "UNIVERSITY OF MARYLAND - COLLEGE PARK",
    "CLEMSON UNIVERSITY", "RENSSELAER POLYTECHNIC INSTITUTE", "OKLAHOMA STATE UNIVERSITY", "UNIVERSITY OF UTAH", "ARIZONA STATE UNIVERSITY",
    "UNIVERSITY OF CINCINNATI", "UNIVERSITY OF DAYTON", "UNIVERSITY OF ARKANSAS", "BAYLOR UNIVERSITY", "FRANCISCAN MISSIONARIES OF OUR LADY UNIVERSITY"];


url = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-colleges-and-universities&q=&rows=6559&facet=city&facet=state"


let arr = [];
let emptyArr = [];
const priorityArr = [];
let anotherARRAY = [];


let college1 = document.createElement("h2");
let college2 = document.createElement("h2");
let college3 = document.createElement("h2");
let college4 = document.createElement("h2");
let college5 = document.createElement("h2");

button.onclick = function (event) {
    event.preventDefault();
    let state = select.value;
    let major = majorSelect.value;

    emptyArr = [];
    //priorityArr = []; // why u no work :(
    priorityArr.length = 0;


    anotherARRAY = [];
    anotherARRAY.length = 0;

    arr.length =0;

    //bro everything is breaking for me
    //idk if i can present yea lemme do that
    
    //we need you here om

    college1.innerHTML = "";
    college2.innerHTML = "";
    college3.innerHTML = "";
    college4.innerHTML = "";
    college5.innerHTML = "";
    console.log(state);
    console.log(major);
    console.log("--------------------");

    // priorityArr has values stored in it even tho it was declared as empty ????????????
    console.log(priorityArr);
    console.log(anotherARRAY);

    //go to api
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {


            let data = myJson.records;
            //check each college in api and add the colleges with the same state to an array
            for (let i = 0; i < data.length; i++) {
                let stateInAPI = data[i].fields.state;
                if (state == stateInAPI) {
                    arr.push(data[i].fields.name);
                }
            }

            //Check major and use the corresponding array
            if (major == "Engineering") {
                emptyArr = [...priorityEngineering];
            } else if (major == "Medical") {
                emptyArr = [...priorityMedical];
            } else if (major == "Law") {
                emptyArr = [...priorityLaw];
            } else if (major == "CS") {
                emptyArr = [...priorityCS];
            } else if (major == "Business") {
                emptyArr = [...priorityBusiness];
            }


            console.log(priorityArr);
            console.log(anotherARRAY);
            console.log("--------------------");
            //check if colleges in arr are in the priorityArr and put them into a array
            for (let i = 0; i < arr.length; i++) {
                let college = arr[i];
                for (let j = 0; j < emptyArr.length; j++) {


                    let priorityCollege = emptyArr[j];

                    if (college == priorityCollege) {
                        priorityArr.push(college);
                    }
                }
            }



            //creates the college elements

            console.log(priorityArr);
            console.log(anotherARRAY);
            console.log("--------------------");

            //sets the inner html of each college element to our selected colleges
            if (priorityArr.length >= 5) {

                college1.innerHTML = priorityArr[0];
                college2.innerHTML = priorityArr[1];
                college3.innerHTML = priorityArr[2];
                college4.innerHTML = priorityArr[3];
                college5.innerHTML = priorityArr[4];
            } else {

                let x = 5 - priorityArr.length;
                anotherARRAY = [...priorityArr];
                for (let i = 0; i < x; i++) {
                    let random = Math.floor(Math.random() * arr.length);
                    let valueXYZ = arr[random];

                    let pass = true;
                    for (let j = 0; j < anotherARRAY.length; j++) {
                        if (valueXYZ == anotherARRAY[j]) {
                            pass = false;
                            break;
                        }
                    }
                    if (pass) {

                        anotherARRAY.push(valueXYZ);
                    } else {
                        i--;
                    }

                    console.log(anotherARRAY);
                    console.log("--------------------");
                }

                console.log(priorityArr);
                console.log(anotherARRAY);
                console.log("--------------------");
                
                console.log(priorityArr);
                console.log(anotherARRAY);
                console.log("--------------------");
                college1.innerHTML = anotherARRAY[0];
                college2.innerHTML = anotherARRAY[1];
                college3.innerHTML = anotherARRAY[2];
                college4.innerHTML = anotherARRAY[3];
                college5.innerHTML = anotherARRAY[4];
            }



            results.appendChild(college1);
            results.appendChild(college2);
            results.appendChild(college3);
            results.appendChild(college4);
            results.appendChild(college5);

        });
}

