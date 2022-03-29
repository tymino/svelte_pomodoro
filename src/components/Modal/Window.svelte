<script>
  import { createEventDispatcher } from 'svelte';
  import { time, activeFont, activeColor } from '../../store';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  const setFont = (font) => {
    activeFont.set({ ...$activeFont, active: font });
    document.querySelector(':root').style.setProperty('--theme-font', font);
  };
  const setColor = (color) => {
    activeColor.set({ ...$activeColor, active: color });
    document.querySelector(':root').style.setProperty('--theme-color', color);
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
      <div class="font__wrapper">
        {#each $activeFont.data as font}
          <div
            key={font}
            class={$activeFont.active === font ? 'font__type font__type--active' : 'font__type'}
            style="font-family: {font}"
            on:click={() => setFont(font)}
          >
            aa
          </div>
        {/each}
      </div>
    </div>

    <div class="color">
      <div class="color__title">color</div>
      <div class="color__wrapper">
        {#each $activeColor.data as color}
          <div
            key={color}
            class="color__type"
            style="background: {color}; cursor: {$activeColor.active === color ? 'default' : 'pointer'};
            {$activeColor.active === color ? 'border: 1px solid rgba(0,0,0,0)' : ''};"
            on:click={() => setColor(color)}
          >
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
  <button class="window__button" on:click={close}>apply</button>
</div>

<style>
  :root {
    --top: 12px;
    --left: 14px;
  }

  .window {
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border-radius: 20px;

    color: var(--color-back-prime);

    transform: translate(-50%, -50%);
  }
  .window__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 30px;
    border-bottom: 1px solid var(--color-gray);
  }
  .window__title {
    font-size: 34px;
    font-weight: bold;
  }
  .window__close {
    position: relative;
    cursor: pointer;
    width: 29px;
    height: 29px;
    transition: all .3s linear;

    border-radius: 50%;
  }
  .window__close:hover {
    transform: rotate(90deg);
  }

  

  .window__close::after {
    content: '';
    position: absolute;
    top: var(--top);
    left: var(--left);
    width: 28px;
    height: 4px;
    background: var(--color-gray-dark);
    border-radius: 10px;

    transform: translate(-50%, 0%) rotate(45deg);
  }
  .window__close::before {
    content: '';
    position: absolute;
    top: var(--top);
    left: var(--left);
    width: 28px;
    height: 4px;
    background: var(--color-gray-dark);
    border-radius: 10px;

    transform: translate(-50%, 0%) rotate(-45deg);
  }

  .window__body {
    display: flex;
    flex-direction: column;
  }
  .window__button {
    padding: 16px 30px;
    background: var(--theme-color);
    border: none;
    border-radius: 30px;

    color: #fff;
    font-family: var(--theme-font);
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;

    transform: translateY(50%);
    transition: box-shadow 0.4s ease;

    cursor: pointer;
  }
  .window__button:hover {
    box-shadow: 0px 4px 10px -4px inset var(--color-black);
  }

  .time {
    margin: 0 30px;
    padding: 20px 0;
    border-bottom: 1px solid var(--color-gray);
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
    color: var(--color-gray-dark);
    font-size: 12px;
    font-weight: bold;
    line-height: 24px;
  }
  .time__input > input {
    width: 100px;
    padding: 10px;

    background: var(--color-gray);
    border-radius: 6px;
    border: none;

    color: var(--color-back-prime);
    font-size: 22px;
  }
  .time__input > input:focus {
    outline: none;
  }

  .font {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
    padding: 20px 0;
    border-bottom: 1px solid var(--color-gray);
  }
  .font__title {
    font-size: 16px;
    line-height: 16px;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .font__wrapper {
    display: flex;
  }
  .font__type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--color-gray);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 50%;
    font-size: 14px;
    text-transform: capitalize;

    transition: all .3s ease-in;
    cursor: pointer;
    user-select: none;
  }
  .font__type:not(:last-child) {
    margin-right: 10px;
  }
  .font__type:hover:not(.font__type--active) {
    border: 1px solid var(--color-back-prime);
  }
  .font__type--active {
    color: #fff;
    background: #171932;
    cursor: default;
  }

  .color {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
    padding-top: 20px;
  }
  .color__title {
    font-size: 16px;
    line-height: 16px;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .color__wrapper {
    display: flex;
  }
  .color__type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0);

    transition: all .3s ease-in;
    cursor: pointer;
    user-select: none;
  }
  .color__type:hover {
    border: 1px solid var(--color-back-prime);
  }
  .color__type:not(:last-child) {
    margin-right: 10px;
  }
  .color__mark {
    width: 16px;
    height: 16px;
  }
</style>
