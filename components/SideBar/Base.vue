<template>
  <aside>
    <div class="padding-12">
      <slot name="header" />
    </div>
    <Divider />
    <div
      class="body flex flex-column gap-20 padding-x-20 padding-t-20 padding-b-16"
    >
      <slot name="body" />
    </div>
    <Divider />
    <div class="padding-12">
      <slot name="footer" />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  border: 1px solid $soft-200;
  width: 272px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.body {
  flex: 1;
}
</style>
