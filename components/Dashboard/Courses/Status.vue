<script setup lang="ts">
import type { iCourse } from "~/types/Course";

defineProps<{ course: iCourse }>();
</script>

<template>
  <div class="padding-12 flex align-center space-between">
    <Button small v-if="course.progress < 100" class="small">
      <template #Icon>
        <Icon class="orange-icon" name="ri:time-fill" />
      </template>
      Em Andamento
    </Button>
    <Button small v-else class="small">
      <template #Icon>
        <Icon class="green-icon" name="ri:checkbox-circle-fill" />
      </template>
      Concluído
    </Button>
    <Icon name="ri:arrow-right-s-line" class="icon" />
  </div>
</template>

<style lang="scss" scoped>
.small {
  font-size: 12px;
}
.orange-icon {
  color: $primary-base;
}

.green-icon {
  color: $state-success;
}
</style>
