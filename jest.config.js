module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['babel-jest'],
    '^.+\\.scss$': 'jest-scss-transform',
  },
};
