const elements = {
    displayScore: null,
    displayIncrement: null,
}

// Lier les elements aux id
elements.displayScore = document.querySelector('#score');
elements.displayIncrement = document.querySelector('#clickVal');
let entree = document.getElementById("entree");

// Affiche le bouton Score
let score = 0;

// variables de prix d'incrémentation
let increment = 1;
let prixHtml = 5;
let prixJs = 250;
let prixPhp = 1300;
let prixC = 7000;
let prixJava = 40000;
let prixKotlin = 220000;
let prixPython = 1200000;
let prixRuby = 6600000;

// variables de prix d'auto-clics
let prixFront = 10000;
let prixBack = 25000;
let prixFull = 100000;
let prixSenior = 250000;
let prixDev = 500000;

elements.displayScore.innerHTML = score;
elements.displayIncrement.innerHTML =  increment;

// On affiche les prix à l'emplacement correct
let displayPrixHtml = document.getElementById("HTML");
displayPrixHtml.innerHTML= displayPrixHtml.value+ " " + prixHtml;

let displayPrixJs = document.getElementById("JavaScript");
displayPrixJs.innerHTML = displayPrixJs.value + " " + prixJs;

let displayPrixPhp = document.getElementById("PHP");
displayPrixPhp.innerHTML = displayPrixPhp.value + " " + prixPhp;

let displayPrixC = document.getElementById("C");
displayPrixC.innerHTML = displayPrixC.value + " " + prixC;

let displayPrixJava = document.getElementById("Java");
displayPrixJava.innerHTML = displayPrixJava.value + " " + prixJava;

let displayPrixKotlin = document.getElementById("Kotlin");
displayPrixKotlin.innerHTML = displayPrixKotlin.value + " " + prixKotlin;

let displayPrixPython = document.getElementById("Python");
displayPrixPython.innerHTML = displayPrixPython.value + " " + prixPython;

let displayPrixRuby = document.getElementById("Ruby");
displayPrixRuby.innerHTML = displayPrixRuby.value + " " + prixRuby;

let displayPrixFront = document.getElementById("FrontEnd");
displayPrixFront.innerHTML = displayPrixFront.value + " " + prixFront;

let displayPrixBack = document.getElementById("BackEnd");
displayPrixBack.innerHTML = displayPrixBack.value + " " + prixBack;

let displayPrixFull = document.getElementById("FullStack");
displayPrixFull.innerHTML = displayPrixFull.value + " " + prixFull;

let displayPrixSenior = document.getElementById("Senior");
displayPrixSenior.innerHTML = displayPrixSenior.value + " " + prixSenior;

let displayPrixDev = document.getElementById("devMan");
displayPrixDev.innerHTML = displayPrixDev.value + " " + prixDev;

// Fonction qui incrémente le score quand tu cliques + affichage du score.
function incrementScore()
{   
    score = score + increment;

    //modification opacité des boutons 
    if (score >= prixHtml){
        document.getElementById("HTML").style.backgroundColor = "#0bda51";
        document.getElementById("HTML").style.opacity = "1";
    }
  
    if (  score >= prixJs ){
        document.getElementById("JavaScript").style.backgroundColor = "#0bda51"
        document.getElementById("JavaScript").style.opacity = "1";
    }
    
    if ( score>=prixPhp ){
        document.getElementById("PHP").style.backgroundColor = "#0bda51";
        document.getElementById("PHP").style.opacity = "1";
    }

    if ( score>=prixC ){
        document.getElementById("C").style.backgroundColor = "#0bda51";
        document.getElementById("C").style.opacity = "1";
    }

    if ( score >= prixJava ) {
        document.getElementById("Java").style.backgroundColor = "#009000";
        document.getElementById("Java").style.opacity = "1"
    }

    if ( score>=prixKotlin ){
        document.getElementById("Kotlin").style.backgroundColor = "#009000";
        document.getElementById("Kotlin").style.opacity = "1";
    }

    if ( score>=prixPython ) {
        document.getElementById("Python").style.backgroundColor = "#009000";
        document.getElementById("Python").style.opacity = "1";
    }
   
    if (score>=prixRuby  ) {
        document.getElementById("Ruby").style.backgroundColor ="#009000"
        document.getElementById("Ruby").style.opacity = "1"
    }
    return elements.displayScore.innerHTML = score;
}

