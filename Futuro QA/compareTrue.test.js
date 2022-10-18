const { calcArea } = require('./challenges');
const { compareTrue } = require('./challenges');
const { catAndMouse } = require('./challenges');
const { concatName } = require('./challenges');
const { decode } = require('./challenges');
const { encode } = require('./challenges');
const { fizzBuzz } = require('./challenges');
const { footballPoints } = require('./challenges');
const { highestCount } = require('./challenges');
const { splitSentence } = require('./challenges');
const { techList } = require('./challenges');


test('1 - Testa se os dois parâmetros são verdadeiros', () => {
  expect(compareTrue(true, true)).toBe(true);
});
test('1.1 - Testa se o segundo parâmetros for falso ', () => {
  expect(compareTrue(true, false)).toBe(false);
});
test('1.2 - Testa se o primeiro parâmetros for falso ', () => {
  expect(compareTrue(false, true)).toBe(false);
});
test('1.3 - Testa se o primeiro parâmetros for falso ', () => {
  expect(compareTrue(false, false)).toBe(false);
});


describe('2 - Calcula a àrea multiplicando base vezes altura', () => {
  test('2.1 Retorne 5 quando 5 e 2 forem os parâmetros.', () => {
    expect(calcArea(5, 2)).toBe(5);
  });

  test('2.1 Retorne 10 quando 10 e 2 forem os parâmetros.', () => {
    expect(calcArea(10, 2)).toBe(10);
  });
});


describe('3 - Transforme uma string em um array', () => {
  it('3.1 Recebe uma string e separa as palavras pelo separetor espaço.', () => {
    expect(splitSentence('Separe isto')).toEqual(['Separe', 'isto']);
  });
  it('3.2 Recebe uma segunda string e retorna separado', () => {
    expect(splitSentence('Olá mundo!')).not.toEqual(['Olá mundo!']);
  });
});


describe('5 - Calcule a soma de pontos entre vitórias e empates', () => {
  it('5.1 Recebe 3 vitórias e 2 empates', () => {
    expect(footballPoints(3, 2)).toEqual(11);
  });
  it('5.2 Recebe uma segunda string e retorna separado', () => {
    expect(footballPoints(0, 5)).toEqual(5);
  });
});

describe('6 - Verifique quantas vezes o maior número em um array se repete.', () => {
  it('5.1 Recebe 9,9,8,7 e retorne o maior número repetiu duas vezes', () => {
    expect(highestCount([9, 9, 5, 7])).toBe(2);
  });
  it('5.2 Recebe uma segunda string e retorna separado', () => {
    expect(highestCount([1, 2, 3, 4, 5, 6, 7, 8, 9])).not.toBe(5);
  });
});



describe('9 - Receba uma string e troque todas as vogais por números', () => {
  it('9.1 Receba Ola turma 27 e devolga com números', () => {
    expect(encode('ola turma 27')).toBe('4l1 t5rm1 27');
  });
  it('9.2 Recebe uma string modificada e troca números por vogais', () => {
    expect(decode('4l1 t5rm1 27')).not.toBe('Ola turma 27');
  });
});


let exemplo = [
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]

describe('10 - Receba um array e um nome e combine o nome.', () => {
  it('10.1 [React, Jest, HTML, CSS, JavaScript] e Lucas', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual(exemplo);
  });
});