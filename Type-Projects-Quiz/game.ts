/**
 * Let's make a game s
 */

const position = {
  x: 0,
  y: 0,
};

type Direction = "up" | "down" | "left" | "right";
function move(direction: Direction) {
  if (direction === "up") {
    position.y += 1;
  } else if (direction === "down") {
    position.y -= 1;
  } else if (direction === "left") {
    position.x -= 1;
  } else if (direction === "right") {
    position.x += 1;
  } else {
    throw Error(`wrong position ${direction}`);
  }
}
console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
