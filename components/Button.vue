<script lang="ts" setup>
interface ButtonProps {
  variant?: "primary" | "outlined";
  icon?: string;
  small?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  variant: "outlined",
});
</script>

<template>
  <button
    :class="[
      variant,
      small ? 'padding-x-8 padding-y-6 gap-2' : 'padding-10 gap-4',
    ]"
    class="flex align-center justify-center"
  >
    <slot name="Icon" />
    <Icon v-if="icon" :name="icon" class="btn-icon" />
    <span class="padding-x-4">
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
button {
  border-radius: 10px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  outline-offset: -1px;
  text-align: center;
}

.outlined {
  outline: 1px solid $soft-200;
  background: $white-0;
  box-shadow: 0px 1px 2px 0px rgba(82, 88, 102, 0.06);
  color: $sub-500;
  &:hover {
    background: $soft-200;
    transition: all 0.3s ease-in-out;
  }
}

.primary {
  outline: 1px solid $primary-base;
  color: $white-0;
  background: $primary-base;
  box-shadow: 0px 1px 2px 0px rgba(55, 93, 251, 0.08);

  &:hover {
    background: $primary-lighter;
    color: $primary-base;
    transition: all 0.3s ease-in-out;
  }
}
.btn-icon {
  width: 20px;
  height: 20px;
}
</style>
