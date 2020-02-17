const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require('cors');

const { addUser, removeUser, getUser, getRoomUsers } = require("./users.js");

const router = require("./router");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors);
app.use(router);

io.on("connection", socket => {
  console.log("new connection");

  socket.on("join-chatroom", ({ name, room }, callback) => {
    console.log(name, room);
    const { user, error } = addUser({ id: socket.id, name, room });
    console.log(user);
    if (error) return callback(error);

    // we emit event from server to clien!!!
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, Welcome to ${user.room}`
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name}, has joined to ${user.room}`
    });
    socket.join(user.room);

    callback(error);
  });

  // here we expect client side to pass needed parametars to server side
  socket.on("userMessage", (message, callback) => {
    const user = getUser(socket.id);
    if (user && user.room) {
      io.to(user.room).emit("message", { user: user.name, text: message });
    }
    else
    // this is to do something after the message is send to front end
    callback();
  });

  socket.on("disconnect", () => {
    console.log(`disconnect socket:`);
  });
});

server.listen(PORT, () => {
  return console.log(`server is started on ${PORT}`);
});

