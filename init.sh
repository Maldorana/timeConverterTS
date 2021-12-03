#!/bin/bash

npm init -y
mkdir src
mkdir test

npm i typescript
npm i -D jest
npm i -D ts-jest
npm i -D ts-node
npm i -D @types/jest

echo "{
    \"compilerOptions\": {
        \"module\": \"commonjs\",
        \"noImplicitAny\": true,
        \"removeComments\": true,
        \"preserveConstEnums\": true,
        \"sourceMap\": true,
        \"target\": \"ES6\",
        \"esModuleInterop\": true,
        \"resolveJsonModule\": true,
        \"outDir\": \"dist/\"
    },
    \"include\": [\"src\",\"test\"],
    \"exclude\": [\"node_modules\"]
}" >> tsconfig.json

echo "module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
}" >> jest.config.js

echo "describe('abc', () => {
    it('cbd', () => {
        expect(1).toBe(1);
    });
});" >> test/example.test.ts

echo "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# recipe api key
.env
" >> .gitignore