import type { Drawable } from "./drawable";

export class BodyDrawable implements Drawable {
  draw(gc: CanvasRenderingContext2D): void {
    const canvas = gc.canvas;
    const width = canvas.width;
    const height = canvas.height * 0.8;
    const xInset = 32;
    const yInset = 32;
    const borderWidth = 5;

    gc.save();
    gc.translate(0, canvas.height * 0.1);
    gc.fillStyle = "black";
    gc.fillRect(0, 0, width, height);

    gc.strokeStyle = "slategray";
    gc.lineWidth = borderWidth;
    gc.strokeRect(
      xInset + borderWidth / 2,
      yInset + borderWidth / 2,
      width - 2 * xInset - borderWidth,
      height - 2 * yInset - borderWidth,
    );
    gc.restore();
  }
}
