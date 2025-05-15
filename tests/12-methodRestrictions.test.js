const { canDrive } = require('../src/canDrive')
const { checkLicenseEligibility } = require('../src/checkLicenseEligibility')
const { displayElements } = require('../src/displayElements')
const { findMaximum } = require('../src/findMaximum')
const { printInnerElements } = require('../src/printInnerElements')
const { invertElements } = require('../src/invertElements')
const { invertString } = require('../src/invertString')
const { removeDuplicates } = require('../src/removeDuplicates')
const { calculateNetSalary } = require('../src/calculateNetSalary')
const { formatPhoneNumber } = require('../src/formatPhoneNumber')
const { getIntervalData } = require('../src/getIntervalData')

let spies = [];
let setSpy;
const originalSet = global.Set;

beforeEach(() => {
  const adicionarEspiriao = (obj, metodo) => {
    if (obj && typeof obj[metodo] === 'function') {
      const spy = jest.spyOn(obj, metodo);
      spies.push({ spy, nome: metodo });
    }
  };

  // spies = [];

  // String methods
  ['split', 'join'].forEach(m => adicionarEspiriao(String.prototype, m));

  // Array methods
  ['map', 'find', 'forEach', 'reduce', 'reverse', 'includes'].forEach(m => adicionarEspiriao(Array.prototype, m));

  // Math functions
  adicionarEspiriao(Math, 'max');

  adicionarEspiriao(Array, 'from'); // ← Restringe Array.from

  setSpy = jest.fn();
    global.Set = class extends originalSet {
      constructor(...args) {
        super(...args);
        setSpy(...args); // registra o uso
      }
    };

  });


afterEach(() => {
  spies.forEach(({ spy }) => spy.mockRestore());
  spies = [];

});


const metodosUsados = () => {
  const metodosUsados = [];
  for (let i = 0; i < spies.length; i++) {
    const { spy } = spies[i];
    if (spy.mock.calls.length > 0) {
      metodosUsados.push(spies[i]);
    }
  }
  if (setSpy && setSpy.mock.calls.length > 0) {
    metodosUsados.push({ nome: 'Set' });
  } 
  return metodosUsados
}


test('1 - canDrive deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  canDrive(20);

  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});

test('2 - checkLicenseEligibility deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  checkLicenseEligibility(20, 2);

  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});

test('3 - displayElements deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  displayElements([1, 2, 3]);

  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});

test('4 - findMaximum deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  findMaximum([1, 2, 3, 4, 5]);

  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});

test('5 - printInnerElements deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  printInnerElements([1, 2, 3, 4, 5]);

  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});

test('6 - invertElements deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  invertElements([1, 2, 3, 4, 5]);

  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});

test('7 - invertString deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  invertString("hello");

  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});

test('8 - removeDuplicates deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  removeDuplicates([1, 2, 3, 2, 4, 5, 1]);
  
  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});

test('9 - calculateNetSalary deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  calculateNetSalary(3000);

  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});

test('10 - formatPhoneNumber deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  formatPhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7]);

  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});

test('11 - getIntervalData deve funcionar sem métodos', () => {
  spies.forEach(({ spy }) => spy.mockClear());

  getIntervalData([1, 2, 3, 4, 5, 6]);

  const nomes = metodosUsados().map(({ nome }) => nome);

  expect(nomes).toEqual([]); 
});
