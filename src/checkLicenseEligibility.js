function checkLicenseEligibility(age, yearsOfExperience) {
  if (age<18) {
    console.log();
    
  } if (age>18 && yearsOfExperience<2) {
    console.log("Pode obter a licença, mas é necessária supervisão.");
  } else {
    console.log("Pode obter a licença sem supervisão.");
  }
}

module.exports = { 
  checkLicenseEligibility
}