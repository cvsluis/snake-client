# 🐍 Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/cvsluis/snek-multiplayer). 

## Credits

The server code for this game was not written from scratch. It is a modified version of the single player game [Snek](https://github.com/taniarascia/snek) created by [Tania Rascia](https://www.taniarascia.com).

## Purpose

This client project was built as a part of my learnings at [Lighthouse Labs](https://www.lighthouselabs.ca).

## Final Product

!["image of two player snake client project"](https://github.com/cvsluis/snake-client/assets/122842285/bc813b12-9516-4c62-ac24-ed34738958b9)

## Getting Started

- Follow steps inside the [snek server repo](https://github.com/cvsluis/snek-multiplayer) to run the server side.
- Run the development snake client using the `node play.js` command, and type in a three letter username.
```
node play.js Cat
```

## How to Play

- Use `W` `A` `S` `D` to navigate the snake up, left, down, or right. If the snake collides with the wall or its own tail, it's game over. 
- Use `h` `j` `k` `l` to send different special canned messages.
- Press `Ctrl` + `C` to quit the game.
