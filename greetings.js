const args = process.argv;
// process.arg[0] = node path
// process.arg[1]= file path
// process.arg[2] = first actual argument

const name = args[2] || "guest";
const time = new Date().getHours();

let gretting;

if(time < 12){
    gretting = "good morning";
}
else if(time < 18){
    gretting = "good afternood";
}else {
    gretting = "good evening"
}

console.log(`${gretting} ${name}`)