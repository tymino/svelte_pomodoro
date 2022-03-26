<script>
  import Button from './Button.svelte';
  import Window from './Window.svelte';

  export let timePomodoro;
  export let timeBreakShort;
  export let timeBreakLong;

  export let activeFont;
  export let activeColor;

  let isVisibleModal;

  const handleClickModal = () => (isVisibleModal = !isVisibleModal);
  const handleClickFont = (index) => {
    activeFont = index.detail;
    console.log(activeFont);
  };

  // const handleClickModal = () => (isVisibleModal = !isVisibleModal);
</script>

<div class="container">
  {#if isVisibleModal}
    <Window
      {timePomodoro}
      {timeBreakShort}
      {timeBreakLong}
      {activeFont}
      {activeColor}
      on:close={handleClickModal}
      on:font={handleClickFont}
    />
  {/if}

  <Button {handleClickModal} />
</div>

<style>
  .container {
    position: relative;
  }
</style>
