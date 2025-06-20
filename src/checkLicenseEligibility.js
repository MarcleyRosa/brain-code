function checkLicenseEligibility(age, yearsOfExperience) {
  // escreva seu código aqui
  if (age < 18) {
      return 'Não pode obter a licença.';
  } else if (age >= 18 && yearsOfExperience < 2) {
      return 'Pode obter a licença, mas é necessária supervisão.';
  } else if (age >= 18 && yearsOfExperience >= 2) {
      return 'Pode obter a licença sem supervisão.';
  } else {
      return 'Bla blá!';
  }
}
module.exports = { 
  checkLicenseEligibility
}
// Edson Copque - https://linktr.ee/edsoncopque
