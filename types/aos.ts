declare module 'aos' {
  interface AOSOptions {
    duration?: number;
    delay?: number;
    offset?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: boolean | string;
  }

  export function init(options?: AOSOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
}