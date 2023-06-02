const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'build', 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf-8');
const updatedIndexContent = indexContent.replace(
  '<script src="/static/js/main.',
  '<script src="./static/js/main.'
);

fs.writeFileSync(indexPath, updatedIndexContent, 'utf-8');
