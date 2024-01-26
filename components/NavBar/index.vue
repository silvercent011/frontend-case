<template>
  <nav class="padding-x-32 padding-y-20 flex gap-12 space-between">
    <NavBarUserInfo class="userInfo" />
    <NavBarItemButton>
      <img src="/images/NavBar/search-2-line.svg" alt="Notifications" />
    </NavBarItemButton>
    <NavBarItemButton>
      <NavBarNotification />
    </NavBarItemButton>

    <slot />
  </nav>
</template>

<style lang="scss" scoped>
.userInfo {
  flex: 1;
}
</style>
