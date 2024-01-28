<script setup lang="ts">
import { inject, ref } from "vue";
import { tabsKey } from "~/symbols/keys";

const props = defineProps<{
  name: string;
}>();

const { updateValue: _update, selectedTab } = inject(tabsKey, {
  selectedTab: ref(""),
  updateValue: () => {},
});

function updateValue() {
  _update(props.name);
}
</script>

<template>
  <li
    @click="updateValue"
    :class="`tab ${name === selectedTab ? 'active' : ''}`"
  >
    <slot />
  </li>
</template>

<style lang="scss" scoped>
.tab {
  display: flex;
  padding: 4px 2px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1;
  border-radius: 6px;
  color: $soft-400;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
}

.active {
  transition: all 0.2s ease-in-out;
  color: $main-900;
  background: $white-0;
  box-shadow: 0px 2px 4px 0px rgba(27, 28, 29, 0.02),
    0px 6px 10px 0px rgba(27, 28, 29, 0.06);
}
</style>
