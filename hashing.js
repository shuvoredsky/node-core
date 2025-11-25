const crypto = require("crypto");

console.log('\n MD5 Hash: ');
const md5Hash = crypto.createHash("md5").update("password123").digest('hex');
const md5Hash2 = crypto.createHash("md5").update("password123").digest('hex');
console.log('input: password123')
console.log('MD5 HasedPassword: ', md5Hash)
console.log("MD5 HashPassword2: ", md5Hash2)


const sha256Hash = crypto.createHash("sha256").update('password123').digest('hex')
console.log('input: password123')
console.log('sha256 HasedPassword: ', sha256Hash)

const sha512Hash = crypto.createHash("sha512").update('password123').digest('hex')
console.log('input: password123')
console.log('sha512 HasedPassword: ', sha512Hash)