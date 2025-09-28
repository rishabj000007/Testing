export const testEnvironment = 'jsdom';
export const transform = {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest' // Use Babel for JS/TS
};
export const moduleNameMapper = {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy' // Mock styles
};
export const setupFilesAfterEnv = ['<rootDir>/jest.setup.js'];
export const testPathIgnorePatterns = ['/node_modules/', '/dist/'];
export const testMatch = ['**/__tests__/**/*.+(js|jsx)', '**/*.test.+(js|jsx)'];
