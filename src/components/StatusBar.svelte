<script>
  export let statusIndex;

  let statusName = ['pomodoro', 'short break', 'long break'];
</script>

<div class="container">
  <div class="bar">
    {#each statusName as name}
      <div class="bar__name">{name}</div>
    {/each}
    <div class="bar__selected" style="transform: translateX({116 * statusIndex}px)" />
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

    background: #151932;
    border: 1px solid black;
    border-radius: 40px;
  }

  .bar__name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--btn-width);
    height: var(--btn-height);

    color: #585c75;
    line-height: 20px;
    font-weight: bold;
    z-index: 2;
  }
  .bar__selected {
    position: absolute;
    top: var(--padding);
    left: var(--padding);
    width: var(--btn-width);
    height: var(--btn-height);
    background: #fa706d;
    border-radius: 40px;

    transition: all 0.6s ease-in-out;
  }
</style>
