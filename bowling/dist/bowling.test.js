"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bowling_1 = require("./bowling");
describe("Bowling score calculator", () => {
    it("scores a perfect game (12 strikes) as 300", () => {
        const rolls = Array(12).fill("X");
        expect((0, bowling_1.scoreGame)(rolls)).toBe(300);
    });
    it("scores a gutter game (all misses) as 0", () => {
        const rolls = Array(20).fill("-");
        expect((0, bowling_1.scoreGame)(rolls)).toBe(0);
    });
    it("scores all nines (9, miss) as 90", () => {
        const rolls = Array(10).flatMap(() => ["9", "-"]);
        expect((0, bowling_1.scoreGame)(rolls)).toBe(90);
    });
    it("scores all spares with five (5/) plus final 5 as 150", () => {
        // ten frames of "5 /" plus one bonus "5" → total rolls = 21
        const rolls = Array(10).flatMap(() => ["5", "/"]).concat("5");
        expect((0, bowling_1.scoreGame)(rolls)).toBe(150);
    });
    it("handles a mixed game correctly", () => {
        // example: X, 7/, 9-, X, -8, 8/, -6, X, X, X81
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
        // known total = 167
        expect((0, bowling_1.scoreGame)(rolls)).toBe(167);
    });
});
//# sourceMappingURL=bowling.test.js.map