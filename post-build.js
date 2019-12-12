const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/mvel-expression-editor/runtime.js',
    './dist/mvel-expression-editor/polyfills.js',    
    './dist/mvel-expression-editor/main.js'
  ];

  await fs.ensureDir('mvel-expression-editor');

  await concat(files, 'mvel-expression-editor/mvel-expression-editor.js');

  await fs.copyFile('./dist/mvel-expression-editor/styles.css', 'mvel-expression-editor/styles.css');
})();
