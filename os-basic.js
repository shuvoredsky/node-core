const os = require("os");

console.log('System info \n');
console.log('-'.repeat(50));

console.log('Platform Details: ')
console.log('Platform: ', os.platform());
console.log('Architecture: ', os.arch());
console.log('Os type: ', os.type());
console.log("OS Release: ", os.release());
console.log("Hostname: ", os.hostname());
console.log('\nCPU info : ')
const cpus = os.cpus();
console.log('CPU Model: ', cpus[0].model)
console.log('Number of cores :', cpus.length)
console.log('CPU speed :', cpus[0].speed);

console.log('-'.repeat(50));

const totalMemory = os.totalmem();
// console.log("Total Memory :", totalMemory)
console.log("Total Memory :", (totalMemory / 1024 / 1024 / 1024).toFixed(2))
const freeMem = os.freemem();
console.log("Free Memory :", (freeMem / 1024 / 1024 / 1024).toFixed(2))

const uptime = os.uptime();
const days = Math.floor(uptime/86400);
const hours = Math.floor((uptime%86400)/3600)
const minutes = Math.floor((uptime%3600)/60);

console.log(`${days} Days ${hours} hours ${minutes} minutes`)