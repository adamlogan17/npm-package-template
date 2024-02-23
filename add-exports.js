import fs from 'fs';

function addExportStatements(directory) {
	// Read the file
	const content = fs.readFileSync(directory, 'utf8');

	const testContent = fs.readFileSync('./dist/main.d.ts', 'utf8');

	// Add export statements to all types
	const modifiedContent = content.replace(/(type|interface|class|enum) (\w+)/g, 'export $1 $2');

	const test = testContent + '\n' + modifiedContent;

	// Write the modified content back to the file
	fs.writeFileSync('./dist/main.d.ts', test);
}

addExportStatements('./lib/types.d.ts');
