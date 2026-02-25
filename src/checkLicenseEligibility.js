function checkLicenseEligibility(age, yearsOfExperience) {
  // escreva seu código aqui
  if (age < 18) {
    return "Não pode obter a licença."
    
  }
  if (age >= 18 && yearsOfExperience < 2) {
    return "Pode obter a licença, mas é necessária supervisão."
  } else {
    return "Pode obter a licença sem supervisão."
  }
}

module.exports = { 
  checkLicenseEligibility
}

