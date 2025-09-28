import { colorPalettes } from "../constants";

const width = 600;
const height = 600;

export const PNSetup = () => {
  p.createCanvas(width, height);
};

const div = 12;
const w = width / div;
const h = height / div;

export const PNDrawing = () => {
  p.background(0);
  const f = p.frameCount;
  for (let i = 0; i < div; i++) {
    const x = i * w;
    for (let j = 0; j < div; j++) {
      const y = j * h;
      const s = p.noise(x * 0.005 * f * 0.01, y * 0.005 * f * 0.01);
      p.rect(x, y, w * s, h * s);
    }
  }
};
