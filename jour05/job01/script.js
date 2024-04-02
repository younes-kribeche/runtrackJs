//-------------------------verif nom------------------------------
const nom = document.getElementById("nom");
const divMessageErreur1 = document.getElementById("div_message_erreur1");
divMessageErreur1.textContent = "";
nom.addEventListener("input", (event) => {
  if (nom.value.length <= 2) {
    divMessageErreur1.textContent ="Votre nom doit comporter au moins 2 caractères !";
    divMessageErreur1.style.color = "red";
    divMessageErreur1.style.fontSize = "10px"
    divMessageErreur1.style.marginLeft = "18%"
  } else {
    divMessageErreur1.textContent = "";
  }
});

//-------------------------verif prénom------------------------------
const prenom = document.getElementById("prenom");
const divMessageErreur2 = document.getElementById("div_message_erreur2");
prenom.addEventListener("input", (event) => {
  if (prenom.value.length <= 2) {
    divMessageErreur2.textContent = "Votre prénom doit comporter au moins 2 caractères !";
    divMessageErreur2.style.color = "red";
    divMessageErreur2.style.fontSize = "10px"
    divMessageErreur2.style.marginLeft = "18%"
  } else {
    divMessageErreur2.textContent = ""; 
  }
});


//-------------------------verif email------------------------------
const mail = document.getElementById("mail");
const divMessageErreur3 = document.getElementById("div_message_erreur3");

mail.addEventListener("input", (event) => {
  const valeur = mail.value.trim(); 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(valeur)) {
    divMessageErreur3.textContent = "Veuillez entrer une email valide !";
    divMessageErreur3.style.color = "red";
    divMessageErreur3.style.fontSize = "10px"
    divMessageErreur3.style.marginLeft = "40%"
  } else {
    divMessageErreur3.textContent = ""; 
  }
});

//-------------------------verif adresse------------------------------
const adresse = document.getElementById("adresse");
const divMessageErreur4 = document.getElementById("div_message_erreur4");

adresse.addEventListener("input", (event) => {
  if (adresse.value.length < 5) { 
    divMessageErreur4.textContent = "Votre adresse doit comporter au moins 5 caractères !";
    divMessageErreur4.style.color = "red";
    divMessageErreur4.style.fontSize = "10px"
    divMessageErreur4.style.marginLeft = "18%"
  } else {
    divMessageErreur4.textContent = ""; 
  }
});

//-------------------------verif code postale------------------------------
const code_postale = document.getElementById("code_postale");
const divMessageErreur5 = document.getElementById("div_message_erreur5");

code_postale.addEventListener("input", (event) => {
  if (code_postale.value.length !== 5) { 
    divMessageErreur5.textContent = "Votre code postal doit comporter exactement 5 caractères !";
    divMessageErreur5.style.color = "red";
    divMessageErreur5.style.fontSize = "10px"
    divMessageErreur5.style.marginLeft = "18%"
  } else {
    divMessageErreur5.textContent = ""; 
  }
});

//-------------------------verif mot de passe------------------------------
const mot_de_passe = document.getElementById("mot_de_passe");
const divMessageErreur6 = document.getElementById("div_message_erreur6");

mot_de_passe.addEventListener("input", (event) => {
    if (mot_de_passe.value.length <= 9) {
      divMessageErreur6.textContent = "Votre mot de passe doit comporter au moins 10 caractères !";
      divMessageErreur6.style.color = "red";
      divMessageErreur6.style.fontSize = "10px"
      divMessageErreur6.style.marginLeft = "18%"
    } else {
      divMessageErreur6.textContent = ""; 
    }
  });



//-------------------------verif confirmation mot de passe------------------------------
const divMessageErreur7 = document.getElementById("div_message_erreur7");
function check() {
    let input = document.getElementById("confirmation_mdp");
    if (input.value != document.getElementById("mot_de_passe").value) {
      divMessageErreur7.textContent = "Vos mots de passe doivent correspondre !";
      divMessageErreur7.style.color = "red";
      divMessageErreur7.style.fontSize = "10px"
      divMessageErreur7.style.marginLeft = "18%"
    } else {
      divMessageErreur7.textContent = ""; 
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

