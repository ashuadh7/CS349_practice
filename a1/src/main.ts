import { setSKDrawCallback, startSimpleKit } from "simplekit/canvas-mode";
import { HeaderDrawable } from "./sections/header";
import { FooterDrawable } from "./sections/footer";
import type { Drawable } from "./sections/drawable";
import { BodyDrawable } from "./sections/body";

startSimpleKit();

class DrawableManager{
  private drawables: Drawable[] = [];

  addDrawable(drawable: Drawable): void {
    this.drawables.push(drawable);
  }

  drawAll(gc: CanvasRenderingContext2D) : void {
    this.drawables.forEach((drawable) => drawable.draw(gc));
  }
}

const drawableManager = new DrawableManager();
drawableManager.addDrawable(new HeaderDrawable());
drawableManager.addDrawable(new FooterDrawable());
drawableManager.addDrawable(new BodyDrawable());

setSKDrawCallback((gc) => {
  drawableManager.drawAll(gc);
});
