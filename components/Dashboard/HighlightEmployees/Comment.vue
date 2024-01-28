<script setup lang="ts">
interface CommentProps {
  user: string;
  comment: string;
  avatar: string;
}

defineProps<CommentProps>();

const heartActive = ref(false);

const toggleHeart = () => {
  heartActive.value = !heartActive.value;
};
</script>

<template>
  <div class="flex gap-12 align-center space-between">
    <Avatar :name="user" :src="avatar" />
    <div class="flex flex-column gap-4 comment-data">
      <span class="paragraph">{{ user }}</span>
      <span class="label flex gap-2">{{ comment }} </span>
    </div>
    <div class="flex align-center">
      <Icon
        :name="heartActive ? `ri:heart-fill` : `ri:heart-line`"
        @click="toggleHeart"
        :class="heartActive ? 'icon-red' : 'icon-disabled'"
        size="20"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-red {
  color: $red-base;
}

.icon-disabled {
  color: $disabled-300;
}
.comment-data {
  flex: 1;
}
</style>
