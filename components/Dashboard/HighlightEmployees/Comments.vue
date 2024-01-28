<script setup lang="ts">
interface Comment {
  user: string;
  comment: string;
  avatar: string;
}

interface CommentsProps {
  comments: Comment[];
}

defineProps<CommentsProps>();
</script>

<template>
  <div class="flex flex-column gap-20">
    <template v-for="(comment, index) in comments">
      <Divider v-if="index > 0" no-padding />
      <DashboardHighlightEmployeesComment v-bind="comment" />
    </template>
  </div>
  <Button icon="ri:pencil-line">Comment</Button>
</template>
