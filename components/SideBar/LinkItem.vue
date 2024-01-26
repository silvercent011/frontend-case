<script setup lang="ts">
interface LinkItemProps {
  url: string;
  iconSrc: string;
  label: string;
}

const props = defineProps<LinkItemProps>();

const route = useRoute();

const isActive = computed(() => {
  if (route.path === "/" && props.url === "/") {
    return true;
  } else {
    return route.path.startsWith(props.url);
  }
});
</script>

<template>
  <NuxtLink
    :class="{ activeLink: isActive }"
    class="rounded-small padding-x-12 padding-y-8 flex space-between align-center gap-8"
  >
    <div v-if="isActive" class="tip"></div>

    <object
      type="image/svg+xml"
      :class="{ activeIcon: isActive }"
      :data="iconSrc"
    ></object>

    <span class="label" :class="{ inactiveLabel: !isActive }">
      {{ label }}
    </span>
    <object
      type="image/svg+xml"
      v-if="isActive"
      data="/images/SideBar/arrow-right-s-line.svg"
    ></object>
  </NuxtLink>
</template>

<style lang="scss" scoped>
span {
  flex: 1;
}

.activeLink {
  background-color: $weak-100;
}

.inactiveLabel {
  color: $sub-500;
}
.activeIcon {
  filter: invert(36%) sepia(28%) saturate(6781%) hue-rotate(1deg)
    brightness(101%) contrast(106%);
}

.tip {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 4px;
  height: 20px;
  background-color: $primary-base;
  border-radius: 0 4px 4px 0;
  margin-left: -32px;
}
</style>
