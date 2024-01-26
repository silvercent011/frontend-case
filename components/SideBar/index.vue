<script setup lang="ts">
import { SideBarService } from "~/services/SideBarService";

const _sidebarService = new SideBarService();

const mainContent = _sidebarService.getMainContent();

const supportContent = _sidebarService.getSupportContent();
</script>

<template>
  <SideBarBase>
    <template #header>
      <SideBarHeaderCard />
    </template>
    <template #body>
      <SideBarLinksColumn :links="mainContent" />
      <SideBarFavsColumn />
      <div class="supportLinks">
        <SideBarLinksColumn :links="supportContent" hideTitle />
      </div>
    </template>
  </SideBarBase>
</template>

<style lang="scss" scoped>
.supportLinks {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
