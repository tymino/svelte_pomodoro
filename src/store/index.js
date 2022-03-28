import { writable } from 'svelte/store';

export const statusIndex = writable(0);

export const time = writable([
  { name: 'pomodoro', value: 25 },
  { name: 'short break', value: 15 },
  { name: 'long break', value: 5 },
]);
export const activeFont = writable({
  active: 'Roboto',
  data: ['Comfortaa', 'Red Hat Mono', 'Roboto'],
});
export const activeColor = writable({
  active: '#d682fb',
  data: ['#f46d67', '#6ff3f7', '#d682fb'],
});
