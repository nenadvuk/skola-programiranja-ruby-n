const doc = id => document.getElementById(id);

doc('register').addEventListener('click', function () {
    doc('popup-window').style.display = 'block';
    doc('forma').style.display = 'block'

});

doc('close').addEventListener('click', function () {
    doc('popup-window').style.display = 'none'

});

doc('customer-name').addEventListener('blur', function () {

    ime = document.getElementById("customer-name").value;
    if (/^[A-Z ][A-z ]{1,20}$/.test(ime) == false) {
        doc('name-wrong').style.display = 'block'
    } else doc('name-wrong').style.display = 'none';
    //doc("fullName").style.color = "green";
});

doc('e-mail').addEventListener('blur', function () {

    mail = doc("e-mail").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) == false) {
        doc('mail-wrong').style.display = 'block'
    } else doc('mail-wrong').style.display = 'none';
    //doc("enter-mail").style.color = "green";
    doc('submit').style.display = 'block';
});

doc('submit').addEventListener('click', function () {

})

let slika = doc("slika")
let slika1 = doc("slika1")
let slika2 = doc("slika2")

let pic = "";
let stName = "";
let grade = "";


const studentsarray = ['Miloje Pantović', 'Aleksandar Petković', 'Aleksa Kolakovic', 'Petar Luketić', 'Đordje Krstić', 'Predrag Cerović', 'Milena Šutović', 'Marko Andrijević', 'Dragana Ljubojev',
    'Ružica Đukić', 'Nataša Dokić', 'Nenad Knežević', 'Božidar Jovović', 'Katarina Macić', 'Aleksandra Fostikov', 'Jelena Čolević', 'Maja Đorđević', 'Petar Maksimović', 'Dragan Dagović', 'Ana Ćosić',
    'Marijana Kuzmanoski', 'Danijela Vukosavljević', 'Nikola Đurić', 'Aleksandar Kukić', 'Ana Mitrović', 'Bojan Đurišić', 'Igor Ranković', 'Srđan Plavšić', 'Darko Ćosić', 'Dalibor Petrović',
    'Ivana Marković', 'Milan Jovanović', 'Jelena Novaković', 'Marijana Babić', 'Veljko Petrović', 'Dragana Delibašić'
]

const gradeArray = [9.9, 9.9, 9.8, 9.8, 9.7, 9.7, 9.7, 9.7, 9.6, 9.6, 9.6, 9.5, 9.5, 9.4, 9.4, 9.3, 9.3, 9.3, 9.2, 9.2, 9.2, 9.1, 9.1, 9.1, 9.1, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 8.9, 8.8, 8.8,
    8.7, 8.6,

]


for (var index = 1; index <= 36; index++) {
    pic += `img/students/student${index}.jpg \n`;
    stName += ``

}

ar = pic.split(' ')
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

    if (j >= ar.length)
        j = 1;

    slika1.src = ar[j]

    if (z >= ar.length)
        z = 2;
    slika2.src = ar[z]

}

setInterval(promeniSliku, 5000);


class Buyer {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}



buyerArr = [];


doc('submit').addEventListener('click', function () {
    console.log('ok')
    const name = doc('customer-name').value;
    const email = doc('e-mail').value;
    const age = doc('age').value;
    buyerArr.push(new Buyer(name, email, age))

    console.log(buyerArr)
});




/* localStorage.setItem('name',JSON.stringify(name));
localStorage.setItem('genre',JSON.stringify(genre));
localStorage.setItem('author',JSON.stringify(author));

buyerArr = [] */