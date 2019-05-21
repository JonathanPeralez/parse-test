const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse');
const babelTypes = require('@babel/types');
const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, 'react_files', 'component.js');
const file = fs.readFileSync(bundlePath, 'utf8');

const ast = babelParser.parse(file, {
  sourceType: 'module',
  plugins: ['jsx']
});

const writePath = path.join(__dirname, 'ast', 'ast.json');
fs.writeFileSync(writePath, JSON.stringify(ast), 'utf8');
console.log('ast.json file written');