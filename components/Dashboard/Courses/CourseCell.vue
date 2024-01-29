<script setup lang="ts">
import type { iCourse } from "~/types/Course";

const props = defineProps<{ course: iCourse }>();

const period = computed(() => useDateFormat(props.course.period));
</script>

<template>
  <div class="flex gap-12 align-center padding-12 flex-1">
    <div class="flex flex-column gap-4">
      <span class="name">{{ course.title }}</span>
      <span class="period">{{ period }}</span>
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

.period {
  overflow: hidden;
  color: $sub-500;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  white-space: nowrap;
}
</style>
