<script lang="ts" setup>
import { CompanyService } from "~/services/CompanyService";

const _companyService = new CompanyService();

const companyData = _companyService.getCompany();
</script>

<template>
  <div
    class="card rounded-small padding-12 flex gap-4 space-between align-center"
  >
    <div class="flex gap-12 align-center">
      <img :src="companyData.logo" :alt="`${companyData.name} logo`" />
      <SideBarCompanyData
        class="hide-on-mobile"
        :company="companyData.name"
        :area="companyData.area"
      />
    </div>
    <div class="flex align-center hide-on-mobile">
      <Icon name="ri:arrow-down-s-line" class="icon" />
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
