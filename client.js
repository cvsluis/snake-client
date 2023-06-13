const net = require("net");
const { IP, PORT, PLAYER_NAME } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // 'data' event handler to log data received from server
  conn.on("data", (data) => {
    console.log(data);
  });

  // 'connect' event handler to log success and send playerName to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${PLAYER_NAME}`);
  });

  // return connect object
  return conn;
};

module.exports = { connect };