function checkLicenseEligibility(age, yearsOfExperience) {
  // escreva seu código aqui
  if (age >= 18 && yearsOfExperience >= 2) {
   return("Pode obter a licença sem supervisão.");
  } else if (age >= 18 && yearsOfExperience < 2) {
    return("Pode obter a licença, mas é necessária supervisão.");
  } else 
    return ("Não pode obter a licença.")
  
}

module.exports = { 
  checkLicenseEligibility
}