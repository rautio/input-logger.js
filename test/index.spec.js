import init from '../src/index';

describe('Init index', () => {
  test('should be a function', () => {
    expect(typeof init).toEqual('function');
  });
  test('and return "init"', () => {
    expect(init()).toEqual('Init');
  });
});
