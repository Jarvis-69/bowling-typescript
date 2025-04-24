import { scoreGame } from "../src/bowling";

describe("Bowling score calculator", () => {
  it("scores a perfect game (12 strikes) as 300", () => {
    const rolls = Array(12).fill("X");
    expect(scoreGame(rolls)).toBe(300);
  });

  it("scores a gutter game (all misses) as 0", () => {
    const rolls = Array(20).fill("-");
    expect(scoreGame(rolls)).toBe(0);
  });

  it("scores all nines (9, miss) as 90", () => {
    // const rolls = Array(10).flatMap(() => ["9", "-"]); // Original line
    const rolls: string[] = []; // Alternative setup without flatMap
    for (let i = 0; i < 10; i++) {
      rolls.push("9", "-");
    }
    expect(scoreGame(rolls)).toBe(90);
  });

  it("scores all spares with five (5/) plus final 5 as 150", () => {
    // const rolls = Array(10).flatMap(() => ["5", "/"]).concat("5"); // Original line
    const rolls: string[] = []; // Alternative setup without flatMap
    for (let i = 0; i < 10; i++) {
      rolls.push("5", "/");
    }
    rolls.push("5"); // Add the final bonus roll
    expect(scoreGame(rolls)).toBe(150);
  });

  it("handles a mixed game correctly", () => {
    const rolls = [
      "X",
      "7", "/", "9", "-",
      "X",
      "-", "8",
      "8", "/",
      "-", "6",
      "X", "X", "X",
      "8", "1"
    ];
    expect(scoreGame(rolls)).toBe(167);
  });
});
