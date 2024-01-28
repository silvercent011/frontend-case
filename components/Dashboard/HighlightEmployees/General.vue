<script setup lang="ts">
interface EmployeeCardHighlightProps {
  name: string;
  role: string;
  imgSrc: string;
  message: string;
}

defineProps<EmployeeCardHighlightProps>();
</script>

<template>
  <div class="flex flex-column gap-16 m-employee">
    <div class="flex flex-column gap-6">
      <span class="title">{{ name }}</span>
      <span class="subtitle">{{ role }}</span>
    </div>
    <img :src="imgSrc" alt="Foto do colaborador" />
    <span class="subtitle">{{ message }}</span>
  </div>
</template>

<style lang="scss" scoped>
.m-employee {
  text-align: center;
}

.title {
  color: $main-900;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.27px;
}

.subtitle {
  color: $sub-500;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
</style>
