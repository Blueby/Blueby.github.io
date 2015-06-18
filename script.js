// Code goes here
var credits = 0;
var wordChoice;
var wordSelect = "FUCK";
var result = "FUCK";
var creditValue = 0;

function onLoad() {
  randWord();
  creditLoad();
}

function wordCheck() {
  result = document.getElementById("textbox").value;
  if (result == wordSelect) {
    var a = document.getElementById("creditSpan");
    creditAmount();
    setText(a, credits + creditValue);
    credits = credits + creditValue;
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

function textBox() {
  result = document.getElementById("textbox").value;
  typeCredit();
}

function typeCredit() {
  if (result == wordSelect) {
    var a = document.getElementById("creditSpan");
    creditAmount();
    setText(a, credits + creditValue);
    credits = credits + creditValue;
    document.getElementById("textbox").value = "";
    randWord();
  }
}

function randWord() {
  wordChoice = Math.floor((Math.random() * 10) + 1);
  if (credits <= 1000) {
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
  } else if (credits <= 1000000) {
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
  document.getElementById("test").innerHTML = "Type this word: " + wordSelect;
}

function creditAmount() {
  creditValue = (wordSelect.length * 10)
}

function gainCredit() {
  credits = (credits + 100);
  updateCreditText();
}

function updateCreditText() {
  var a = document.getElementById("creditSpan");
  setText(a, credits);
}

function setText(dest, text) {
  dest.replaceChild(document.createTextNode(text), dest.lastChild);
}

var secretary = 0;
var secretaryCost = 100;

function addSecretary() {
  if (credits >= secretaryCost) {
    var a = document.getElementById("secretarySpan");
    var b = document.getElementById("creditSpan");
    credits = (credits - secretaryCost);
    secretaryCost = Math.floor(secretaryCost * 1.1);
    setText(a, ++secretary);
    setText(b, credits);
    document.getElementById("secretaryButton").innerHTML = "Hire Secretary (1 CpS): " + secretaryCost + " Credits";
  }
}

var company = 0;
var companyCost = 250;

function addCompany() {
  if (credits >= companyCost) {
    var a = document.getElementById("companySpan");
    var b = document.getElementById("creditSpan");
    credits = (credits - companyCost);
    companyCost = Math.floor(companyCost * 1.1);
    setText(a, ++company);
    setText(b, credits);
    document.getElementById("companyButton").innerHTML = "Start a company (10 CpS): " + companyCost + " Credits";
  }
}

function creditCalc() {
  secretaryPS();
  companyPS();
  updateCreditText();
}

function secretaryPS() {
  var secCredits = 0;
  secCredits = (secretary * 1);
  credits = (credits + secCredits);
}

function companyPS() {
  var companyCredits = 0;
  companyCredits = (company * 10);
  credits = (credits + companyCredits);
}

function creditLoad() {
  var testVar = setInterval(function() {
    creditCalc()
  }, 1000);
}