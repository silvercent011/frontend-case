<script setup lang="ts">
import type { iCourse } from "~/types/Course";

defineProps<{ teacher: iCourse["teacher"] }>();
</script>

<template>
  <div class="flex gap-12 align-center padding-12">
    <img :src="teacher.avatar" :alt="teacher.name" />

    <div class="flex flex-column gap-4">
      <span class="name">{{ teacher.name }}</span>
      <span class="role">{{ teacher.role }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.name {
  overflow: hidden;
  color: $main-900;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
}

.role {
  overflow: hidden;
  color: $sub-500;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  white-space: nowrap;
}
</style>
