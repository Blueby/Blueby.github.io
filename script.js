// Code goes here

function onLoad() {
  randWord();
  creditLoad();
}

var wordChoice;
var wordSelect = "FUCK";
var result = "FUCK";

function wordCheck() {
  result = document.getElementById("textbox").value;
  if (result == wordSelect) {
    var a = document.getElementById("creditSpan");
    creditAmount();
    setText(a, credits + creditValue);
    credits = (credits + creditValue);
    totalCredits = totalCredits = creditValue;
    document.getElementById("textbox").value = "";
    document.getElementById("wrongWord").innerHTML = "";
    randWord();
    return false;
  } else {
    var wrong = document.getElementById("textbox").value;
    document.getElementById("wrongWord").innerHTML = "Try again, you typed " + "\"" + wrong + "\"";
    return false;
  }
}

function randWord() {
  wordChoice = Math.floor((Math.random() * 10) + 1);
  if (totalCredits <= 750) {
    switch (wordChoice) {
      case 1:
        wordSelect = "aid";
        break;
      case 2:
        wordSelect = "she";
        break;
      case 3:
        wordSelect = "the";
        break;
      case 4:
        wordSelect = "yak";
        break;
      case 5:
        wordSelect = "pot";
        break;
      case 6:
        wordSelect = "pan";
        break;
      case 7:
        wordSelect = "cat";
        break;
      case 8:
        wordSelect = "blue";
        break;
      case 9:
        wordSelect = "axel";
        break;
      case 10:
        wordSelect = "mesh";
        break;
      default:
        wordSelect = "ERROR ERROR Default Case"
    }
  } else if (totalCredits <= 1000000) {
    switch (wordChoice) {
      case 1:
        wordSelect = "apples";
        break;
      case 2:
        wordSelect = "banana";
        break;
      case 3:
        wordSelect = "cactus";
        break;
      case 4:
        wordSelect = "league";
        break;
      case 5:
        wordSelect = "counter";
        break;
      case 6:
        wordSelect = "select";
        break;
      case 7:
        wordSelect = "inside";
        break;
      case 8:
        wordSelect = "theory";
        break;
      case 9:
        wordSelect = "delete";
        break;
      case 10:
        wordSelect = "treant";
        break;
      default:
        wordSelect = "ERROR ERROR Default Case"

    }
  }
  document.getElementById("test").innerHTML = "Type: " + wordSelect;
}

var credits = 0;
var totalCredits = 0;
var creditValue = 0;

function creditAmount() {
  if (typewriters > 0) {
    creditValue = ((wordSelect.length * 10) * typewriterMult);
  } else {
    creditValue = (wordSelect.length * 10);
  }
}

function gainCredit() {
  credits = (credits + 10000);
  totalCredits = (totalCredits + 10000);
  updateCreditText();
}

function updateCreditText() {
  var a = document.getElementById("creditSpan");
  /* Billion */
  if (credits >= 1000000000) {
    var credBil = (credits / 1000000000);
    setText(a, (credBil.toFixed(2) + " Billion"));
  }
  /* Million */
  else if (credits >= 1000000) {
    var credMil = (credits / 1000000);
    setText(a, (credMil.toFixed(2) + " Million"));
  }
  /* Thousand */
  else if (credits >= 1000) {
    var credTh = (credits / 1000);
    setText(a, (credTh.toFixed(2) + " Thousand"));
  } else {
    setText(a, credits.toFixed());
  }
}

function setText(dest, text) {
  dest.replaceChild(document.createTextNode(text), dest.lastChild);
}

/* Word Upgrades */

var wordLevel = 0;

function wordUpgrade() {


}

/* Typewriter Upgrades */

var typewriters = 0;
var typewriterCost = 1000;

function upTypewriter() {
  if (credits >= typewriterCost) {
    ++typewriters;
    var a = document.getElementById("typewriterSpan");
    var b = document.getElementById("creditSpan");
    credits = (credits - typewriterCost);
    typewriterCost = (typewriterCost * 5);
    typewriterEffect();
    setText(a, typewriterMult);
    setText(b, credits);
    document.getElementById("typeButton").innerHTML = "Upgrade Typewriter (2x): " + typewriterCost.toFixed() + " Credits";
  }
}

var typewriterMult = 0;

function typewriterEffect() {
  if (typewriters > 1) {
    typewriterMult = Math.pow(typewriterMult, 2);
  } else if (typewriters == 1) {
    typewriterMult = 2;
  } else {
    typewriterMult = 1;
  }
}

/* Per Second Buyables */

var secretary = 0;
var secretaryCost = 100;

function addSecretary() {
  var a = document.getElementById("secretarySpan");
  var b = document.getElementById("creditSpan");
  if (credits >= secretaryCost) {
    ++secretary;
    credits = (credits - secretaryCost);
    secretaryCost = (secretaryCost * 1.1);
    setText(a, secretary);
    setText(b, credits);
    document.getElementById("secretaryButton").innerHTML = "Hire Secretary (1 CpS): " + secretaryCost.toFixed() + " Credits";
    if (secretary >= 1000000) {
      var secretaryMil = (secretary / 1000000);
      setText(a, (secretaryMil.toFixed(2) + "Mil"));
    } else {
      setText(a, secretary);
    }
  }
}

var company = 0;
var companyCost = 250;

function addCompany() {
  var a = document.getElementById("companySpan");
  var b = document.getElementById("creditSpan");
  if (credits >= companyCost) {
    ++company;
    credits = (credits - companyCost);
    companyCost = (companyCost * 1.1);
    setText(b, credits);
    document.getElementById("companyButton").innerHTML = "Start a company (10 CpS): " + companyCost.toFixed() + " Credits";
  }
  if (company >= 1000000) {
    var companyMil = (company / 1000000);
    setText(a, (companyMil.toFixed(2) + "Mil"));
  } else {
    setText(a, company);
  }
}

/* Calculations */

function creditCalc() {
  secretaryPS();
  companyPS();
  updateCreditText();
}

function secretaryPS() {
  var secCredits = 0;
  secCredits = (secretary * 1) / 100;
  credits = (credits + secCredits);
  totalCredits = (totalCredits + secCredits);
}

function companyPS() {
  var companyCredits = 0;
  companyCredits = (company * 10) / 100;
  credits = (credits + companyCredits);
  totalCredits = (credits + companyCredits);
}

function creditLoad() {
  var testVar = setInterval(function() {
    creditCalc()
  }, 10);
}