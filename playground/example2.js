console.log("Starting example2.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

var user = os.userInfo();

fs.appendFile("./greetings2.txt", `Hello ${ user.username } your age is: ${notes.age}`, (error) => {
    if(error)
        console.log("Somethign went wrong");
    else
        console.log("Successfully updated file");
});