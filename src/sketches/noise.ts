import { SCREEN } from "../constants";

const colors = [
  [245, 245, 245],
  [130, 243, 255],
  [230, 81, 0],
];

export const noiseSetup = () => {
  p.createCanvas(SCREEN.width / 6, SCREEN.height / 6);
};

export const noiseDraw = (() => {
  let t = 0;

  return () => {
    const mx = p.constrain(p.mouseX, 0, SCREEN.width / 6);
    const my = p.constrain(p.mouseY, 0, SCREEN.height / 6);

    for (let i = 0; i < SCREEN.height / 6; i++) {
      for (let j = 0; j < SCREEN.height / 6; j++) {
        const idx = Math.floor(
          (p.noise(0.005 * i + mx * 0.01, 0.005 * j + my * 0.01, t) * 20) % 3
        );
        p.stroke(colors[idx][0], colors[idx][1], colors[idx][2]);
        p.square(i, j, 1);
      }
    }
    t += 0.02;
  };
})();
