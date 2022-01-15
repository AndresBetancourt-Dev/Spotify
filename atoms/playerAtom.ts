import { atom } from "recoil";
import Track from "../types/Track";

export const playState = atom({
  key: "playState",
  default: false as boolean,
});

export const playingTrackState = atom({
  key: "playingTrackState",
  default: {} as Track,
});
