const net = require("net");
const { IP, PORT, playerName } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${playerName}`);
    // conn.write("Move: up");
    // setTimeout(() => conn.write("Move: down"), 1000);
    // setInterval(() => conn.write("Move: left"), 1000);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };