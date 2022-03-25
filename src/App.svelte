<script>
  import { onMount } from 'svelte';
  import StatusBar from './components/StatusBar.svelte';

	let statusIndex = 0;

  // onMount(() => {
  //   const timer = setInterval(() => {
	// 		console.log('test');

	// 		++statusIndex;

	// 		if (statusIndex > 2) {
	// 			statusIndex = 0;
	// 		}
	// 	}, 1000);

  //   return () => clearInterval(timer);
  // });
</script>

<main>
  <StatusBar {statusIndex} />
</main>

<style>
</style>
