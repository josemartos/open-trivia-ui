module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/test/setupEnzyme.js'],
  coveragePathIgnorePatterns: ['<rootDir>/.next/', '/node_modules/'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mocks/fileTransformer.js',
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^src[/](.+)': '<rootDir>/src/$1',
    '^pages[/](.+)': '<rootDir>/pages/$1',
    '^assets[/](.+)': '<rootDir>/public/assets/$1',
  },
};
