const socketIo = require("socket.io-client");
const socket = socketIo("http://152.67.205.18:50800");

socket.on("connect", () => {
    console.log("socket server connected");
});

socket.on("disconnect", () => {
    console.log("socket server disconnected");
    socket.connect();
});

socket.on("SERVER_SEND", (arg) => {
    console.log("Server message: " + arg);
});

module.exports = socket;