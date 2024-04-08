//-------------------------verif nom------------------------------
const nom = document.getElementById("nom");
const divMessageErreur1 = document.getElementById("div_message_erreur1");

nom.addEventListener("input", (event) => {
  if (nom.value.length < 2) {
    divMessageErreur1.textContent ="Votre nom doit comporter au moins 2 caractères !";
    divMessageErreur1.style.color = "red";
    divMessageErreur1.style.fontSize = "10px"
  } else {
    divMessageErreur1.textContent = "";
  }
});

//-------------------------verif prénom------------------------------
const prenom = document.getElementById("prenom");
const divMessageErreur2 = document.getElementById("div_message_erreur2");
prenom.addEventListener("input", (event) => {
  if (prenom.value.length < 2) {
    divMessageErreur2.textContent = "Votre prénom doit comporter au moins 2 caractères !";
    divMessageErreur2.style.color = "red";
    divMessageErreur2.style.fontSize = "10px"

  } else {
    divMessageErreur2.textContent = ""; 
  }
});

//-------------------------verif email------------------------------
const mail = document.getElementById("email");
const divMessageErreur3 = document.getElementById("div_message_erreur3");

mail.addEventListener("input", (event) => {
  const valeur = mail.value.trim(); 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(valeur)) {
    divMessageErreur3.textContent = "Veuillez entrer une email valide !";
    divMessageErreur3.style.color = "red";
    divMessageErreur3.style.fontSize = "10px"
    divMessageErreur3.style.marginLeft = "33%"
  } else if (mail.value.includes("@laplateforme.io")) {
    divMessageErreur3.textContent = ""; 
  }
  else {
    divMessageErreur3.textContent = "Veuillez entrer votre adresse de LaPlateforme";
  }
});

//-------------------------verif confirmation email------------------------------
const divMessageErreur4 = document.getElementById("div_message_erreur4");
function check_email() {
    let input = document.getElementById("email");
    if (input.value != document.getElementById("verifemail").value) {
      divMessageErreur4.textContent = "Vos emails doivent correspondre !";
      divMessageErreur4.style.color = "red";
      divMessageErreur4.style.fontSize = "10px"
      divMessageErreur4.style.marginLeft = "32%"
    } else {
      divMessageErreur4.textContent = ""; 
    }
}

//-------------------------verif mot de passe------------------------------
const mot_de_passe = document.getElementById("mot_de_passe");
const divMessageErreur5 = document.getElementById("div_message_erreur5");

mot_de_passe.addEventListener("input", (event) => {
    if (mot_de_passe.value.length <= 9) {
      divMessageErreur5.textContent = "Votre mot de passe doit comporter au moins 10 caractères !";
      divMessageErreur5.style.color = "red";
      divMessageErreur5.style.fontSize = "10px"
      divMessageErreur4.style.marginRight = "5%"
    } else {
      divMessageErreur5.textContent = ""; 
    }
});

//-------------------------verif confirmation mot de passe------------------------------
const divMessageErreur6 = document.getElementById("div_message_erreur6");
function check_mdp() {
    let input = document.getElementById("mot_de_passe");
    if (input.value != document.getElementById("confirmation_mdp").value) {
      divMessageErreur6.textContent = "Vos mots de passe doivent correspondre !";
      divMessageErreur6.style.color = "red";
      divMessageErreur6.style.fontSize = "10px"
    } else {
      divMessageErreur6.textContent = ""; 
    }
}

//-------------------------montrer/cacher mot de passe------------------------------
let mdp = document.getElementById("mot_de_passe");
let confirmationMdp = document.getElementById("confirmation_mdp");
let checkbox = document.getElementById("checkbox");

checkbox.onclick = function(){
    if (checkbox.checked) {
        mdp.type = "text";
        confirmationMdp.type = "text";
    } else {
        mdp.type = "password";
        confirmationMdp.type = "password";
    }
}
