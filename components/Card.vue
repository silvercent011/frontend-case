<script lang="ts" setup>
interface CardProps {
  title: string;
  icon: string;
}

defineProps<CardProps>();
</script>

<template>
  <article class="rounded-medium padding-16 gap-16 flex flex-column">
    <div class="flex space-between align-center header-container">
      <div class="flex gap-8 align-center padding-y-4">
        <Icon class="card-icon" :name="icon" />
        <span class="title">{{ title }}</span>
      </div>
      <div class="flex align-center gap-12">
        <slot name="header" />
      </div>
    </div>
    <slot />
  </article>
</template>

<style lang="scss" scoped>
article {
  border: 1px solid $soft-200;
}
.header-container {
  width: 100%;
}
.card-icon {
  width: 24px;
  height: 24px;
  color: $sub-500;
}

.title {
  color: $main-900;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.176px;
}
</style>
