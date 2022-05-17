const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const http = require("http");
const WebSocketServer = require("websocket").server;

// Errors (sync):
process.on("uncaughtException", (err) => {
  console.log(err, err.name, err.message);
  console.log("Uncaught exception, shutting down...");
  process.exit(1);
});

// DB connection
const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(db, { useNewUrlParser: true }).then(() => {
  console.log("Successful connection to the MongoDB");
});

// Server settings:
const port = process.env.PORT || 5000;
const server = http.createServer(app);

// Websocket settings:
const websocket = new WebSocketServer({ httpServer: server });

let connection;
websocket.on("request", (request) => {
  connection = request.accept(null, request.origin);
  connection.on("open", () => console.log("WS connection opened"));
  connection.on("close", () => console.log("WS connection closed"));
  connection.on("message", (message) =>
    console.log(`WS message from the client: ${message.utf8Data}`)
  );
});

// Run the server
server.listen(port, () => {
  console.log("Server mode:", process.env.NODE_ENV);
  console.log(`App is running on port ${port}`);
});

// Errors (async):
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection, shutting down...");
  server.close(() => process.exit(1));
});
