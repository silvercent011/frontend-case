<template>
  <main>
    <SideBar />
    <div class="flex flex-column content">
      <slot />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: 100svh;
  height: 100svh;
  display: flex;
}

.content {
  overflow-y: scroll;
  flex: 1;
}
</style>
