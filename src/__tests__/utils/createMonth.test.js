import {createMonth} from  '../../utils/createMonth.js';

describe("test Month by number", () => {
  it("should be name of month", () => {
    const result = createMonth(5)
    expect(result).toBe("Май");
  })
})
