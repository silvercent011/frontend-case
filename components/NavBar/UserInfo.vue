<script lang="ts" setup>
import { UserService } from "~/services/UserService";

const _userService = new UserService();

const { name, avatar, gender } = _userService.getLoggedUser();
</script>

<template>
  <div class="flex gap-14 align-center">
    <Avatar :name="name" :src="avatar" :size="48" />
    <NavBarUserData :name="name" :gender="gender" />
  </div>
</template>
