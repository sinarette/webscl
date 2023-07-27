const readline = require("readline");

const socket = require("./socket");

socket.connect();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    socket.emit("CLIENT_SEND", line);
    console.log("Sent: " + line);
});
