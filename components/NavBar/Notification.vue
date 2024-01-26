<template>
  <div class="container flex align-center">
    <div class="dot"></div>
    <img src="/images/NavBar/notification-3-line.svg" alt="Notifications" />
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
  border: 2px solid $white-0;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
