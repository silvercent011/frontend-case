<template>
  <nav class="padding-x-32 padding-y-20 flex gap-12 space-between">
    <NavBarUserInfo class="userInfo" />
    <NavBarItemButton>
      <Icon name="ri:search-2-line" class="icon-sm" />
    </NavBarItemButton>
    <NavBarItemButton>
      <NavBarNotification />
    </NavBarItemButton>
    <div class="flex gap-12 align-center justify-center hide-on-mobile">
      <slot />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.userInfo {
  flex: 1;
}
</style>
