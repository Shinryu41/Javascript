let accordeons = document.querySelectorAll(".accordeon");

accordeons.forEach(function (item) {
    item.addEventListener("click", function () {
        this.classList.toggle("open");
    });
});

let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Envoi du form detecté !')
})

form.addEventListener('submit', function(event) {
    event.preventDefault()

    let email = document.querySelector("#email")
    
    if(email.value =="") {
        console.log("invalide")
    }   else {
        console.log("valide")
    }
})

if(email.value == '') {
    console.log("invalide")
}   else {
    email.classList.add('success')
}

let errorContainer = document.querySelector('.message-error')
let errorMist = document.querySelector('.message-error ul')

errorList.innerHTML = ""
errorContainer.classList.remove('visible')

let email = document.querySelector('#email')

if(email.value == '') {

    errorContainer.classList.add('visible')
    email.classList.remove('success')

    let err = document.createElement('li')
    err.innerText = "Le champ email ne peut pas être vide"

    errorList.appendChild(err)
}   else {

    email.classList.add('success')
}

let prenom = document.querySelector('#prenom')

if(prenom.value.length < 2) {
    errorContainer.classList.add('visible')
    prenom.classList.remove('success')

    let err = document.createElement('il')
    err.innerText = "Le champ prenom doit contenir au moins 2 caractères"

    errorContainer.appendChild(err)
} else {
    prenom.classList.add('success')
}

let nom = document.querySelector('#nom')

if(nom.value.length < 2) {
    errorContainer.classList.add('visible')
    nom.classList.remove('success')

    let err = document.createElement('il')
    err.innerText = "Le champ nom doit contenir au moins 2 caractères"

    errorContainer.appendChild(err)
} else {
    prenom.classList.add('success')
}

let ville = document.querySelector('#ville')

if(ville.value.length < 2) {
    errorContainer.classList.add('visible')
    ville.classList.remove('success')

    let err = document.createElement('il')
    err.innerText = "Le champ ville doit contenir au moins 2 caractères"

    errorContainer.appendChild(err)
} else {
    ville.classList.add('success')
}

let motdepasse = document.querySelector('#motdepasse')

let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
);

if(motdepasse.value.length < 6 || passCheck.test(motdepasse.value) == false) {

    errorContainer.classList.add('visible')
    motdepasse.classList.remove('success')

    let err = document.createElement('li')
    err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial"

    errorList.appendChild(err)
} else {
    motdepasse.classList.add('success')
}

let passwordInitial = document.querySelector('#motdepasse')
let passwordRepeat = document.querySelector('#motdepasse2')

if(passwordInitial.value != passwordRepeat.value) {
    errorContainer.classList.add('visible')
    passwordRepeat.classList.remove('success')
    
    let err = document.document.createElement('li')
    err.innerText = "Les mots de passes sont différents"
    
    errorList.appendChild(err)
} else {
    passwordRepeat.classList.add('success')
}

let successContainer = document.querySelector('.message-success')
successContainer.classList.remove('visible')

if(
    prenom.classList.contains('success')&&
    nom.classList.contains('success')&&
    email.classList.contains('success')&&
    ville.classList.contains('success')&&
    motdepasse.classList.contains('success')&&
    passwordRepeat.classList.contains('success')
) {
    successContainer.classList.add('visible')
}