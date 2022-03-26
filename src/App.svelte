<script>
  import { onMount } from 'svelte';
  import StatusBar from './components/StatusBar.svelte';
  import Modal from './components/Modal/Modal.svelte';

  let statusIndex = 0;

  let timePomodoro = 25;
  let timeBreakShort = 15;
  let timeBreakLong = 5;

  let activeFont = 0;
  let activeColor = 0;

  // onMount(() => {
  //   const timer = setInterval(() => {
  //     console.log('test');

  //     ++statusIndex;

  //     console.log(activeFont);

  //     if (statusIndex > 2) {
  //       statusIndex = 0;
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer);
  // });
</script>

<main>
  <StatusBar {statusIndex} />
  <Modal {timePomodoro} {timeBreakShort} {timeBreakLong} {activeFont} {activeColor} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
