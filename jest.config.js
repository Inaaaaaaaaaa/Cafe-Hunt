module.exports = {
  // Specifies the environment in which the tests should be executed
  testEnvironment: 'jsdom',

  // Path to a module that runs some code to configure or set up the testing framework before each test file in the suite is executed
  setupFilesAfterEnv: [
    // Setup file for Jest that might contain global configurations, React Testing Library cleanup, etc.
    "<rootDir>/setupTests.js"
  ],

  // List of file extensions for modules considered by Jest
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  // Mapping of regex patterns for modules to paths that point to mock files, handling static assets
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',  // This line handles CSS imports by mapping them to a proxy
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
},
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    // Remove or comment out the next line if it's causing issues
    // '^.+\\.css$': '<rootDir>/__mocks__/styleMock.js'
},
  testMatch: [
    '**/__tests__/**/*.js?(x)',  // This should match JavaScript and JSX files under any __tests__ directories
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/index.js',
    '!src/reportWebVitals.js',
    '!src/setupTests.js'
  ],
  coverageReporters: ['html', 'text'],
};