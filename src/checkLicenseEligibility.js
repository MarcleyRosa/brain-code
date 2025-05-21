function checkLicenseEligibility(age, yearsOfExperience) {
    if(age < 18){
      return "Não pode obter a licença."
    } else if (age >= 18 && yearsOfExperience < 2) {
      return "Pode obter a licença, mas é necessária supervisão."
    } else {
      return "Pode obter a licença sem supervisão."
    }
}

module.exports = { 
  checkLicenseEligibility
}