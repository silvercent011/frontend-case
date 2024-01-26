<script lang="ts" setup>
interface FavLegendDotProps {
  color: string;
}

const props = defineProps<FavLegendDotProps>();
</script>

<template>
  <div class="legend-dot"></div>
</template>

<style lang="scss" scoped>
.legend-dot {
  flex-shrink: 0;
  border-radius: 12px;
  border: 2px solid $white-0;
  width: 0.5rem;
  height: 0.5rem;
  box-shadow: 0px 2px 4px 0px rgba(27, 28, 29, 0.04);
  @include background(v-bind(color));
}
</style>
