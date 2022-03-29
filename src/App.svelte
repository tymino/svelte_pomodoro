<script>
  import StatusBar from './components/StatusBar.svelte';
  import Modal from './components/Modal/Modal.svelte';
</script>

<main>
  <h1 class="title">pomodoro</h1>
  <StatusBar />
  <Modal />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    margin-top: 40px;
    margin-bottom: 50px;
    color: var(--color-gray);
    opacity: .9;
  }
</style>
