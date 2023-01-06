const {soma, sub, multi, divi} = require('./quatro-operacao');

test ("A soma de 1 + 2 é igual a 3", () => {
  expect(soma(1,2)).toBe(3);
})

test ("A subtração de 2 - 1 é igual a 1", () => {
  expect(sub(2,1)).toBe(1);
})

test ("A multiplicação de 3 * 3 é igual a 9", () => {
  expect(multi(3,3)).toBe(9);
})

test ("A divisão de 9 * 3 é igual a 3", () => {
  expect(divi(9,3)).toBe(3);
})
