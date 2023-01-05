var subVis = document.getElementById("userSub");
var Profvis = document.getElementById("userProf");
Profvis.style.display = "none";
var userAge;
var ageGroup;
var userGender;

//gets input from user or age and gender, seperates age into different age groups
function subInput() {
    userAge = document.getElementById("num").value;
    userGender = document.getElementById("profile-gender").value;
    if (userAge < 3) {
        ageGroup = "infant"
    } else if (userAge < 13) {
        ageGroup = "child"
    } else if (userAge < 20) {
        ageGroup = "teenager"
    } else if (userAge < 60) {
        ageGroup = "adult"
    } else {
        ageGroup = "old"
    }

    document.getElementById("profileAge").innerHTML = userAge;

    console.log(userAge);
    console.log(userGender);
    console.log(ageGroup);
}

// gets input, saves the input to local storage, seperates into age groups.
function saveInput() {
    userAge = document.getElementById("num").value;
    userGender = document.getElementById("profile-gender").value;
    document.getElementById("profileAge").innerHTML = userAge;
    if (userAge < 3) {
        ageGroup = "infant"
    } else if (userAge < 13) {
        ageGroup = "child"
    } else if (userAge < 20) {
        ageGroup = "teenager"
    } else if (userAge < 60) {
        ageGroup = "adult"
    } else {
        ageGroup = "old"
    }

    console.log(userAge);
    console.log(userGender);
    console.log(ageGroup);
    localStorage.setItem("saveAge", userAge);
    localStorage.setItem("saveAgeGroup", ageGroup);
    localStorage.setItem("saveGender", userGender);
}

// gets the saved data from local storage and sets it as the input
function storageOutput() {
    userAge = localStorage.getItem("saveAge");
    ageGroup = localStorage.getItem("saveAgeGroup");
    userGender = localStorage.getItem("saveGender");
    console.log(userAge);
    console.log(userGender);
    console.log(ageGroup);
    document.getElementById("profileAge").innerHTML = userAge;
}





//generates the image from api based on agegroup and generder
let image = document.getElementById("image");
const api_url = 'https://api.unsplash.com/photos/random?query=portrait&client_id=DSpfugB7jcZWFimvHwybAWNR4XWCkIlZeR8PXrx6u2c'

async function getImg() {

    const api_url =
        "https://api.unsplash.com/photos/random?query=" +
        ageGroup +
        " " +
        userGender +
        " portrait&client_id=DSpfugB7jcZWFimvHwybAWNR4XWCkIlZeR8PXrx6u2c";
    const response = await fetch(api_url);
    let data = await response.json();
    console.log(data);

    const userImg = document.getElementById('image');
    userImg.setAttribute('src', data.urls.small)

}


//generates the last name
let name = document.getElementById('name');
const name_api = "https://randommer.io/api/Name?nameType=surname&quantity=1"

async function getName() {




    const response = await fetch(name_api, {
        method: 'GET',
        headers: {
            'X-API-KEY': '814385c0d6d24bf082d8bd56e39eff9b'
        }
    });
    let data = await response.json();
    console.log(data);

    const userName = document.getElementById('profileName');
    userName.innerHTML = data;




}


//generats the first name based on gender
let name1 = document.getElementById('name1');

async function getName1() {
    let nameF_api = "https://api.api-ninjas.com/v1/babynames?gender=girl"
    let nameM_api = "https://api.api-ninjas.com/v1/babynames?gender=boy"
    userGender = document.getElementById("profile-gender").value;

    if (userGender == 'Male') {


        const response = await fetch(nameM_api, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'zUbmPIOiCjjhkg4oPwvGgg==UtuZLiRTBl1bNcQo'
            }
        });
        let data = await response.json();
        console.log(data[4]);

        const userName1 = document.getElementById('profileName1');
        userName1.innerHTML = data[4];

    }
    else {
        const response = await fetch(nameF_api, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'zUbmPIOiCjjhkg4oPwvGgg==UtuZLiRTBl1bNcQo'
            }
        });
        let data = await response.json();
        console.log(data[4]);

        const userName1 = document.getElementById('profileName1');
        userName1.innerHTML = data[4];

    }




}

//switches from the profile creaton screen to the profile screen and back
function switchScreen() {
    if (subVis.style.display === "none") {
        subVis.style.display = "block";
    } else {
        subVis.style.display = "none";
    }

    if (Profvis.style.display === "none") {
        Profvis.style.display = "block";
    } else {
        Profvis.style.display = "none";
    }
}