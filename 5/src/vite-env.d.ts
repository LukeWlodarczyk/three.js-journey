/// <reference types="vite/client" />

interface Document {
  webkitFullScreenElemnt: Element | null;
  webkitExitFullscreen: () => Promise<void>;
}

interface HTMLCanvasElement {
  webkitRequestFullscreen: () => Promise<void>;
}
