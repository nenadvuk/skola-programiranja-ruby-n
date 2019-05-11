const doc = id => document.getElementById(id);

var inputMail = false;
var inputPassword = false;
var buying = false;

doc("register").addEventListener("click", function () {
    doc("popup-window").style.display = "block";
    doc("forma").style.display = "block";

});

doc("close").addEventListener("click", function () {
    doc("popup-window").style.display = "none";
    doc("myForm").reset();
    doc("mail-wrong").style.display = "none"
    doc("password-wrong").style.display = "none"
    doc("password-nomatch").style.display = "none"
    doc("success").style.display = "none"
    doc("enter-mail").style.color = "red";
    doc("lozinka").style.color = "red";
});


doc("e-mail").addEventListener("blur", function () {
    mail = doc("e-mail").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        doc("mail-wrong").style.display = "none";
        doc("enter-mail").style.color = "green";


    } else doc("mail-wrong").style.display = "block";


});

doc("lozinka").addEventListener("blur", function () {
    password = doc("lozinka").value;
    if (/^(?=.*\d)(?=.*[a-zA-Z]).{8,25}$/.test(password)) {
        doc("password-wrong").style.display = "none";
        doc("enter-password").style.color = "green";
        inputMail = true;

    } else doc("password-wrong").style.display = "block";

});

doc("ponovi-lozinku").addEventListener("blur", function () {
    password = doc("lozinka").value;
    retypePassword = doc("ponovi-lozinku").value;
    if (retypePassword === password) {
        doc("password-nomatch").style.display = "none";
        doc("re-enter-password").style.color = "green";
        inputPassword = true;
    } else doc("password-nomatch").style.display = "block";

});

class Buyer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const buyerArr = [];

doc("submit").addEventListener("click", function () {
    const name = doc("customer-name").value;
    const email = doc("e-mail").value;
    if (name === "" || email === "") {
        document.querySelector(".welcome-box").style.display = "none";
    } else document.querySelector(".welcome-box").style.display = "block";
    if (inputMail === true && inputPassword === true) {
        doc("success").style.display = "block"
    }
    doc("greeting").innerHTML = name;
    buyerArr.push(new Buyer(name, email))
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
});

const price1 = "499€";
const price2 = "499€";
const price3 = "399€";
const price4 = "349€";
const price5 = "379€";
const price6 = "329€";

const buyBtn = document.querySelectorAll(".btn-buy");

for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].onclick = function () {
        if (inputMail !== true && inputPassword !== true) {
            alert("Morate se prvo registrovati")
        } else alert ("Ok")
    } 
}




let slika = doc("slika")
let slika1 = doc("slika1")
let slika2 = doc("slika2")

let pic = "";
let stName = doc("student-name");
let grade = doc("avGrade");
let stName1 = doc("student-name1");
let grade1 = doc("avGrade1");
let stName2 = doc("student-name2");
let grade2 = doc("avGrade2");
let newStName = "";
let newStName1 = "";
let newStName2 = "";
let newGrade = "";
let newGrade1 = "";
let newGrade2 = "";

const studentsarray = ["Ivana Marić", "Ivan Perić", "Aleksa Jokić",
    "Petar Lukić", "Đordje Krstić", "Peđa Cerović", "Milena Šutović",
    "Marko Andrić", "Dragana Lukić", "Ružica Đukić", "Nataša Dokić",
    "Nenad Knežević", "Boris Jovović", "Jelena Macić", "Ana Ćolić",
    "Jelena Čolević", "Maja Đorđević", "Petar Maksić", "Dragan Dabić",
    "Ana Ćosić", "Maja Kuzmić", "Danijela Vlajić", "Nikola Đurić",
    "Saša Kukić", "Ana Mitrović", "Bojan Đurišić", "Igor Ranković",
    "Srđan Plavšić", "Darko Ćosić", "Marko Popović", "Miloje Panić",
    "Milan Jović", "Jelena Ivić", "Marija Babić", "Veljko Petrić",
    "Maja Veličić"

]

const gradeArray = [9.9, 9.9, 9.8, 9.8, 9.7, 9.7, 9.7, 9.7,
    9.6, 9.6, 9.6, 9.5, 9.5, 9.4, 9.4, 9.3, 9.3, 9.3, 9.2,
    9.2, 9.2, 9.1, 9.1, 9.1, 9.1, 9.0, 9.0, 9.0, 9.0, 9.0,
    9.0, 8.9, 8.8, 8.8, 8.7, 8.6,

]

for (var index = 1; index <= 36; index++) {
    pic += `img/students/student${index}.jpg \n`;

}

ar = pic.split(" ")
ar.pop()

let i = 0
let j = 1
let z = 2

function promeniSliku() {
    i += 3
    j = i + 1
    z = i + 2

    if (i >= ar.length)
        i = 0;
    slika.src = ar[i]
    newStName = studentsarray[i];
    stName.innerHTML = newStName;
    newGrade = gradeArray[i]
    grade.innerHTML = newGrade;

    if (j >= ar.length)
        j = 1;

    slika1.src = ar[j]
    newStName1 = studentsarray[j];
    stName1.innerHTML = newStName1;
    newGrade1 = gradeArray[j]
    grade1.innerHTML = newGrade1;

    if (z >= ar.length)
        z = 2;
    slika2.src = ar[z];
    newStName2 = studentsarray[z];
    stName2.innerHTML = newStName2;
    newGrade2 = gradeArray[z]
    grade2.innerHTML = newGrade2;

}

setInterval(promeniSliku, 5000);


/* doc("test2").addEventListener("click", function() {
    doc("test").style.transform= "scale(170)";
    console.log("ooook")
})
document.querySelector(".test1").addEventListener("click", function() {
    doc("test").style.transform= "scale(0)";
    console.log("ok")
}); */


