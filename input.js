const { inputKeys } = require("./constants");

// declare global variable for connection
let connection;

const setupInput = (conn) => {
  // assign conn object argument to connection variable
  connection = conn;
  // setup interface to handle user input from stdin
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // 'data' event handler
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  // exit on ctrl+c
  if (key === '\u0003') {
    process.exit();
    // use imported inputKeys to write to server
  } else {
    connection.write(inputKeys[key]);
  }
};

module.exports = { setupInput };