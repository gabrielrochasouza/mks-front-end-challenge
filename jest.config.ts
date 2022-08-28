// const nextJest = require("next/jest");
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);
