/**
 * Arquivo de configuração do Jest
 */

const {resolve} = require('path')

const root = resolve(__dirname,'..');
const rootConfig = require(`${root}/jest.config.js`)

module.exports  ={
    ...rootConfig,...{
        rootDir:root,
        displayName:'tests-integration',
        testMatch:['<rootDir>/test/**/*.test.ts'],
        setupFilesAfterEnv:['<rootDir>/test/jest-setup.ts'],
    }
}