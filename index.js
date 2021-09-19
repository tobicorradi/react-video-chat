const app = require("express")()
const server = require("http").createServer(app)
const cors = require("cors")
// Socket IO configuration
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

app.use(cors())

const PORT = process.env.PORT || 5000
// We check if the server is running
app.get("/", (req, res) => {
    res.send("Server working :)")
})

io.on("connection", (socket) => {
    socket.emit("me", socket.id) //Me connecting
    socket.on("disconnect", () => {
        socket.broadcast.emit("Call finished")
    })
    socket.on("calluser", ({ userToCall, signalData, from, name}) => {
        io.to(userToCall).emit("calluser", {signal: signalData, from, name})
    })
    socket.on("answercall", () => {
        io.to(data.to).emit("callaccepted", data.signal)
    })
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))