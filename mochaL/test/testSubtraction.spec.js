const { expect } = require('chai');
const Calculator = require('../calculator.js');

const calc = new Calculator();

describe('Check Subtraction', function () {
  it('Subtraction > positive numbers: check that 10-5=5', async () => {
    const result = calc.subtraction(10, 5);
    expect(result).to.equal(5);
  });

  it('Subtraction > negative numbers: check that -10-(-5)=-5', async () => {
    const result = calc.subtraction(-10, -5);
    expect(result).to.equal(-5);
  });

  it('Subtraction > positive&negative numbers: check that 10-(-5)=15', async () => {
    const result = calc.subtraction(10, -5);
    expect(result).to.equal(15);
  });

  it('Subtraction > using 0: check that 10-0=10', async () => {
    const result = calc.subtraction(10, 0);
    expect(result).to.equal(10);
  });

  it('Subtraction > using 0: check that 0-10=-10', async () => {
    const result = calc.subtraction(0, 10);
    expect(result).to.equal(-10);
  });

  it('Subtraction > using 0: check that 0-0=0', async () => {
    const result = calc.subtraction(0, 0);
    expect(result).to.equal(0);
  });

  it('Subtraction > decimal numbers: check that 10.2-3.66=6.54', async () => {
    const result = calc.subtraction(10.2, 3.66);
    expect(result).to.equal(6.54);
  });

  it('Subtraction > strings instead of numbers: isNaN should be true', async () => {
    const result = isNaN(calc.subtraction('sss', 'ddd'));
    expect(result).to.equal(true);
  });

  it('Subtraction > string&number: isNaN should be true', async () => {
    const result = isNaN(calc.subtraction(100, 'ddd'));
    expect(result).to.equal(true);
  });

});
