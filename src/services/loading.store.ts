type Listener = (count: number) => void;

let activeRequests = 0;
const listeners = new Set<Listener>();

export function increment() {
  activeRequests += 1;
  listeners.forEach((l) => l(activeRequests));
}

export function decrement() {
  activeRequests = Math.max(0, activeRequests - 1);
  listeners.forEach((l) => l(activeRequests));
}

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getActiveRequests() {
  return activeRequests;
}
