<script lang="ts" setup>
import { TimeTrackerActivityService } from "~/services/TimeTrackerActivityService";

const timeTrackActivityService = new TimeTrackerActivityService();

const activities = timeTrackActivityService.getActivities();
</script>

<template>
  <div class="flex flex-column gap-14">
    <span class="subheading">TAREFAS ANTERIORES</span>
    <div class="flex gap-16 flex-column">
      <DashboardTimeTrackerActivityItem
        v-for="(item, index) in activities"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template>
