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
    class="fav rounded-small padding-x-12 padding-y-8 flex justify-center align-center gap-8"
  >
    <SideBarFavLegendDot :color="color" />

    <span class="label-small hide-on-mobile">
      {{ label }}
    </span>

    <SideBarShortcut class="hide-on-mobile" :index="mappingIndex" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
span {
  flex: 1;
}

.fav {
  &:hover {
    background: $soft-200;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
}
</style>
