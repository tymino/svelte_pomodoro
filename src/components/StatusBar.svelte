<script>
  import { statusIndex } from '../store';

  import { onMount } from 'svelte';

  onMount(() => {
    const timer = setInterval(() => {
      console.log($statusIndex);

      statusIndex.update((n) => n + 1);

      if ($statusIndex > 2) {
        statusIndex.set(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  let statusName = ['pomodoro', 'short break', 'long break'];
</script>

<div class="container">
  <div class="bar">
    {#each statusName as name, index}
      <div class="bar__name" style={index === $statusIndex ? 'color: var(--color-back-second)' : null}>
        {name}
      </div>
    {/each}
    <div class="bar__selected" style="transform: translateX({116 * $statusIndex}px)" />
  </div>
</div>

<style>
  :root {
    --padding: 5px;
    --btn-width: 116px;
    --btn-height: 48px;
  }

  .container {
    display: flex;
    justify-content: center;
    user-select: none;
  }
  .bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--padding);

    background: var(--color-back-second);
    border-radius: 40px;
  }

  .bar__name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--btn-width);
    height: var(--btn-height);

    color: var(--color-gray);
    font-size: 15px;
    line-height: 20px;
    font-weight: bold;
    opacity: 0.7;
    z-index: 2;
    transition: color 1s ease-in;
  }
  .bar__selected {
    position: absolute;
    top: var(--padding);
    left: var(--padding);
    width: var(--btn-width);
    height: var(--btn-height);
    background: var(--theme-color);
    border-radius: 40px;
    transition: all 0.6s ease-in-out;
  }
</style>
