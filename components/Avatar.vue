<script lang="ts" setup>
interface AvatarProps {
  name: string;
  src: string;
  size?: number;
}

withDefaults(defineProps<AvatarProps>(), {
  size: 40,
});
</script>

<template>
  <img
    :style="{ width: `${size}px`, height: `${size}px` }"
    class="avatar"
    :src="src"
    :alt="`${name} avatar`"
  />
</template>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
}
</style>
