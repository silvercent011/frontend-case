<script setup lang="ts">
interface UserInfoProps {
  name: string;
  email: string;
  verified: boolean;
}

defineProps<UserInfoProps>();
</script>

<template>
  <div class="flex flex-column gap-4 hide-on-mobile">
    <span class="label flex gap-2"
      >{{ name }}
      <img
        v-if="verified"
        class="verified"
        src="/images/SideBar/verified-fill.svg"
      />
    </span>
    <span class="paragraph">{{ email }}</span>
  </div>
</template>
