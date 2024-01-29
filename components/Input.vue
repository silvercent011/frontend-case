<script setup lang="ts">
defineProps<{ placeholder: string }>();
</script>

<template>
  <div class="container">
    <Icon class="icon" name="ri:search-2-line" />
    <input type="text" class="input" :placeholder="placeholder" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 6px 6px 6px 8px;
  gap: 6px;
  border-radius: 8px;
  border: 1px solid $soft-200;
  background: $white-0;
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
}

.icon {
  top: 0;
  bottom: 0;
  left: 0;
  color: $soft-400;
  width: 20px;
  height: 20px;
}

.input {
  color: $soft-400;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.084px;
}
</style>
