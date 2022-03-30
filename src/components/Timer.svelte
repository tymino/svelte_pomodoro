<script>
  import { onMount } from 'svelte';
  import { statusIndex, time, resetTimer, activeColor } from '../store';

  const MAX_COUNT_POMODORO = 3; // var = var - 1
  const LINE_WIDTH = 14;
  let canvas;
  let ctx;

  let countPomodoro = 0;
  let degrees = 360;
  let currentTime;
  let displayTime;
  let isPlayTimer;
  $: buttonName = isPlayTimer ? 'pause' : 'play';

  const correctTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const correctMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const correctSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${correctMinutes}:${correctSeconds}`;
  };

  const timeToDegree = () => {
    const percentTime = (currentTime * 100) / ($time[$statusIndex].value * 60);
    const calcDegree = (percentTime * 360) / 100;

    return Math.floor(calcDegree);
  };

  const initTime = () => {
    countPomodoro = 0;
    degrees = 360;
    isPlayTimer = false;

    currentTime = $time[$statusIndex].value * 60;
    displayTime = correctTime($time[$statusIndex].value * 60);
  };

  const initCanvas = () => {
    const radians = (degrees * Math.PI) / 180;

    canvas.width = 300;
    canvas.height = 300;

    ctx = canvas.getContext('2d');
    ctx.strokeStyle = $activeColor.active;
    ctx.lineWidth = LINE_WIDTH;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2 - 11, 0, radians, false);
    ctx.stroke();

    requestAnimationFrame(initCanvas);
  };

  const updateTimer = () => {
    if (!isPlayTimer) return;

    currentTime -= 1;
    degrees = timeToDegree();
    displayTime = correctTime(currentTime);

    if (currentTime <= 0) {
      degrees = 360;

      if ($statusIndex === 0 && countPomodoro < MAX_COUNT_POMODORO) {
        statusIndex.set(1);
      } else if ($statusIndex === 1 && countPomodoro < MAX_COUNT_POMODORO) {
        statusIndex.set(0);
        countPomodoro += 1;
      } else if ($statusIndex === 2) {
        statusIndex.set(0);
      } else {
        statusIndex.set(2);
        countPomodoro = 0;
      }

      initTime();
    }
  };

  onMount(() => {
    initTime();
    initCanvas();

    resetTimer.set(() => {
      initTime();
      initCanvas();
    });

    const timer = setInterval(() => updateTimer(), 1000);

    return () => clearInterval(timer);
  });
</script>

<div class="container">
  <div class="timer">
    <canvas class="timer__bar" width="400" height="400" stroke={$activeColor.active} bind:this={canvas} />
    <div class="timer__wrapper">
      <div class="timer__time">{displayTime}</div>
      <div class="timer__button" on:click={() => (isPlayTimer = !isPlayTimer)}>{buttonName}</div>
    </div>
  </div>
</div>

<style>
  .container {
    margin-top: 60px;
    margin-bottom: 60px;

    background: linear-gradient(-45deg, var(--color-gradient), var(--color-back-second) 70.71%);
    border-radius: 50%;
    box-shadow: -80px -60px 80px -20px var(--color-gradient), 80px 60px 80px -20px var(--color-back-second);
  }

  .timer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 14px;
    background: var(--color-back-second);
    border-radius: 50%;
  }
  .timer__bar {
    transform: rotate(-90deg);
  }
  .timer__wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    color: var(--color-white);
  }
  .timer__time {
    font-size: 5rem;
    font-weight: bold;
  }
  .timer__button {
    margin-top: 20px;
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 4px;

    cursor: pointer;
    transition: opacity .4s ease-out;
  }
  .timer__button:hover {
    opacity: .7;
  }
</style>
