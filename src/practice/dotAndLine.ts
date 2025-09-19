import p5 from "p5";

const NUM_POINTS = 100;
const MAX_LINE_DIST = 100;
type Point = { x: number; y: number; vx: number; vy: number };
const points: Point[] = [];

export const dotAndLine = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.stroke(255, 100);

    for (let i = 0; i < NUM_POINTS; i++) {
      /* 点群の初期化 */
      const point = {
        x: p.random(p.width),
        y: p.random(p.height),
        vx: p.random(-1, 1),
        vy: p.random(-1, 1),
      };
      points.push(point);
    }
  };

  p.draw = () => {
    p.background(0);

    for (const point of points) {
      /* 与えられた速度で移動 */
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < 0 || point.x > p.width) {
        point.vx *= -1;
      }
      if (point.y < 0 || point.y > p.height) {
        point.vy *= -1;
      }

      p.point(point.x, point.y);
    }

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const d = p.dist(points[i].x, points[i].y, points[j].x, points[j].y);
        if (d < MAX_LINE_DIST) {
          p.line(points[i].x, points[i].y, points[j].x, points[j].y);

          /* マウスカーソル付近の線の透明度を距離に応じて変える */
          const md = p.dist(
            p.mouseX,
            p.mouseY,
            (points[i].x + points[j].x) / 2,
            (points[i].y + points[j].y) / 2
          );
          if (md < MAX_LINE_DIST) {
            const alpha = p.map(md, 0, MAX_LINE_DIST, 25, 0);
            p.line(points[i].x, points[i].y, points[j].x, points[j].y);
            p.stroke(255, alpha);
          }
        }
      }
    }
  };
};
