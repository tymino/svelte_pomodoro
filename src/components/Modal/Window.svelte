<script>
  import { createEventDispatcher } from 'svelte';
  import { time, activeFont, activeColor } from '../../store';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  // $: console.log($activeFont);

  const setFont = (font) => {
    activeFont.set({ ...$activeFont, active: font });
  };
  const setColor = (color) => {
    activeColor.set({ ...$activeColor, active: color });
  };
</script>

<div class="window">
  <div class="window__header">
    <div class="window__title">Settings</div>
    <div class="window__close" on:click={close} />
  </div>
  <div class="window__body">
    <div class="time">
      <div class="time__title">time (minutes)</div>
      <div class="time__input-wrapper">
        {#each $time as { name, value }}
          <div class="time__input">
            <label for={name}>{name}</label>
            <input type="number" id={name} bind:value />
          </div>
        {/each}
      </div>
    </div>

    <div class="font">
      <div class="font__title">font</div>
      {#each $activeFont.data as font}
        <div
          key={font}
          class={$activeFont.active === font ? 'font__type font__type--active' : 'font__type'}
          on:click={() => setFont(font)}
        >
          aa
        </div>
      {/each}
    </div>

    <div class="color">
      <div class="color__title">color</div>
      {#each $activeColor.data as color}
        <div key={color} class="color__type" style="background: {color}" on:click={() => setColor(color)}>
          {#if $activeColor.active === color}
            <svg
              class="color__mark"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 17.837 17.837"
              style="enable-background:new 0 0 17.837 17.837;"
              xml:space="preserve"
            >
              <g>
                <path
                  style="fill:#030104;"
                  d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27
          c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
          L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
                />
              </g>
            </svg>
          {/if}
        </div>
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
    background: #fff;
    border-radius: 20px;

    transform: translate(-50%, -50%);
  }
  .window__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 1px solid #b4b4b4;
  }
  .window__title {
    font-size: 34px;
    font-weight: bold;
  }
  .window__close {
    position: relative;
    cursor: pointer;
  }
  .window__close:hover {
    opacity: 0.7;
  }
  .window__close::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 27px;
    height: 4px;
    background: #b4b4b4;
    border-radius: 10px;

    transform: translate(-50%, 0%) rotate(45deg);
  }
  .window__close::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 27px;
    height: 4px;
    background: #b4b4b4;
    border-radius: 10px;

    transform: translate(-50%, 0%) rotate(-45deg);
  }

  .window__body {
    display: flex;
    flex-direction: column;
  }

  .time {
    margin: 0 30px;
    padding: 20px 0;
    border-bottom: 1px solid #b4b4b4;
  }
  .time__title {
    margin-bottom: 14px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .time__input-wrapper {
    display: flex;
  }
  .time__input:not(:last-child) {
    margin-right: 20px;
  }
  .time__input > label {
    font-size: 12px;
    font-weight: bold;
    line-height: 24px;
  }
  .time__input > input {
    width: 100px;
    padding: 10px;
    font-size: 22px;

    background: #eff2fa;
    border-radius: 6px;
    border: none;
  }
  .time__input > input:focus {
    outline: none;
  }

  .font {
  }
  .font__title {
  }
  .font__type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: gray;
    border-radius: 50%;
  }
  .font__type--active {
    background: darkblue;
  }

  .color {
  }
  .color__title {
  }
  .color__type {
    width: 20px;
    height: 20px;
  }
  .color__mark {
  }
</style>
