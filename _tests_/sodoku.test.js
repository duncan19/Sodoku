import { SodokuCheck } from './../src/sodoku.js';

describe('SodokuCheck', () => {

  test('if numbers has length of 9', () => {

    var sodokuCheck = new SodokuCheck([1,2,3,4,5,6,7,8,9]);
    sodokuCheck.columnArray();
    sodokuCheck.rowArray();
    console.log(sodokuCheck.gameArray);
    expect(sodokuCheck.numsMatch()).toEqual(true);
    
  });
});
