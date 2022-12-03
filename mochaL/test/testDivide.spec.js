const { expect } = require('chai');
const Calculator = require('../calculator.js');

const calc = new Calculator();

describe('Check Divide', function () {
  it('Divide > positive numbers: check that 10/5=2', async () => {
    const result = calc.divide(10, 5);
    expect(result).to.equal(2);
  });

  it('Divide > negative numbers: check that -10/(-5)=2', async () => {
    const result = calc.divide(-10, -5);
    expect(result).to.equal(2);
  });

  it('Divide > positive&negative numbers: check that 10/(-5)=-2', async () => {
    const result = calc.divide(10, -5);
    expect(result).to.equal(-2);
  });

  it('Divide > using 0: check that 10/0=infinity', async () => {
    const result = calc.divide(10, 0);
    expect(result).to.equal(Infinity);
  });

  it('Divide > using 0: check that 0/10=0', async () => {
    const result = calc.divide(0, 10);
    expect(result).to.equal(0);
  });

  it('Divide > using 0: check that 0/-10=0', async () => {
    const result = calc.divide(0, -10);
    expect(result).to.equal(0);
  });

  it('Divide > using 0: check that 0/0=NaN', async () => {
    const result = isNaN(calc.divide(0, 0));
    expect(result).to.equal(true);
  });

  it('Divide > decimal numbers: check that 11.55/5.25=2.2', async () => {
    const result = calc.divide(11.55, 5.25);
    expect(result).to.equal(2.2);
  });

  it('Divide > decimal numbers: check that 11/5=2.2', async () => {
    const result = calc.divide(11, 5);
    expect(result).to.equal(2.2);
  });

  it('Divide > strings instead of numbers: isNaN should be true', async () => {
    const result = isNaN(calc.divide('sss', 'ddd'));
    expect(result).to.equal(true);
  });

  it('Divide > string&number: isNaN should be true', async () => {
    const result = isNaN(calc.divide(100, 'ddd'));
    expect(result).to.equal(true);
  });
});
