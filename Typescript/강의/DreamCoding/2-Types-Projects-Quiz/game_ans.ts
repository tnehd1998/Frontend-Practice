/**
 * Let's make a game 🕹
 */

{
  const position = { x: 0, y: 0 };

  type Command = "up" | "down" | "left" | "right";

  function move_ans(direction: Command) {
    switch (direction) {
      case "up":
        position.y++;
        break;
      case "down":
        position.y--;
        break;
      case "left":
        position.x--;
        break;
      case "right":
        position.x++;
        break;
      default:
        throw new Error(`Unknown Error : ${direction}`);
    }
  }

  console.log(position); // { x: 0, y: 0}
  move_ans("up");
  console.log(position); // { x: 0, y: 1}
  move_ans("down");
  console.log(position); // { x: 0, y: 0}
  move_ans("left");
  console.log(position); // { x: -1, y: 0}
  move_ans("right");
  console.log(position); // { x: 0, y: 0}
}
