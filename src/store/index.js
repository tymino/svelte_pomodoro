import { writable } from 'svelte/store';

export const statusIndex = writable(0);
export const resetTimer = writable(null);

export const time = writable([
  { name: 'pomodoro', value: 20, min: 20, max: 40 },
  { name: 'short break', value: 5, min: 5, max: 10 },
  { name: 'long break', value: 15, min: 15, max: 30 },
]);

export const activeFont = writable({
  active: 'Roboto',
  data: ['Comfortaa', 'Red Hat Mono', 'Roboto'],
});

export const activeColor = writable({
  active: '#d682fb',
  data: ['#f46d67', '#6ff3f7', '#d682fb'],
});
