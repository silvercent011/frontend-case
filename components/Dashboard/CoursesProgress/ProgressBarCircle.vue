<script setup lang="ts">
interface ProgressBarProps {
  value: number;
  min?: number;
  max?: number;
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  min: 0,
  max: 100,
});

const resolvedValue = computed(() => `${props.value}%`);
</script>

<template>
  <div class="progress-bar flex justify-center label align-center">
    <progress
      :value="value"
      :min="min"
      :max="max"
      style="visibility: hidden; height: 0; width: 0"
    ></progress>
    {{ value }}%
  </div>
</template>

<style lang="scss" scoped>
.progress-bar {
  transition: all 0.5s ease-in-out;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient($primary-base v-bind(resolvedValue), $soft-200 0);
}
</style>
