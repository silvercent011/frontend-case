export default function useTimer() {
  const timerRunning = ref(false);
  const timerPaused = ref(false);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  const intervalId = ref();

  const resetTimer = () => {
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
  };

  const CI = () => {
    clearInterval(intervalId.value);
  };

  const startTimer = () => {
    if (timerPaused.value) {
      timerPaused.value = false;
    } else {
      resetTimer();
    }

    timerRunning.value = true;
    CI();

    intervalId.value = setInterval(() => {
      seconds.value++;
      if (seconds.value === 60) {
        seconds.value = 0;
        minutes.value++;
        if (minutes.value === 60) {
          minutes.value = 0;
          hours.value++;
        }
      }
    }, 1000);
  };

  const pauseTimer = (): void => {
    timerPaused.value = true;
    CI();
  };

  const stopTimer = () => {
    timerRunning.value = false;
    CI();
    resetTimer();
  };

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  watch(timerRunning, (newVal) => {
    if (!newVal) {
      CI();
    }
  });

  onBeforeUnmount(() => {
    CI();
  });

  return {
    timerRunning,
    timerPaused,
    hours,
    minutes,
    seconds,
    startTimer,
    pauseTimer,
    stopTimer,
    formatTime,
  };
}
