<script setup lang="ts">
interface DividerProps {
  orientation?: "horizontal" | "vertical";
}

withDefaults(defineProps<DividerProps>(), {
  orientation: "horizontal",
});
</script>

<template>
  <div :class="[orientation === 'horizontal' ? 'padding-x-20' : '']">
    <div
      :class="[orientation === 'horizontal' ? 'divider' : 'v-divider']"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.divider {
  height: 1px;
  background: $soft-200;
}

.v-divider {
  width: 2px;
  background: $soft-200;
  height: 100%;
}
</style>
