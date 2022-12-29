import EventManager from '../lib/EventMenager';

export const toastEventManager = new EventManager();

export function toast({ type, text, duration }) {
  toastEventManager.emit('addtoast', { type, text, duration });
}
