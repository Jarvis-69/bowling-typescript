"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreGame = void 0;
/**
 * Given a valid sequence of rolls for one line of American Ten-Pin Bowling,
 * computes the total score for the game.
 *
 * Rolls are represented as strings:
 * - "X" = strike (10 pins)
 * - "/" = spare (all remaining pins in frame)
 * - "-" = miss (0 pins)
 * - "0"–"9" = that many pins
 *
 * Example usage:
 *   scoreGame(["X","X","X", ...])  // perfect game = 300
 */
function scoreGame(rolls) {
    let score = 0;
    let rollIndex = 0;
    const pinCount = (r) => r === "X" ? 10 : r === "-" ? 0 : parseInt(r, 10);
    for (let frame = 0; frame < 10; frame++) {
        const first = rolls[rollIndex];
        if (first === "X") {
            // strike
            score += 10 + pinCount(rolls[rollIndex + 1]) + pinCount(rolls[rollIndex + 2]);
            rollIndex += 1;
        }
        else {
            const second = rolls[rollIndex + 1];
            if (second === "/") {
                // spare
                score += 10 + pinCount(rolls[rollIndex + 2]);
            }
            else {
                // open frame
                score += pinCount(first) + pinCount(second);
            }
            rollIndex += 2;
        }
    }
    return score;
}
exports.scoreGame = scoreGame;
//# sourceMappingURL=bowling.js.map