// Variables incrémentation pour les items
let incrementHtml = 1;
let incrementJs = 1;
let incrementPhp = 1;
let incrementC = 1;
let incrementJava = 1;
let incrementPython = 1;
let incrementRuby = 1;
let incrementKotlin = 1;

// Bouton d'upgrade le clic sur le bouton "enter" passe à +2/+3/etc
let prix;
let augmentation;
let couleur;
let langage;
let incrementLangage;

function incrementer() { 
    if(score >= prix && timeOver == 0){
    increment = increment + incrementLangage; 
    score = score - prix;
    prix = prix + augmentation;
    }}

let DanteSays = document.querySelector('.dante');
var DanteSayItOneTimeHtml = 0;

function upgradeHtml() {
    if (score >= 5 && DanteSayItOneTimeHtml === 0){
    danteSay.classList.toggle("show");
    DanteSayItOneTimeHtml++;
    setTimeout(function() {
        danteSay.classList.toggle("show");
      }, 5000);}
    prix = prixHtml, couleur = "#F0A40C", langage = "HTML", augmentation = 50, incrementLangage = incrementHtml;
    incrementer(); 
    prixHtml = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML =  increment, displayPrixHtml.innerHTML = "HTML/CSS " + prixHtml;
    }

function upgradeJs() {
    prix = prixJs, couleur = "#F4C100", langage = "JavaScript", augmentation = 250, incrementLangage = incrementJs;
    incrementer();
    prixJs = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML =  increment, displayPrixJs.innerHTML = "JavaScript" + " " + prixJs;
}

function upgradePhp() {
    prix = prixPhp, couleur = "#F0A40C", langage = "PHP", augmentation = 1300, incrementLangage = incrementPhp;
    incrementer();
    prixPhp = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML =  increment, displayPrixPhp.innerHTML = "PHP" + " " + prixPhp;
    }

function upgradeC() {
    prix = prixC, couleur = "#F0980C", langage = "C", augmentation = 7000, incrementLangage = incrementC;
    incrementer();
    prixC = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML =  increment, displayPrixC.innerHTML = "C" + " " + prixC;
    }

function upgradeJava() {
    prix = prixJava, couleur = "#D96900", langage = "Java", augmentation = 40000, incrementLangage = incrementJava;
    incrementer();
    prixJava = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML =  increment, displayPrixJava.innerHTML = "Java" + " " + prixJava;
    } 

function upgradeKotlin() {
    prix = prixKotlin, couleur = "#F5630F", langage = "Kotlin", augmentation = 220000, incrementLangage = incrementKotlin;
    incrementer();
    prixKotlin = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML =  increment, displayPrixKotlin.value = "Kotlin" + " " + prixKotlin;
    }

function upgradePython() {
    prix = prixPython, couleur = "#F0490C", langage = "Python", augmentation = 1200000, incrementLangage = incrementPython;
    incrementer();
    prixPython = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML =  increment, displayPrixPython.innerHTML = "Python" + " " + prixPython;
    }
     

function upgradeRuby() {
    prix = prixRuby, couleur = "#EB371F", langage = "Ruby", augmentation = 660000, incrementLangage = incrementRuby;
    incrementer();
    prixRuby = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML =  increment, displayPrixRuby.innerHTML = "Ruby" + " " + prixRuby;
    }  

// variables de durée pour touche café
var refreshTime = 5;
var timeOver = 0;
var actif = 0;

// Le temps de refresh pour le bouton Café
function timeRefreshCafe(){

    if (refreshTime > 0){
    refreshTime--;
    }
console.log(refreshTime);
}
const intervalRefresh = setInterval(timeRefreshCafe, 1000);

// Fonction qui contrôle le bouton café
function boostCafe() {
    if (refreshTime == 0 || timeOver > 0){
        if (refreshTime == 0 && timeOver == 0){
            timeOver = 30;}
    function timeActiveCafe(){
        if (timeOver > 0){
        timeOver--;
        return document.getElementById("boostCafe").innerHTML ="boost " + timeOver;
        }
        else if (timeOver == 0){
        clearInterval(intervalOver);
        increment = increment / 2;
        actif--
        timeRefreshCafe();
        return elements.displayIncrement.innerHTML =  increment;
        }
    console.log(timeOver);
    }
    const intervalOver = setInterval(timeActiveCafe, 1000);
    if(refreshTime == 0 && timeOver > 0 && actif == 0){
    increment = increment * 2; 
    refreshTime = 5;
    actif++;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML =  increment;
    }
    }
    else{
       return document.getElementById("boostCafe").innerHTML ="boost " + refreshTime;
    }
}

 //Fonctions auto-clics (Colonnes de gauche)
