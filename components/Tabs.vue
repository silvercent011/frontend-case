<script setup lang="ts">
import { tabsKey } from "~/symbols/keys";

const props = withDefaults(
  defineProps<{ modelValue: string; variant?: "underline" | "pills" }>(),
  {
    variant: "underline",
  }
);
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

function updateValue(value: string) {
  emit("update:modelValue", value);
}

provide(tabsKey, {
  selectedTab: computed(() => props.modelValue),
  updateValue,
});
</script>

<template>
  <ul class="tabs">
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  padding: 4px;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  list-style: none;
  border-radius: 10px;
  background: $weak-100;
}
</style>
