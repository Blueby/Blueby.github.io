// Code goes here

function onLoad() {
  randWord();
  creditLoad();
}

var typeSound = 1;

function startSound() {
  switch (typeSound) {
    case 1:
      var audio = document.getElementById("audio");
      audio.volume = .2;
      audio.play();
      ++typeSound;
      break;
    case 2:
      var audio2 = document.getElementById("audio2");
      audio2.volume = .2;
      audio2.play();
      ++typeSound;
      break;
    case 3:
      var audio3 = document.getElementById("audio3");
      audio3.volume = .2;
      audio3.play();
      ++typeSound;
      break;
    case 4:
      var audio4 = document.getElementById("audio4");
      audio4.volume = .2;
      audio4.play();
      ++typeSound;
      break;
    case 5:
      var audio5 = document.getElementById("audio5");
      audio5.volume = .2;
      audio5.play();
      typeSound = 1;
      break;
    default:
      document.getElementById("textbox").value = "FUCK";
  }
}

function resetGame() {
  var resetPrompt = confirm("Are you sure you want to reset?");
  if (resetPrompt == true) {
    var a = document.getElementById("creditSpan");
    var b = document.getElementById("secretarySpan");
    var c = document.getElementById("companySpan");
    var d = document.getElementById("typewriterSpan");
    setText(a, 0);
    setText(b, 0);
    setText(c, 0);
    setText(d, 1);
    document.getElementById("secretaryButton").innerHTML = "Hire Secretary (1 CpS): 100 Credits";
    document.getElementById("companyButton").innerHTML = "Requires 10 Secretaries";
    document.getElementById("typeButton").innerHTML = "Upgrade Typewriter (2x): 1000 Credits";
    document.getElementById("upSecretaryButton").innerHTML = "Requires 25 Secretaries";
    credits = 0;
    totalCredits = 0;
    typewriters = 0;
    typewriterCost = 1000;
    secretary = 0;
    secretaryCost = 100;
    company = 0;
    companyCost = 250;
    secretaryUpCost = 1000;
    secretaryUps = 0;
    secretaryCPS = 1;
    totalSecretaryCPS = 0;
    randWord();
    updateSecretaryText();
    updateCompanyText();
  }
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
  if (typewriters == 0) {
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
  } else if (typewriters == 1) {
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
  } else if (typewriters >= 2) {
    switch (wordChoice) {
      case 1:
        wordSelect = "dear lord i suck at coding";
        break;
      case 2:
        wordSelect = "send help";
        break;
      case 3:
        wordSelect = "how does one javascript?";
        break;
      case 4:
        wordSelect = "has anyone really been so far even as decided to use even go want to do look more like?";
        break;
      case 5:
        wordSelect = "ThIs SENtenCe Is teRRiBle t0 Type; wow i Hate this sen3Nce.";
        break;
      case 6:
        wordSelect = "ayy lmao this suddenly got really hard";
        break;
      case 7:
        wordSelect = "How Can Mirrors Be Real If Our Eyes Aren't Real";
        break;
      case 8:
        wordSelect = "foxskymusic is famous";
        break;
      case 9:
        wordSelect = "Let us depart on a magical journey through the realms of code.";
        break;
      case 10:
        wordSelect = "ERROR ERROR ERROR ERROR ERROR jk, working as intended";
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

function updateCPSText() {
  var a = document.getElementById("cpsSpan");
  var b = totalSecretaryCPS + totalCompanyCPS;
  setText(a, b)
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
    randWord();
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
    setText(b, credits);
    updateSecretaryText();
    document.getElementById("secretaryButton").innerHTML = "Hire Secretary (1 CpS): " + secretaryCost.toFixed() + " Credits";
    if (secretary >= 1000000) {
      var secretaryMil = (secretary / 1000000);
      setText(a, (secretaryMil.toFixed(2) + "Mil"));
    } else {
      setText(a, secretary);
    }
  }
  if (secretary == 10) {
    document.getElementById("companyButton").innerHTML = "Buy a Company (10 CpS): 250 Credits";
  }
  if (secretary == requireSec) {
    document.getElementById("upSecretaryButton").innerHTML = "Upgrade Secretary Efficiency (2x): " + secretaryUpCost.toFixed() + " Credits";
  }
}

var company = 0;
var companyCost = 250;

function addCompany() {
  var a = document.getElementById("companySpan");
  var b = document.getElementById("creditSpan");
  if (credits >= companyCost && secretary >= 10) {
    ++company;
    credits = (credits - companyCost);
    companyCost = (companyCost * 1.1);
    setText(b, credits);
    updateCompanyText();
    document.getElementById("companyButton").innerHTML = "Buy a Company (10 CpS): " + companyCost.toFixed() + " Credits";
    if (company >= 1000000) {
      var companyMil = (company / 1000000);
      setText(a, (companyMil.toFixed(2) + "Mil"));
    } else {
      setText(a, company);
    }
  }
  if (company == requireComp) {
    document.getElementById("upCompanyButton").innerHTML = "Increase Company Size (2x): " + companyUpCost.toFixed() + " Credits";
  }
}

function updateSecretaryText() {
  totalSecretaryCPS = (secretaryCPS * secretary);
  document.getElementById("secretarySpanCPS").innerHTML = totalSecretaryCPS;
}

function updateCompanyText() {
  totalCompanyCPS = (companyCPS * company);
  document.getElementById("companySpanCPS").innerHTML = totalCompanyCPS;
}

/* Secretary Upgrades*/
var secretaryUpCost = 2500;
var secretaryUps = 0;
var secretaryCPS = 1;
var totalSecretaryCPS = 0;
var requireSec = 10;

function upSecretary() {
  if (credits >= secretaryUpCost && secretary >= requireSec) {
    ++secretaryUps;
    credits = (credits - secretaryUpCost);
    secretaryUpCost = (secretaryUpCost * 5);
    if (secretaryUps == 1) {
      secretaryCPS = 2;
      requireSec = 50;
      document.getElementById("upSecretaryButton").innerHTML = "Requires 50 Secretaries";
    } else if (secretaryUps >= 2) {
      secretaryCPS = 4
      requireSec = 100;
      document.getElementById("upSecretaryButton").innerHTML = "Requires 100 Secretaries";
    }
    updateSecretaryText();
    document.getElementById("upSecretaryButton").innerHTML = "Requires " + requireSec + " Secretaries";
  }
}

var companyUpCost = 5000;
var companyUps = 0;
var companyCPS = 1;
var totalCompanyCPS = 0;
var requireComp = 10;

function upCompany() {
  if (credits >= companyUpCost && company >= requireComp) {
    ++companyUps;
    credits = (credits - companyUpCost);
    companyUpCost = (companyUpCost * 5);
    if (companyUps == 1) {
      companyCPS = 2;
      requireComp = 50;
      document.getElementById("upCompanyButton").innerHTML = "Requires 50 Companies";
    } else if (companyUps >= 2) {
      companyCPS = 4
      requireComp = 100;
      document.getElementById("upCompanyButton").innerHTML = "Requires 100 Companies";
    }
    updateSecretaryText();
    document.getElementById("upCompanyButton").innerHTML = "Requires " + requireComp + " Companies";
  }
}
/* Calculations */

function creditCalc() {
  secretaryPS();
  companyPS();
  updateCreditText();
  updateCPSText();
}

function secretaryPS() {
  var secCredits = 0;
  secCredits = (secretary * secretaryCPS) / 100;
  credits = (credits + secCredits);
  totalCredits = (totalCredits + secCredits);
}

var companyCPS = 10;

function companyPS() {
  var companyCredits = 0;
  companyCredits = (company * companyCPS) / 100;
  credits = (credits + companyCredits);
  totalCredits = (credits + companyCredits);
}

function creditLoad() {
  var testVar = setInterval(function() {
    creditCalc()
  }, 10);
}