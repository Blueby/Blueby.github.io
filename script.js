// Code goes here
var points = 0;
var pointValue = 0;
var wordChoice;
var wordSelect = "FUCK";
var result = "FUCK";

function onLoad() {
  randWord();
  credits();
}

function wordCheck() {
  result = document.getElementById("textbox").value;
  if(result == wordSelect) {
    var a = document.getElementById("pointSpan");
    pointAmount();
    setText(a, points + pointValue);
    points = points + pointValue;
    document.getElementById("textbox").value = "";
    document.getElementById("wrongWord").innerHTML = "";
    randWord();
    return false;
  }
  else {
  var wrong = document.getElementById("textbox").value;
  document.getElementById("wrongWord").innerHTML = "Try again, you typed " + "\"" + wrong + "\"";
  return false;
}
}
function textBox() {
  result = document.getElementById("textbox").value;
  typePoint();
}

function typePoint() {
  if (result == wordSelect) {
    var a = document.getElementById("pointSpan");
    pointAmount();
    setText(a, points + pointValue);
    points = points + pointValue;
    document.getElementById("textbox").value = "";
    randWord();
  }
}

function randWord() {
  wordChoice = Math.floor((Math.random() * 10) + 1);
  if (points <= 1000) {
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
  } else if (points <= 1000000) {
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

function pointAmount() {
  pointValue = wordSelect.length * 10
}

function gainPoint() {
  points = (points + 100);
  updateCreditText();
}

function updateCreditText() {
  var a = document.getElementById("pointSpan");
  setText(a, points);
}

function setText(dest, text) {
  dest.replaceChild(document.createTextNode(text), dest.lastChild);
}

var secretary = 0;
var secretaryCost = 100;

function addSecretary() {
  if (points >= secretaryCost) {
    var a = document.getElementById("secretarySpan");
    var b = document.getElementById("pointSpan");
    points = (points - secretaryCost);
    secretaryCost = Math.floor(secretaryCost * 1.1);
    setText(a, ++secretary);
    setText(b, points);
    document.getElementById("secretaryButton").innerHTML = "Hire Secretary (1 CpS): " + secretaryCost + " Credits";
  }
}

var company = 0;
var companyCost = 250;

function addCompany() {
  if (points >= companyCost) {
    var a = document.getElementById("companySpan");
    var b = document.getElementById("pointSpan");
    points = (points - companyCost);
    companyCost = Math.floor(companyCost * 1.1);
    setText(a, ++company);
    setText(b, points);
    document.getElementById("companyButton").innerHTML = "Start a company (100 CpS): " + companyCost + " Credits";
  }
}

function creditCalc() {
  secretaryPS();
  companyPS();
  updateCreditText();
}

function secretaryPS() {
  var secPoints = 0;
  secPoints = (secretary * 1);
  points = (points + secPoints);
}

function companyPS() {
  var companyPoints = 0;
  companyPoints = (company * 100);
  points = (points + companyPoints);
}

function credits() {
  var testVar = setInterval(function() {
    creditCalc()
  }, 1000);
}