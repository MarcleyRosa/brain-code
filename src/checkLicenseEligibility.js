function checkLicenseEligibility(age, yearsOfExperience) {
    if (age <= 17) {
      return ('Não pode obter a licença.')
      
    } else {
      if (yearsOfExperience >= 2) {
        return('Pode obter a licença sem supervisão.');
        
      } else {
        return('Pode obter a licença, mas é necessária supervisão.');
        
      }
    }
}

module.exports = { 
  checkLicenseEligibility
}
