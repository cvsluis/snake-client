const IP = 'localhost';
const PORT = 50541;

let PLAYER_NAME = process.argv[2];
if (process.argv[2] === undefined) {
  PLAYER_NAME = 'snk';
}

const INPUT_KEYS = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  h: "Say: Snake is hungry",
  j: "Say: I will win!",
  k: "Say: Gotcha",
  l: "Say: nom nom nom"
};

module.exports = {
  IP,
  PORT,
  PLAYER_NAME,
  INPUT_KEYS
};
