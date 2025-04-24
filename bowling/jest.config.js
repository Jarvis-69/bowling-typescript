/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"]    // ← ensure it only grabs tests/ files :contentReference[oaicite:4]{index=4}&#8203;:contentReference[oaicite:5]{index=5}
};
