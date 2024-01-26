<script setup lang="ts">
interface FavItemProps {
  url: string;
  label: string;
  color: string;
  mappingIndex: number;
}

defineProps<FavItemProps>();
</script>

<template>
  <NuxtLink
    class="rounded-small padding-x-12 padding-y-8 flex space-between align-center gap-8"
  >
    <SideBarFavLegendDot :color="color" />

    <span class="label-small">
      {{ label }}
    </span>

    <SideBarShortcut :index="mappingIndex" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
span {
  flex: 1;
}
</style>
