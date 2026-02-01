import { setSKDrawCallback, startSimpleKit } from "simplekit/canvas-mode";

startSimpleKit();

setSKDrawCallback((gc) => {
  gc.fillRect(10, 10, 50, 50);
});
