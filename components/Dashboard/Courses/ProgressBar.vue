<script setup lang="ts">
const props = defineProps<{
  progress: number;
}>();

const resolvedPercentage = computed(() => `${props.progress}%`);
</script>

<template>
  <div class="flex align-center gap-8 flex-1">
    <div class="progress-bar">
      <div class="progress"></div>
    </div>

    <span class="label">{{ resolvedPercentage }}</span>
  </div>
</template>

<style scoped lang="scss">
.label {
  color: $sub-500;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.progress-bar {
  width: 100%;
  height: 6px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;

  .progress {
    height: 100%;
    background-color: $primary-base;
    transition: width 0.3s ease-in-out;
    width: v-bind(resolvedPercentage);
  }
}
</style>
