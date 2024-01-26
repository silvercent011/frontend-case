<script lang="ts" setup>
interface ShortCutProps {
  index: number;
}

defineProps<ShortCutProps>();
</script>

<template>
  <div class="padding-x-6 shortcut">⌘ {{ index }}</div>
</template>

<style lang="scss" scoped>
.shortcut {
  color: $soft-400;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid $soft-200;
}
</style>
