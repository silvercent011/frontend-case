<script setup lang="ts">
const {
  activePercentage,
  extraHoursPercentage,
  iddlePercentage,
  hours,
  minutes,
  update,
} = useDailyHours();

const handleTouchStart = () => {
  update();
};
</script>

<template>
  <Card
    @click="handleTouchStart"
    title="Horas diárias de trabalho"
    icon="ri:timer-line"
  >
    <template #header>
      <Button small>Detalhes</Button>
    </template>

    <Divider no-padding />

    <span class="time-text">
      <span class="time-number"> {{ hours }} </span>
      horas
      <span class="time-number"> {{ minutes }} </span>
      minutos no total ⏳</span
    >

    <div style="height: 10px" class="flex gap-6">
      <DashboardDailyHoursActivityBar
        color="yellow"
        :percentage="iddlePercentage"
      />
      <DashboardDailyHoursActivityBar
        color="blue"
        :percentage="activePercentage"
      />
      <DashboardDailyHoursActivityBar
        color="purple"
        :percentage="extraHoursPercentage"
      />
    </div>

    <div class="flex gap-16">
      <DashboardDailyHoursActivityDescription
        color="yellow"
        title="Descanso"
        :disabled="iddlePercentage < 1"
      />
      <DashboardDailyHoursActivityDescription
        color="blue"
        title="Ativo"
        :disabled="activePercentage < 1"
      />
      <DashboardDailyHoursActivityDescription
        color="purple"
        title="Hora Extra"
        :disabled="extraHoursPercentage < 1"
      />
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.time-text {
  color: $sub-500;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.176px;
}

.time-number {
  color: $main-900;
  font-weight: 500;
}
</style>
