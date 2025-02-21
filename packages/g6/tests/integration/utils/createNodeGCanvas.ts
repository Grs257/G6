import { Canvas, resetEntityCounter } from '@antv/g';
import { Plugin as DragAndDropPlugin } from '@antv/g-plugin-dragndrop';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { OffscreenCanvasContext } from './offscreenCanvasContext';

/**
 *
 * @param dom
 * @param width
 * @param height
 */
export function createNodeGCanvas(dom: HTMLDivElement, width: number, height: number): Canvas {
  resetEntityCounter();
  // setMockMeasureTextWidth(measureText);
  const offscreenNodeCanvas = {
    getContext: () => context,
  } as unknown as HTMLCanvasElement;
  const context = new OffscreenCanvasContext(offscreenNodeCanvas);

  const renderer = new SVGRenderer();
  renderer.registerPlugin(new DragAndDropPlugin({ dragstartDistanceThreshold: 10 }));
  return new Canvas({
    container: dom,
    width,
    height,
    // @ts-ignore
    renderer,
    document: dom.ownerDocument,
    offscreenCanvas: offscreenNodeCanvas as any,
  });
}
