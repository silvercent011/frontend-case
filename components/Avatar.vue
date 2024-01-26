<script lang="ts" setup>
interface AvatarProps {
  name: string;
  src: string;
}

defineProps<AvatarProps>();
</script>

<template>
  <img class="avatar" :src="src" :alt="`${name} avatar`" />
</template>

<style lang="scss" scoped>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
