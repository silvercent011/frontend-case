<template>
  <div class="main flex flex-column gap-12 justify-center align-center">
    <div class="icon-container padding-8">
      <Icon name="ri:user-smile-line" class="icon" size="24" />
    </div>
    <div class="flex flex-column gap-4">
      <span class="title">Como você classificaria seu humor hoje?</span>
      <span class="subtitle"
        >Compartilhe seu humor para nos ajudar a entender.</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  text-align: center;
}
.icon-container {
  background-color: $primary-lighter;
  border-radius: 50%;
}
.icon {
  color: $primary-base;
}

.title {
  color: $main-900;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.27px;
}

.subtitle {
  color: $sub-500;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
</style>
