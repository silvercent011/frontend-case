<script setup lang="ts">
interface ContentCardProps {
  title: string;
  icon: string;
}

defineProps<ContentCardProps>();
</script>

<template>
  <div class="content-card flex flex-column">
    <div
      class="content-header padding-y-6 padding-x-10 flex space-between align-center gap-8"
    >
      <Icon class="card-icon" :name="icon" />
      <span class="title label-small">{{ title }}</span>
      <Icon name="ri:arrow-down-s-line" class="icon" />
    </div>

    <slot />
  </div>
</template>

<style lang="scss" scoped>
.title {
  flex: 1;
}

.card-icon {
  color: $soft-400;
  height: 20px;
  width: 20px;
}

.content-card {
  border-radius: 10px;
  border: 1px solid $soft-200;
  background: $white-0;
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
  overflow: hidden;
}

.content-header {
  border-bottom: 1px solid $soft-200;
  background: $weak-100;
}
</style>
