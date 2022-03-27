<script>
  import StatusBar from './components/StatusBar.svelte';
  import Modal from './components/Modal/Modal.svelte';
</script>

<main>
  <StatusBar />
  <Modal />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
