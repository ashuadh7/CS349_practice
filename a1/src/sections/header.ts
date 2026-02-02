import type { Drawable } from "./drawable";

export class HeaderDrawable implements Drawable
{
    draw (gc: CanvasRenderingContext2D) : void {
        const canvas = gc.canvas;
        const width = canvas.width;
        const height = canvas.height * 0.1;
        const score = "Score: 0";

        gc.save();
        gc.translate(0,0);
        gc.fillStyle = 'darkslategrey';
        gc.fillRect(0,0,canvas.width, height);

        gc.fillStyle = 'white';
        gc.font = "24px sans-serif";
        const textWidth = gc.measureText(score).width;
        const startX = (width - textWidth)/2;
        const startY = height/2;
        gc.fillText(score, startX, startY);
        gc.restore;
    }
}