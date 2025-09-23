import { SCREEN } from "../constants";

let posX: number, posY: number;
let prevPosX: number, prevPosY: number;

const STEP_SIZE = 50;

const colors = [
  [245, 245, 245],
  [130, 243, 255],
  [230, 81, 0],
  [255, 213, 79],
];

export const RWSetup = () => {
  p.stroke(255);

  // 中心から開始
  posX = SCREEN.width / 2;
  posY = SCREEN.height / 2;
};

export const RWDraw = () => {
  // for (let i = 0; i <= 1.1; i++) {
  const direction = p.random(4);
  switch (true) {
    case direction < 1:
      posX += STEP_SIZE;
      break;
    case direction < 2:
      posX -= STEP_SIZE;
      break;
    case direction < 3:
      posY += STEP_SIZE;
      break;
    default:
      posY -= STEP_SIZE;
  }

  p.stroke(colors[Math.floor(direction)]);

  /* 画面外に出たら反対側から出現 */
  if (posX < -20) posX = SCREEN.width;
  if (posX > SCREEN.width - 20) posX = 0;
  if (posY < -20) posY = SCREEN.height;
  if (posY > SCREEN.height - 20) posY = 0;
  // }

  p.line(prevPosX, prevPosY, posX, posY);

  prevPosX = posX;
  prevPosY = posY;
};
