<script lang="ts" setup>
import { UserService } from "~/services/UserService";

const _userService = new UserService();

const { name, email, verified, avatar } = _userService.getLoggedUser();
</script>

<template>
  <div
    class="card rounded-small padding-12 flex gap-4 space-between align-center"
  >
    <div class="flex gap-12 align-center">
      <Avatar :name="name" :src="avatar" />
      <SideBarUserInfo :name="name" :email="email" :verified="verified" />
    </div>
    <div class="flex align-center">
      <Icon name="ri:arrow-right-s-line" class="icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card:hover {
  background-color: $weak-100;
  cursor: pointer;
}

.icon {
  color: $soft-400;
  height: 24px;
  width: 24px;
}
</style>
