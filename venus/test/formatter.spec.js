/**
 * @venus-library mocha
 * @venus-code ../src/formatter.js
 */
describe('formatter', function () {
  it('should format the string', function () {
    var expected = 'Mr. James Bond';
    var actual = fmt('Mr.', 'James', 'Bond');
    expect(actual).to.be(expected);
  });
});
