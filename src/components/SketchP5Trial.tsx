import p5Types from "p5";
import Sketch from "react-p5";

export default function SketchP5Trial(): JSX.Element {
  let x = 300;
  const y = 50;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.noLoop();
  };

  const draw = (p5: p5Types) => {
    p5.fill("pink");
    p5.ellipse(x, y, 70, 70);
    p5.square(300, 400, 70);
    x++;
  };

  return (
    <>
      <div id="notes">
        <Sketch setup={setup} draw={draw} />
      </div>
    </>
  );
}
