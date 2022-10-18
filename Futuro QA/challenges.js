// Desafio 1

const compareTrue = (param1, param2) => {
  if (param1 === true && param2 === true) return true;
  return false;
};

// Desafio 2
const calcArea = (base, altura) => (base * altura) / 2;

// Desafio 3
const splitSentence = (frase) => frase.split(' ');

// Desafio 4
const concatName = (arrayPegaPrimeiroEUltimo) => {
  let ultimoItem = arrayPegaPrimeiroEUltimo[arrayPegaPrimeiroEUltimo.length - 1];
  let primeiiroItem = arrayPegaPrimeiroEUltimo[0];
  return `${ultimoItem}, ${primeiiroItem}`;
};

// Desafio 5
const footballPoints = (vitoria, empate) => vitoria * 3 + empate;

// Desafio 6
const highestCount = (arrayParaAcharMaior) => {
  let maiorNumero = {
    maiorValor: arrayParaAcharMaior[0],
    repeteMaiorNumero: 0,
  };

  for (const passaPeloArray of arrayParaAcharMaior) {
    if (passaPeloArray === maiorNumero.maiorValor) {
      maiorNumero.repeteMaiorNumero += 1;
    } else if (passaPeloArray > maiorNumero.maiorValor) {
      maiorNumero.maiorValor = passaPeloArray;
      maiorNumero.repeteMaiorNumero = 1;
    }
  }
  return maiorNumero.repeteMaiorNumero;
};

const catAndMouse = (mouse, cat1, cat2) => {
  let distGatoUmParaRato = Math.abs(mouse - cat1);
  let distGatoDoisParaRato = Math.abs(mouse - cat2);

  if (distGatoUmParaRato < distGatoDoisParaRato) return 'cat1'; // Se eu preciso retornar return se não dispensável o return.
  if (distGatoUmParaRato > distGatoDoisParaRato) return 'cat2';
  return 'os gatos trombam e o rato foge';
};

// Desafio 8

const veridyfizz = (verifiArr, arrsaida, passaNumero) => {
  if (verifiArr[passaNumero] % 3 === 0 && verifiArr[passaNumero] % 5 === 0) {
    arrsaida.push('fizzBuzz');
  } else if (verifiArr[passaNumero] % 3 === 0 && verifiArr[passaNumero] % 5 !== 0) {
    arrsaida.push('fizz');
  }
};

const verifybuzz = (verifiArr, arrsaida, passaNumero) => {
  if (verifiArr[passaNumero] % 3 !== 0 && verifiArr[passaNumero] % 5 === 0) {
    arrsaida.push('buzz');
  } else if (verifiArr[passaNumero] % 3 !== 0 && verifiArr[passaNumero] % 5 !== 0) {
    arrsaida.push('bug!');
  }
};

function fizzBuzz(arrayVerificaDivisivel3E5) {
  let arraySaida = [];
  for (let passaNumero = 0; passaNumero < arrayVerificaDivisivel3E5.length; passaNumero += 1) {
    veridyfizz(arrayVerificaDivisivel3E5, arraySaida, passaNumero);
    verifybuzz(arrayVerificaDivisivel3E5, arraySaida, passaNumero);
  }
  return arraySaida;
}

// Desafio 9
const encode = (frase) => frase
  .replace(/a/g, '1')
  .replace(/e/g, '2')
  .replace(/i/g, '3')
  .replace(/o/g, '4')
  .replace(/u/g, '5');

const decode = (frase) => frase
  .replace(/1/g, 'a')
  .replace(/2/g, 'e')
  .replace(/3/g, 'i')
  .replace(/4/g, 'o')
  .replace(/5/g, 'u');

// Desafio 10
const techList = (arrayTecnologias, pessoa) => {
  let nomeTecnologiaOrdenada = arrayTecnologias.sort((x, y) => (x < y ? -1 : 1));
  let arrayDeRetorno = [];

  if (arrayTecnologias == 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < arrayTecnologias.length; index += 1) {
      arrayDeRetorno[index] = {};
      arrayDeRetorno[index].tech = nomeTecnologiaOrdenada[index];
      arrayDeRetorno[index].name = pessoa;
    }
    return arrayDeRetorno;
  }
};

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
