const { inputKeys } = require("./constants");
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  // exit on ctrl+c
  if (key === '\u0003') {
    process.exit();
  } else {
    connection.write(inputKeys[key]);
  }
};

module.exports = { setupInput };