var intervalAutoFront = 0;
var incrementAutoFront = 1;

var intervalAutoBack = 0;
var incrementAutoBack = 1;

var intervalAutoFull = 0;
var incrementAutoFull = 1;

var intervalAutoSenior = 0;
var incrementAutoSenior = 1;

var intervalAutoDev = 0;
var incrementAutoDev = 1;

function autoFront() {
    if (intervalAutoFront == 0 && score >= prixFront){
    score = score - prixFront;
    intervalAutoFront++;
    const intervalEntree = setInterval(autoFront, 1000);
    return elements.displayScore.innerHTML = score, displayPrixFront.innerHTML = "You hired a Frontend";
}
    else if (intervalAutoFront == 1){
        score = score + incrementAutoFront;
        return elements.displayScore.innerHTML = score, displayPrixFront.innerHTML = "You hired a Frontend";
        }
}
function autoBack() {
 if (intervalAutoBack == 0 && score >= prixBack){
    score = score - prixBack;
    intervalAutoBack++;
    const intervalEntree = setInterval(autoBack, 1000);
    return elements.displayScore.innerHTML = score, displayPrixBack.innerHTML = "You hired a Backend";
}
    else if (intervalAutoBack == 1 && score >= prixBack){
        score = score + incrementAutoBack;
        return elements.displayScore.innerHTML = score, displayPrixBack.innerHTML = "You hired a Backend";
        }
}
function autoFull() {
 if (intervalAutoFull == 0 && score >= prixFull){
    score = score - prixFull;
    intervalAutoFull++;
    const intervalEntree = setInterval(autoFull, 1000);
    return elements.displayScore.innerHTML = score, displayPrixFull.innerHTML = "You hired a FullStack";
}
    else if (intervalAutoFull == 1 && score >= prixFull){
        score = score + incrementAutoFull;
        return elements.displayScore.innerHTML = score, displayPrixFull.innerHTML = "You hired a FullStack";
        }
}
function autoSenior() {
    if (intervalAutoSenior == 0 && score >= prixSenior){
    score = score - prixSenior;
    intervalAutoSenior++;
    const intervalEntree = setInterval(autoSenior, 1000);
    return elements.displayScore.innerHTML = score, displayPrixSenior.innerHTML = "You hired a Senior Dev";
}
    else if (intervalAutoSenior == 1 && score >= prixSenior){
        score = score + incrementAutoSenior;
        return elements.displayScore.innerHTML = score, displayPrixSenior.innerHTML = "You hired a Senior Dev";
        }
}
function autoDev() {
    if (intervalAutoDev == 0 && score >= prixDev){
        score = score - prixDev;
        intervalAutoDev++;
        const intervalEntree = setInterval(autoDev, 1000);
        return elements.displayScore.innerHTML = score, displayPrixDev.innerHTML = "You hired a Dev Manager";
    }
        else if (intervalAutoDev == 1 && score >= prixDev){
            score = score + incrementAutoDev;
            return elements.displayScore.innerHTML = score, displayPrixDev.innerHTML = "You hired a Dev Manager";
            }
    }

    // Les items / Les multiplicateurs
let prixMultiHtml = 1;
let prixMultiJs = 1;
let prixMultiPHP = 1;
let prixMultiC = 1;
let prixMultiJava = 1;
let prixMultiKotlin = 1;
let prixMultiPython = 1;
let prixMultiRuby = 1;

function multiHtml() {
    if(score >= prixMultiHtml){
    incrementAutoFront = incrementAutoFront * 2; 
    score = score - prixMultiHtml;
    prixMultiHtml = prixMultiHtml + 50;
    document.getElementById("iconHTml").style.opacity = "0.5";
    return elements.displayScore.innerHTML = score;
    }
}

function multiJs() {
    if(score >= prixMultiJs){
        alert("Félicitations ! Vous êtes en burn out !")
        score = score - prixMultiJs;
        prixMultiJs = prixMultiJs + 50;
        document.getElementById("iconJs").style.opacity = "0.5";
        return elements.displayScore.innerHTML = score;
        }
}

