"use strict";
import PopUp from "./popup.js";
import * as sound from "./sound.js";
import { GameBuilder, Reason } from "./game.js";

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
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "REPLAY❓";
      sound.playAlert();
      break;
    case Reason.win:
      message = "YOU WON 🚀";
      sound.playWin();
      break;
    case Reason.lose:
      message = "YOU LOST 👻";
      sound.playBug();
      break;
    default:
      throw new Error("Not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
