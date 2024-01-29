<template>
  <NavBar>
    <Button icon="ri:calendar-check-line">Calendário</Button>
    <Button variant="primary" icon="ri:add-line">Nova solicitação</Button>
  </NavBar>

  <div class="grid padding-x-32 padding-y-4">
    <DashboardTimeTracker class="v-span-2" />

    <DashboardDailyHours />

    <DashboardHighlightEmployees class="v-span-2" />

    <DashboardCoursesProgress />

    <DashboardCourses class="h-span-2" />

    <DashboardDailyFeedback />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
}

@media (max-width: 1400px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1000px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
