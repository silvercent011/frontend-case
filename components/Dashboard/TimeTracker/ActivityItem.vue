<script setup lang="ts">
interface ActivityItemProps {
  title: string;
  time: string;
  imgSrc: string;
}

defineProps<ActivityItemProps>();
</script>

<template>
  <div class="flex gap-10 space-between align-center">
    <img :src="imgSrc" class="activity-icon flex align-center padding-8" />
    <div class="flex flex-column gap-4 content">
      <span class="label">{{ title }} </span>
      <span class="paragraph">{{ time }}</span>
    </div>
    <Icon name="ri:more-2-line" class="icon" size="20" />
  </div>
</template>

<style lang="scss" scoped>
.activity-icon {
  border-radius: 50%;
  border: 1px solid $soft-200;
  background: $white-0;
  height: 40px;
  width: 40px;
}

.content {
  flex: 1;
}
</style>
