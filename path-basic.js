const path = require("path")

console.log("current file info: \n")
console.log('file name', __filename);
console.log('Directory Name: ', __dirname)

console.log('\n' + "-".repeat(50) + "\n")

const filePath = "/shuvo/documents/nextlevel.pdf"

console.log('analyzing Path: ', filePath, "\n");
console.log("Directory: ", path.dirname(filePath))
console.log('Base Name: ', path.basename(__filename))