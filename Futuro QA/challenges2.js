// Que venha o bónus! Adoro platinar um game

// Desafio 11
const varreNumero = (telefone, cont) => {
  for (const i of telefone) {
    cont = 0;
    for (const i2 of telefone) {
      if (i === i2) cont += 1;
      if (cont >= 3) return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return false;
};

const generatePhoneNumber = (telefone) => {
  let cont = 0;
  if (telefone.length !== 11) return 'Array com tamanho incorreto.';
  if (telefone.some((a) => (a > 9 || a < 0))) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (varreNumero(telefone, cont)) return varreNumero(telefone, cont);
  const ddd = `(${telefone[0]}${telefone[1]})`;
  const primeiraMetade = ` ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-`;
  const segundaMetade = `${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`;
  return `${ddd}${primeiraMetade}${segundaMetade}`;
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    // seja menor que a soma das medidas dos outros dois lados;
    lineA < lineB + lineC 
    && lineB < lineA + lineC 
    && lineC < lineA + lineB
    // seja maior que o valor absoluto (módulo) da diferença entre os outros dois lados.
    && lineA > Math.abs(lineB - lineC)
    && lineB > Math.abs(lineA - lineC)
    && lineC > Math.abs(lineA - lineB)
  ) {
    return true;
  }
  return false;

// O teste não tá subindo para o git vou mandar de novo
}

// Desafio 13
const hydrate = (stringRecebida) => {
  let quantidade = 0;

  for (const vasculha of stringRecebida) {
    if (vasculha >= 1) {
      let valorNumerico = parseInt(vasculha, 10); // 10 igual decimal
      quantidade += valorNumerico;
    }
  }
  if (quantidade === 1) return `${quantidade} copo de água`;
  return `${quantidade} copos de água`;
};

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
