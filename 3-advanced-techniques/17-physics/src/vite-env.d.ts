/// <reference types="vite/client" />

interface Body {
  addEventListener(
    type: "collide",
    listener: (event: ICollisionEvent) => void
  ): void;
}

interface ICollisionEvent {
  body: CANNON.Body;
  target: CANNON.Body;
  contact: any;
}
