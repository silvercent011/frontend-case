export default function useDailyHours() {
  const hours = ref(0);
  const minutes = ref(0);

  const iddlePercentage = ref(0);
  const activePercentage = ref(0);
  const extraHoursPercentage = ref(0);

  function update() {
    hours.value = 12;
    minutes.value = 27;

    iddlePercentage.value = 20;
    activePercentage.value = 70;
    extraHoursPercentage.value = 10;
  }

  return {
    hours,
    minutes,
    iddlePercentage,
    activePercentage,
    extraHoursPercentage,
    update,
  };
}
