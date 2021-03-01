import { reverseString } from "../index";

describe("Test function - reverseString", () => {
    it("Reverse the entered string", () => expect(reverseString("Test_string")).toBe("gnirts_tseT")),
    it("Not string value", () => expect(reverseString(123)).toBe(""));
});