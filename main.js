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
    doc("fullName").style.color = "green";



});

doc('e-mail').addEventListener('blur', function () {

    mail = doc("e-mail").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) == false) {
        doc('mail-wrong').style.display = 'block'
    } else doc('mail-wrong').style.display = 'none';
    doc("enter-mail").style.color = "green"
});

doc('submit').addEventListener('click', function () {
    
})

let slika = doc("slika")
let slika1 = doc("slika1")
let slika2 = doc("slika2")

let pic = ""

for (var index = 1; index <= 36; index++) {
    pic += `img/students/student${index}.jpg \n`

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

setInterval(promeniSliku, 2000)