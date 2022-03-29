import { writable } from 'svelte/store';

export const statusIndex = writable(0);

// time:
// pomodoro 20-30
// short 5-10
// long 15-30
export const time = writable([
  { name: 'pomodoro', value: .02, min: 0, max: 0 },
  { name: 'short break', value: .02, min: 0, max: 0 },
  { name: 'long break', value: .1, min: 0, max: 0 },
]);
export const timerData = writable({

});
export const activeFont = writable({
  active: 'Roboto',
  data: ['Comfortaa', 'Red Hat Mono', 'Roboto'],
});
export const activeColor = writable({
  active: '#d682fb',
  data: ['#f46d67', '#6ff3f7', '#d682fb'],
});
