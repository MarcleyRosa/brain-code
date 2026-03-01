function checkLicenseEligibility(age, yearsOfExperience) {
  let mensagem = ''  
  if (age <= 17) {
      mensagem ='Não pode obter a licença.'
      
    } else {
      if (yearsOfExperience >= 2) {
        mensagem = 'Pode obter a licença sem supervisão.';
        
      } else {
        mensagem = 'Pode obter a licença, mas é necessária supervisão.';
        
      }
    }
  return mensagem
  }

module.exports = { 
  checkLicenseEligibility
}
