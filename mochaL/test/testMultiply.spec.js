const { expect } = require('chai');
const Calculator = require('../calculator.js');

const calc = new Calculator();

describe('Check Multiply', function () {
  it('Multiply > positive numbers: check multiply of [10, 5, 5, 1]=250', async () => {
    const result = calc.multiply(10, 5, 5, 1);
    expect(result).to.equal(250);
  });

  it('Multiply > negative numbers: check multiply of [-10, -5, -5, -1]=250', async () => {
    const result = calc.multiply(-10, -5, -5, -1);
    expect(result).to.equal(250);
  });

  it('Multiply > decimal numbers: check multiply of [10.22, 5.1, 2.2]=114.6684', async () => {
    const result = calc.multiply(10.22, 5.1, 2.2);
    expect(result).to.equal(114.6684);
  });

  it('Multiply > mixed numbers: check multiply of [-10, 5, -2, -1.2]=-120', async () => {
    const result = calc.multiply(-10, 5, -2, -1.2);
    expect(result).to.equal(-120);
  });

  it('Multiply > using 0: check multiply of [10, 5, 0]=0', async () => {
    const result = calc.multiply(10, 5, 0);
    expect(result).to.equal(0);
  });

  it('Multiply > using 0: check multiply of [0, 0, 0]=0', async () => {
    const result = calc.multiply(0, 0, 0);
    expect(result).to.equal(0);
  });

  it('Multiply > strings instead of numbers: isNaN should be true', async () => {
    const result = isNaN(calc.multiply('sss', 'ddd'));
    expect(result).to.equal(true);
  });

  it('Multiply > string&number: isNaN should be true', async () => {
    const result = isNaN(calc.multiply(100, 'ddd', 25));
    expect(result).to.equal(true);
  });
});
