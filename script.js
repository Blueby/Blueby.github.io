// Code goes here

function onLoad() {
  randWord();
  creditLoad();
}

function playBlip() {
  var blip = document.getElementById("blip");
  blip.volume = .2;
  blip.pause();
  blip.currentTime = 0;
  blip.play();
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
    credits = 0;
    totalCredits = 0;
    typewriters = 0;
    typewriterCost = 250;
    secretary = 0;
    secretaryCost = 100;
    secretaryUpCost = 1000;
    secretaryUps = 0;
    secretaryCPS = .5;
    secretaryEffect = 1;
    totalSecretaryCPS = 0;
    requireSec = 10;
    companyUpCost = 2500;
    companyUps = 0;
    companyCPS = 5;
    companyEffect = 1;
    totalCompanyCPS = 0;
    requireComp = 10;
    company = 0;
    companyCost = 250;
    totalSecretaryCPS = 0;
    totalCompanyCPS = 0;
    randWord();
    updateSecretaryText();
    updateCompanyText();
    document.getElementById("typeButton").innerHTML = "Upgrade Typewriter (2x): " + typewriterCost + " Credits";
    document.getElementById("upSecretaryButton").innerHTML = "Requires 10 Secretaries";
    document.getElementById("upCompanyButton").innerHTML = "Requires 10 Companies";
    document.getElementById("wrongWord").innerHTML = "";
  }
}

var wordChoice;
var wordSelect = "FUCK";
var result = "FUCK";
var totalCreditsLost = 0;

function wordCheck() {
  result = document.getElementById("textbox").value;
  if (result == wordSelect) {
    var a = document.getElementById("creditSpan");
    creditAmount();
    updateCreditText();
    credits = (credits + creditValue);
    totalCredits = totalCredits + creditValue;
    document.getElementById("textbox").value = "";
    document.getElementById("wrongWord").innerHTML = "+" + creditValue + " Credits";
    randWord();
    return false;
  } else if (result == "") {
    document.getElementById("wrongWord").innerHTML = "You didn't type anything...";
    return false;
  } else {
    var wrong = document.getElementById("textbox").value;
    document.getElementById("textbox").value = "";
    creditAmount();
    var creditsLost = (creditValue * .5);
    credits = credits - creditsLost;
    totalCreditsLost = totalCreditsLost + creditsLost;
    document.getElementById("wrongWord").innerHTML = "-" + creditsLost + " Credits: You typed " + "\"" + wrong + "\"";
    updateCreditText();
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
        wordSelect = "ERROR ERROR Default Case";
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
        wordSelect = "ERROR ERROR Default Case";

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
        wordSelect = "this sentence replaced that godawful one";
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
        wordSelect = "ERROR ERROR Default Case";

    }
  }
  document.getElementById("test").innerHTML = "Type: " + wordSelect;
}

var credits = 0;
var totalCredits = 0;
var creditValue = 0;

function creditAmount() {
  if (typewriters > 0) {
    creditValue = ((wordSelect.length * 2) * typewriterMult);
  } else {
    creditValue = (wordSelect.length * 2);
  }
}

function gainCredit() {
  credits = (credits + 1000);
  totalCredits = (totalCredits + 1000);
  updateCreditText();
}

function updateCreditText() {
  var a = document.getElementById("creditSpan");
  /* var b = document.getElementById("totalCESpan");
  var c = document.getElementById("totalCLSpan"); */
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
  /*
  else if (credits >= 1000) {
    var credTh = (credits / 1000);
    setText(a, (credTh.toFixed(2) + " Thousand"));
  } */
  else {
    setText(a, credits.toFixed());
    /* setText(b, totalCredits.toFixed());
    setText(c, totalCreditsLost.toFixed()); */
  }
}

