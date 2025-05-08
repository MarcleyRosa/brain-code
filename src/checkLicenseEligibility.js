function checkLicenseEligibility(age, yearsOfExperience) {
  mensagem = "";
  if(age <= 17){
    mensagem = "Não pode obter a licença.";
  }else if(yearsOfExperience <= 1){
    mensagem = "Pode obter a licença, mas é necessária supervisão.";
  }else{
    mensagem = "Pode obter a licença sem supervisão.";
  }
  return mensagem;
}

module.exports = { 
  checkLicenseEligibility
}