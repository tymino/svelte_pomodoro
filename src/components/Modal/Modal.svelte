<script>
  import Button from './Button.svelte';
  import Window from './Window.svelte';

  let isVisibleModal = true;

  const handleToggleModal = () => {
    isVisibleModal = !isVisibleModal;
  };
  const handleCloseModal = () => {
    isVisibleModal = false;
  };
</script>

<div class="container">
  {#if isVisibleModal}
    <Window on:close={handleCloseModal} />
  {/if}

  <Button on:toggle={handleToggleModal} />
</div>

<style>
  .container {
    position: relative;
  }
</style>
