<template>
  <div class="container flex align-center">
    <div class="dot"></div>
    <Icon name="ri:notification-3-line" class="icon-sm" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
}

.dot {
  aspect-ratio: 1;
  width: 4px;
  height: 4px;
  background-color: $red-base;
  stroke-width: 2px;
  stroke: $white-0;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(0px 1px 2px rgba(228, 229, 231, 0.24));
}
</style>
