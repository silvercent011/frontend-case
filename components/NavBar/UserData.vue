<script setup lang="ts">
interface UserInfoProps {
  name: string;
  gender: string;
}

const props = defineProps<UserInfoProps>();

const welcomeByGender = computed(() =>
  props.gender === "F" ? `Bem-vinda` : `Bem-vindo`
);
</script>

<template>
  <div class="flex flex-column gap-4">
    <span class="label-large flex">{{ name }} </span>
    <span class="paragraph-large">{{ welcomeByGender }} de volta 👋🏻</span>
  </div>
</template>
