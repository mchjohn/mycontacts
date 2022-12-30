export default class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    // Without the get method the listener would be overwritten
    this.listeners.get(event).push(listener);
  }

  emit(event, payload) {
    if (!this.listeners.has(event)) return;

    this.listeners.get(event).forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners.get(event);

    if (!listeners) return;

    const filteredListeners = listeners.filter((listener) => listener !== listenerToRemove);

    // Overwrite the listeners
    this.listeners.set(event, filteredListeners);
  }
}
