// Importa a função
const { canDrive } = require('../src/canDrive');

describe('1 - Testes para a função canDrive', () => {

  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore(); 
  });

  test('Deve imprimir "Você pode dirigir." para idade igual ou superior a 18', () => {
    canDrive(18);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Você pode dirigir.');
    expect(console.log).not.toHaveBeenCalledWith('Você não pode dirigir.');
  });

  test('Deve imprimir "Você não pode dirigir." para idade inferior a 18', () => {
    canDrive(16);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Você não pode dirigir.');
    expect(console.log).not.toHaveBeenCalledWith('Você pode dirigir.');
  });
});
