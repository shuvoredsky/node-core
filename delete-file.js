const fs = require("fs")

fs.writeFileSync("./output/temp.txt", "this is a temp file");

console.log('temp file created')

if(fs.existsSync("./output/temp.txt")){
    console.log('File exists!!!');
    fs.unlinkSync("./output/temp.txt")
    console.log("File deleted")
}


try{
    fs.unlinkSync("./output/temp.txt")
}catch(error){
    console.log("Error: ",error.message)
}