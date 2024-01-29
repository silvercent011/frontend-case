<script setup lang="ts">
const isTouched = ref(false);

function touch() {
  isTouched.value = true;
}
</script>

<template>
  <Card @click="touch" title="Feedback diário" icon="ri:discuss-line">
    <Divider no-padding />

    <DashboardDailyFeedbackEmpty v-if="!isTouched" />

    <template v-else>
      <DashboardDailyFeedbackInfo />
      <DashboardDailyFeedbackInput />

      <Button>Enviar</Button>
    </template>
  </Card>
</template>
