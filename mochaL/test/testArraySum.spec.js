const { expect } = require('chai');
const Calculator = require('../calculator.js');

const calc = new Calculator();

describe('Check ArraySum', function () {
  it('ArraySum > positive numbers: check sum of [10, 5, 5, 1]=21', async () => {
    const result = calc.add(10, 5, 5, 1);
    expect(result).to.equal(21);
  });

  it('ArraySum > negative numbers: check sum of [-10, -5, -5, -1]=-21', async () => {
    const result = calc.add(-10, -5, -5, -1);
    expect(result).to.equal(-21);
  });

  it('ArraySum > decimal numbers: check sum of [10.22, 5.11, 2.2]=17.53', async () => {
    const result = calc.add(10.22, 5.11, 2.2);
    expect(result).to.equal(17.53);
  });

  it('ArraySum > mixed numbers: check sum of [-10, 5, -2, 0, 1.211]=-5.789', async () => {
    const result = calc.add(-10, 5, -2, 0, 1.211);
    expect(result).to.equal(-5.789);
  });

  it('ArraySum > only 0: [0, 0, 0, 0]=0', async () => {
    const result = calc.add(0, 0, 0, 0);
    expect(result).to.equal(0);
  });

  it('ArraySum > strings instead of numbers: isNaN should be true', async () => {
    const result = isNaN(calc.add('sss', 'ddd', 'sdsd'));
    expect(result).to.equal(true);
  });

  it('ArraySum > string&number: isNaN should be true', async () => {
    const result = isNaN(calc.add(100, 'ddd', 22));
    expect(result).to.equal(true);
  });
});
