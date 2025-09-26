import { colorPalettes } from "../constants";

export const TILESetup = () => {
  p.createCanvas(600, 600);
};

export const TILEDraw = (posX: number, posY: number, s: number) => {
  const cp = p.random(colorPalettes);

  for (let x = 0; x < s; x += s / 2) {
    for (let y = 0; y < s; y += s / 2) {
      if (s / 2 > 20 && p.random(1000) < 400) {
        TILEDraw(posX + x, posY + y, s / 2);
      } else {
        let pg = p.createGraphics(p.width, p.height);
        pg.background(p.random(cp.colors));
        pg.fill(255);
        pg.stroke(50);
        p.image(pg, posX + x, posY + y);
      }
    }
  }
};
