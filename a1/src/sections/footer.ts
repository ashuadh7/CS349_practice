import type { Drawable } from "./drawable";

export class FooterDrawable implements Drawable {
    draw(gc: CanvasRenderingContext2D) : void {
        const canvas = gc.canvas;
        const width = canvas.width;
        const height = canvas.height * 0.1;
        const message = "Press SPACE to play";

        gc.save();
        gc.translate(0, canvas.height* 0.9);
        gc.fillStyle = "darkslategrey";
        gc.fillRect(0,0,canvas.width, height);

        gc.fillStyle = "white";
        gc.font = "24px sans-serif";
        const textWidth = gc.measureText(message).width;
        const startX = (width - textWidth)/2;
        const startY = height/2;
        gc.fillText(message, startX, startY);
        gc.restore();
    }
}