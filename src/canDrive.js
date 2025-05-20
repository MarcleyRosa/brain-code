function canDrive(age) {
  if (age >= 18) {
    console.log("Você pode dirigir.");
  } else {
    console.log("Você não pode dirigir.");
  }
}

canDrive(20); // Teste de uso da funcão

module.exports = {
  canDrive,
};