function updateCPSText() {
  var a = document.getElementById("cpsSpan");
  var b = totalSecretaryCPS + totalCompanyCPS;
  setText(a, b);
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
var typewriterCost = 250;

function upTypewriter() {
  if (credits >= typewriterCost) {
    ++typewriters;
    var a = document.getElementById("typewriterSpan");
    var b = document.getElementById("creditSpan");
    credits = (credits - typewriterCost);
    typewriterCost = Math.floor(typewriterCost * 3.5);
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
  if (credits >= secretaryCost) {
    ++secretary;
    credits = (credits - secretaryCost);
    secretaryCost = Math.floor(secretaryCost * 1.1);
    updateCreditText();
    updateSecretaryText();
    if (secretary >= 1000000) {
      var secretaryMil = (secretary / 1000000);
      setText(a, (secretaryMil.toFixed(2) + "Mil"));
    } else {
      setText(a, secretary);
    }
  }
  if (secretary == 10) {
    document.getElementById("companyButton").innerHTML = "Buy a Company (" + (companyCPS * companyEffect) + " CpS): 250 Credits";
  }
  if (secretary == requireSec) {
    document.getElementById("upSecretaryButton").innerHTML = "Upgrade Secretary Efficiency (2x): " + secretaryUpCost.toFixed() + " Credits";
  }
}

var company = 0;
var companyCost = 250;

function addCompany() {
  var a = document.getElementById("companySpan");
  if (credits >= companyCost && secretary >= 10) {
    ++company;
    credits = (credits - companyCost);
    companyCost = Math.floor(companyCost * 1.1);
    updateCreditText();
    updateCompanyText();
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
  totalSecretaryCPS = (secretaryCPS * secretary) * secretaryEffect;
  document.getElementById("secretarySpanCPS").innerHTML = totalSecretaryCPS;
  document.getElementById("secretaryButton").innerHTML = "Hire Secretary (" + (secretaryCPS * secretaryEffect) + " CpS): " + secretaryCost + " Credits";

}

function updateCompanyText() {
  totalCompanyCPS = (companyCPS * company) * companyEffect;
  document.getElementById("companySpanCPS").innerHTML = totalCompanyCPS;
  if (secretary >= 10) {
    document.getElementById("companyButton").innerHTML = "Buy a Company (" + (companyCPS * companyEffect) + " CpS): " + companyCost + " Credits";
  } else {
    document.getElementById("companyButton").innerHTML = "Requires 10 Secretaries";
  }
}

/* Secretary Upgrades*/
var secretaryUpCost = 1000;
var secretaryUps = 0;
var secretaryCPS = .5;
var secretaryEffect = 1;
var totalSecretaryCPS = 0;
var requireSec = 10;

function upSecretary() {
  if (credits >= secretaryUpCost && secretary >= requireSec) {
    ++secretaryUps;
    credits = (credits - secretaryUpCost);
    secretaryUpCost = (secretaryUpCost * 5);
    if (secretaryUps == 1) {
      secretaryEffect = 2;
      requireSec = 25;
    } else if (secretaryUps >= 2) {
      secretaryEffect = 4
      requireSec = 50;
    }
    updateSecretaryText();
    document.getElementById("upSecretaryButton").innerHTML = "Requires " + requireSec + " Secretaries";
  }
}

var companyUpCost = 2500;
var companyUps = 0;
var companyCPS = 5;
var companyEffect = 1;
var totalCompanyCPS = 0;
var requireComp = 10;

function upCompany() {
  if (credits >= companyUpCost && company >= requireComp) {
    ++companyUps;
    credits = (credits - companyUpCost);
    companyUpCost = (companyUpCost * 5);
    if (companyUps == 1) {
      companyEffect = 2;
      requireComp = 25;
    } else if (companyUps >= 2) {
      companyEffect = 4
      requireComp = 50;
    }
    updateCompanyText();
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
  secCredits = ((secretary * secretaryCPS) * secretaryEffect) / 100;
  credits = (credits + secCredits);
  totalCredits = (totalCredits + secCredits);
}


function companyPS() {
  var companyCredits = 0;
  companyCredits = ((company * companyCPS) * companyEffect) / 100;
  credits = (credits + companyCredits);
  totalCredits = (totalCredits + companyCredits);
}

function creditLoad() {
  var testVar = setInterval(function() {
    creditCalc()
  }, 10);
}