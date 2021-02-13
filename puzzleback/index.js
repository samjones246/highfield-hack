const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer, {
    cors: {
        origin: ["http://localhost:4200","http://barelyfunctional.tech:4200"],
        methods: ["GET", "POST"],
        credentials: true
    },
    allowEIO3: true
});
const port = 3434;
let idList = [];
let clicks = 0;

io.on('connection', socket => {
    var id = socket.id;
    console.log("New connection, id: " + id);
    idList.push(id);
    socket.emit('join', id);
    io.emit("update_players", idList);
    io.emit("update_count", clicks);
    socket.on('disconnect', () => {
        console.log(id + " disconnected");
        idList = idList.filter(i => i != id);
        io.emit("update_players", idList);
    });
    socket.on("click", () => {
        clicks++;
        io.emit("update_count", clicks);
    })
});

httpServer.listen(port, "0.0.0.0");
console.log("Listening for connections...")
