<script setup lang="ts">
interface CompanyNameProps {
  company: string;
  area: string;
}

defineProps<CompanyNameProps>();
</script>

<template>
  <div class="flex flex-column gap-4">
    <span class="label">{{ company }}</span>
    <span class="paragraph">{{ area }}</span>
  </div>
</template>
