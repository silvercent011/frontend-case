<script setup lang="ts">
const {
  timerRunning,
  timerPaused,
  hours,
  minutes,
  seconds,
  startTimer,
  pauseTimer,
  stopTimer,
  formatTime,
} = useTimer();

const isRunning = computed(() => timerRunning.value && !timerPaused.value);

const statusMessage = computed(() => {
  return isRunning.value ? "Em andamento" : "Aguardando";
});

const isTouched = ref(false);

const handleTouchStart = () => {
  isTouched.value = true;
};
</script>

<template>
  <Card
    @click="handleTouchStart"
    class="v-span-2"
    title="Rastreador de Tempo"
    icon="ri:timer-flash-line"
  >
    <template #header>
      <Button small icon="ri:history-line">Histórico</Button>
    </template>

    <ContentCard icon="logos:monday-icon" title="TrackApp">
      <div class="padding-16 flex flex-column counter align-center gap-10">
        <span class="subheading-small">{{ statusMessage }}</span>
        <span class="timer"
          >{{ formatTime(hours) }}:{{ formatTime(minutes)
          }}<span class="timer-seconds">:{{ formatTime(seconds) }}</span>
        </span>

        <DashboardTimeTrackerLocalButton
          v-if="!isRunning"
          @click="startTimer"
          icon="ri:play-fill"
          color="orange"
        >
          Iniciar
        </DashboardTimeTrackerLocalButton>

        <div class="flex gap-16" v-else>
          <DashboardTimeTrackerLocalButton
            @click="pauseTimer"
            icon="ri:pause-circle-fill"
            color="black"
          >
            Pausar
          </DashboardTimeTrackerLocalButton>
          <Divider orientation="vertical" />
          <DashboardTimeTrackerLocalButton
            @click="stopTimer"
            icon="ri:stop-fill"
            color="red"
          >
            Parar
          </DashboardTimeTrackerLocalButton>
        </div>
      </div>
    </ContentCard>

    <div
      v-if="!isTouched"
      class="flex flex-column gap-12 padding-y-8 align-center"
    >
      <DashboardTimeTrackerNoActivity />
      <span class="paragraph-large">Sem registro de atividades</span>
    </div>

    <div v-else>
      <DashboardTimeTrackerRecentActivity />
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.counter {
  text-align: center;
}

.timer {
  color: $main-900;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.4px;
}

.timer-seconds {
  color: $soft-400;
}
</style>
