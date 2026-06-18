import { describe, it, expect } from "vitest";
import { formatMaya, validateMaya } from "../index";

describe("Maya Utilities", () => {
  it("should format Maya number", () => {
    expect(formatMaya("09171234567")).toBe("+639171234567");
  });

  it("should validate Maya number", () => {
    expect(validateMaya("09171234567")).toBe(true);
    expect(validateMaya("12345")).toBe(false);
  });
});
