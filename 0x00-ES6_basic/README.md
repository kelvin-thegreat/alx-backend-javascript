## 0x00. ES6 Basics Projects Solution
### What ES6 is
### New features introduced in ES6
1. The difference between a constant and a variable
2. Block-scoped variables
3. Arrow functions and function parameters default to them
4. Rest and spread function parameters
5. String templating in ES6
6. Object creation and their properties in ES6
7. Iterators and for-of loops

## Setup
### Install NodeJS 12.11.x (in your home directory):

1. curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
2. sudo bash nodesource_setup.sh
3. sudo apt install nodejs -y
### Check Version 
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

### Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

### Configuration files
Add the files below to your project directory

1. package.json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

2. babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

3. .eslintrc.js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
###  Finally
 run npm install from the terminal of your project folder to install all necessary project dependencies.
