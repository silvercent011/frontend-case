<script lang="ts" setup>
import { FavsService } from "~/services/FavsService";

const _favsService = new FavsService();

const favs = _favsService.getFavs();
</script>

<template>
  <div>
    <span class="subheading padding-4">FAVS</span>
    <div class="flex gap-4 flex-column padding-t-6">
      <SideBarFavItem
        v-for="(item, index) in favs"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template>
