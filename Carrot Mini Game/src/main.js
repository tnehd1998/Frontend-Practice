"use strict";
import PopUp from "./popup.js";
import GameBuilder from "./game.js";

const CARROT_COUNT = 20;
const BUG_COUNT = 20;
const GAME_DURATION_SEC = 20;

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withGameDuration(GAME_DURATION_SEC)
  .withCarrotCount(CARROT_COUNT)
  .withBugCount(BUG_COUNT)
  .build();

game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case "cancel":
      message = "REPLAY❓";
      break;
    case "win":
      message = "YOU WON 🚀";
      break;
    case "lose":
      message = "YOU LOST 👻";
      break;
    default:
      throw new Error("Not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
