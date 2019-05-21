const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse');
const babelTypes = require('@babel/types');
const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, 'react_files', 'component.js');
const file = fs.readFileSync(bundlePath, 'utf8');

const ast = babelParser.parse(file, {
  sourceType: 'module',
  plugins: [ 'jsx' ]
});

// html element dictionary
// We don't want to include these elements in our tree?
// This is so we can target React elements
const htmlElementsToIgnore = {
  'h2': true,
  'div': true
};

// TODO: file can have ImportDeclaration
// TODO: file can have VariableDeclaration
function returnVariableDeclarations(node) {
  const nodeObj = {};
  // iterate through declarations
  node.declarations.forEach(declarationNode => {
    nodeObj.reactElementName = declarationNode.id.name;
    const children = [];
    const childNodes = declarationNode.init.body.children;
    // iterate through children
    if (childNodes.length > 0) {
      childNodes.forEach(child => {
        if (child.type === 'JSXElement' && child.openingElement.name.type === 'JSXIdentifier' && !htmlElementsToIgnore[ child.openingElement.name.name ]) {
          children.push(child.openingElement.name.name);
        }
      });
    }
    nodeObj.children = children;
  });
  return nodeObj;
}

function createTree(ast) {
  const tree = [];
// iterate through nodes
  ast.program.body.forEach(node => {
    // check for VariableDeclarations
    switch (node.type) {
      case 'VariableDeclaration':
        tree.push(returnVariableDeclarations(node));
        break;
      default:
        break;
    }
  });
  return tree;
}

const outputPath = path.join(__dirname, 'parsed_outputs', 'output.json');
fs.writeFileSync(outputPath, JSON.stringify(createTree(ast)));
console.log('wrote file');