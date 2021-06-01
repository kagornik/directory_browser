import { truncateName } from "../utils/customFunction";

describe("truncate function", () => {
  it("truncate given name", () => {
    expect(truncateName("verylongnameverylongnameverylongname")).toEqual(
      "verylong..."
    );
  });
});