function multiPHP() {
    //multipliers(prixMultiPHP, incrementAutoBack, 50, "iconPHP")
    if(score >= prixMultiPHP){
    incrementAutoBack = incrementAutoBack * 2; 
    score = score - prixMultiPHP;
    prixMultiPHP = prixMultiPHP + 50;
    document.getElementById("iconPHP").style.opacity = "0.5";
    return elements.displayScore.innerHTML = score;
    }}

function multiC() {
    if(score >= prixMultiC){
        incrementC = incrementC * 2; 
        score = score - prixMultiC;
        prixMultiC = prixMultiC + 50;
        document.getElementById("iconC").style.opacity = "0.5";
        return elements.displayScore.innerHTML = score;
        }}

function multiKotlin() {
    if(score >= prixMultiKotlin){
        incrementAutoSenior = incrementAutoSenior * 2; 
        score = score - prixMultiKotlin;
        prixMultiKotlin = prixMultiKotlin + 50;
        document.getElementById("iconKotlin").style.opacity = "0.5";
        return elements.displayScore.innerHTML = score;
        }}

function multiJava() {
    if(score >= prixMultiJava){
        incrementAutoFull = incrementAutoFull * 2; 
        score = score - prixMultiHtml;
        prixMultiHtml = prixMultiHtml + 50;
        document.getElementById("iconJava").style.opacity = "0.5";
        return elements.displayScore.innerHTML = score;
        }}

function multiPython() {
    if(score >= prixMultiPython){
        incrementAutoBack = incrementAutoBack * 2; 
        score = score - prixMultiPython;
        prixMultiPython = prixMultiPython + 50;
        document.getElementById("iconPython").style.opacity = "0.5";
        return elements.displayScore.innerHTML = score;
        }}

function multiRuby() {
    if(score >= prixMultiRuby){
        incrementAutoDev = incrementAutoDev * 2; 
        score = score - prixMultiRuby;
        prixMultiRuby = prixMultiRuby + 50;
        document.getElementById("iconRuby").style.opacity = "0.5";
        return elements.displayScore.innerHTML = score;
        }}
    
//Popups au survol
let iconeHtml = document.querySelector('#iconHTml');
let iconeJs = document.querySelector('#iconJS');
let iconePhp = document.querySelector('#iconPHP');
let iconeC = document.querySelector('#iconC');
let iconeJava = document.querySelector('#iconJava');
let iconeKotlin = document.querySelector('#iconKotlin');
let iconePython = document.querySelector('#iconPython');
let iconeRuby = document.querySelector('#iconRuby');

iconeHtml.addEventListener("mouseover", function() {
    tutoHtml.classList.toggle("show");
    setTimeout(function() {
      tutoHtml.classList.toggle("show");
    }, 3500);
  }, false);

iconeJs.addEventListener("mouseover", function() {
    tutoJs.classList.toggle("show");
    setTimeout(function() {
      tutoJs.classList.toggle("show");
    }, 3500);
  }, false);

  iconePhp.addEventListener("mouseover", function() {
    tutoPHP.classList.toggle("show");
    setTimeout(function() {
      tutoPHP.classList.toggle("show");
    }, 3500);
  }, false);

  iconeC.addEventListener("mouseover", function() {
    tutoC.classList.toggle("show");
    setTimeout(function() {
      tutoC.classList.toggle("show");
    }, 3500);
  }, false);


iconeJava.addEventListener("mouseover", function() {
    tutoJava.classList.toggle("show");
    setTimeout(function() {
      tutoJava.classList.toggle("show");
    }, 3500);
  }, false);

  iconeKotlin.addEventListener("mouseover", function() {
    tutoKotlin.classList.toggle("show");
    setTimeout(function() {
      tutoKotlin.classList.toggle("show");
    }, 3500);
  }, false);

  iconePython.addEventListener("mouseover", function() {
    tutoPython.classList.toggle("show");
    setTimeout(function() {
      tutoPython.classList.toggle("show");
    }, 3500);
  }, false);

  iconeRuby.addEventListener("mouseover", function() {
    tutoRuby.classList.toggle("show");
    setTimeout(function() {
      tutoRuby.classList.toggle("show");
    }, 3500);
  }, false);