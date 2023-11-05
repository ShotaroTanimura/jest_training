const matchChara = require('./chara');
// jest.mock('./chara');

describe('matchChara function', () => {
  test('returns the correct match count when strings match', () => {
    expect(matchChara("abc", "abc")).toBe(3);
  });

  // 他の異なる引数やシナリオでテストを追加...
});

