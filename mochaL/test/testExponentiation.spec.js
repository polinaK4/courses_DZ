const { expect } = require('chai');
const Calculator = require('../calculator.js');

const calc = new Calculator();

describe('Check Exponentiation', function () {
  it('Exponentiation > positive numbers: check with 10 and =100', async () => {
    const result = calc.exponentiation(10);
    expect(result).to.equal(100);
  });

  it('Exponentiation > negative numbers: check with -10 and =100', async () => {
    const result = calc.exponentiation(-10);
    expect(result).to.equal(100);
  });

  it('Exponentiation > using 0: check with 0 and =0', async () => {
    const result = calc.exponentiation(0);
    expect(result).to.equal(0);
  });

  it('Exponentiation > decimal numbers: check with 5.22 and =27.2484', async () => {
    const result = calc.exponentiation(5.22);
    expect(result).to.equal(27.2484);
  });

  it('Exponentiation > string instead of number: isNaN should be true', async () => {
    const result = isNaN(calc.exponentiation('sss'));
    expect(result).to.equal(true);
  });
});
