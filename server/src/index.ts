import express from "express";
import http from "http";
import { Server } from "socket.io";
const programmingLanguagesRouter = require('./routes/seed');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

app.use('/seed', programmingLanguagesRouter );

server.listen(4000, () => {
  console.log("listening on *:4000");
});
