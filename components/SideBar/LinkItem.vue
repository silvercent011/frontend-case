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

    <!-- <object
      type="image/svg+xml"
      :class="{ activeIcon: isActive }"
      :data="iconSrc"
    ></object> -->

    <Icon :class="{ activeIcon: isActive }" class="icon" :name="iconSrc" />

    <span class="label" :class="{ inactiveLabel: !isActive }">
      {{ label }}
    </span>
    <Icon v-if="isActive" name="ri:arrow-right-s-line" class="icon" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
span {
  flex: 1;
}

.icon {
  color: $sub-500;
  height: 20px;
}

.activeLink {
  background-color: $weak-100;
}

.inactiveLabel {
  color: $sub-500;
}
.activeIcon {
  color: $primary-base;
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
