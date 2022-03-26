<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
  const changeFont = (index) => dispatch('font', index);

  export let timePomodoro;
  export let timeBreakShort;
  export let timeBreakLong;

  export let activeFont;
  export let activeColor;
</script>

<div class="window">
  <div class="window__header">
    <div class="window__title">Settings</div>
    <div class="window__close" on:click={close}>X</div>
  </div>
  <div class="window__body">
    <div class="time">
      <div class="time__title" />
      <div class="time__input-wrapper">
        <div class="time__input">
          <label for="pomodoro">pomodoro</label>
          <input type="number" id="pomodoro" value={timePomodoro} />
        </div>
        <div class="time__input">
          <label for="short">short break</label>
          <input type="number" id="short" value={timeBreakShort} />
        </div>
        <div class="time__input">
          <label for="long">long break</label>
          <input type="number" id="long" value={timeBreakLong} />
        </div>
      </div>
    </div>
    <div class="font">
      <div class="font__title">font</div>
      {#each [0, 1, 2] as elem}
        <div class="font__type" key={elem} on:click={() => changeFont(elem)}>aa</div>
      {/each}
    </div>

    <div class="color">
      <div class="color__title">color</div>
      {#each [0, 1, 2] as elem}
        <div class="color__type" key={elem} />
      {/each}
    </div>
  </div>
</div>

<style>
  .window {
    position: fixed;
    top: 50%;
    left: 50%;
    display: block;
    width: 100px;
    height: 100px;
    background: red;

    transform: translate(-50%, -50%);
  }
  .isHide {
    display: none;
  }
</style>
