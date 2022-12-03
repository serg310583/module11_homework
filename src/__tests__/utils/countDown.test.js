import {countDown} from  '../../utils/countDown.js';

describe("tests for countDown function", () => {
  it("should countdown from the digit", () => {
     const result = countDown (5);
    expect(result).toBe(5,4,3,2,1);
  })  
});