<script setup lang="ts">
interface Link {
  url: string;
  label: string;
  iconSrc: string;
}

interface LinksColumnProps {
  links: Link[];
  hideTitle?: boolean;
}

defineProps<LinksColumnProps>();
</script>

<template>
  <div>
    <span v-if="!hideTitle" class="subheading padding-4">MAIN</span>
    <div class="flex gap-4 flex-column padding-t-6">
      <SideBarLinkItem v-for="item in links" :key="item.url" v-bind="item" />
    </div>
  </div>
</template>
