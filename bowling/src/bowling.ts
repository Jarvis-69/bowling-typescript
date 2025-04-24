export function scoreGame(rolls: string[]): number {
  // 1) Build a parallel array of real pin counts
  const pins: number[] = [];
  for (let i = 0; i < rolls.length; i++) {
    const r = rolls[i];
    if (r === "X") {
      pins.push(10);
    } else if (r === "-") {
      pins.push(0);
    } else if (r === "/") {
      // spare = whatever brings the frame to 10
      // Use 0 as default if previous pin doesn't exist (shouldn't happen with valid input)
      pins.push(10 - (pins[pins.length - 1] ?? 0));
    } else {
      // Ensure result is a number, default to 0 if parseInt fails
      const parsed = parseInt(r, 10);
      pins.push(isNaN(parsed) ? 0 : parsed);
    }
  }

  // 2) Score exactly 10 frames with look-ahead
  let total = 0;
  let rollIndex = 0;
  for (let frame = 0; frame < 10; frame++) {
    // Ensure we don't read past the end of the rolls array for frame type determination
    if (rollIndex >= rolls.length) {
        break; // Stop scoring if we run out of roll data
    }

    if (rolls[rollIndex] === "X") {
      // Strike: Add 10 plus next two rolls (or 0 if they don't exist using ?? 0)
      total += 10 + (pins[rollIndex + 1] ?? 0) + (pins[rollIndex + 2] ?? 0);
      rollIndex += 1;
    } else if (rollIndex + 1 < rolls.length && rolls[rollIndex + 1] === "/") { // Check bounds for rolls access
      // Spare: Add 10 plus the next roll (or 0 if it doesn't exist using ?? 0)
      total += 10 + (pins[rollIndex + 2] ?? 0);
      rollIndex += 2;
    } else {
      // Open frame: Add the two rolls for this frame (or 0 if second doesn't exist using ?? 0)
      total += (pins[rollIndex] ?? 0) + (pins[rollIndex + 1] ?? 0);
      rollIndex += 2;
    }
  }

  return total;
}