<script setup lang="ts">
import { HighlightsService } from "~/services/HighlightsService";

const tabs = ["geral", "comentarios", "premios"];

const selectedTab = ref("empty");

const _tabs = [
  {
    name: "geral",
    label: "Geral",
  },
  {
    name: "comentarios",
    label: "Comentários",
  },
  {
    name: "premios",
    label: "Prêmios",
  },
];

const _highlightsService = new HighlightsService();

const employeeMonth = _highlightsService.getMonthlyHighlightsEmployee();

const comments = _highlightsService.getComments();

const reward = _highlightsService.getMonthlyHighlightsReward();
</script>

<template>
  <Card title="Destaque colaboradores" icon="ri:star-smile-line">
    <template #header>
      <Button small icon="ri:share-forward-line">Enviar</Button>
    </template>

    <Tabs v-model="selectedTab">
      <Tab v-for="{ name, label } in _tabs" :key="name" :name="name"
        >{{ label }}
      </Tab>
    </Tabs>

    <DashboardHighlightEmployeesEmpty v-if="selectedTab === 'empty'" />

    <DashboardHighlightEmployeesGeneral
      v-bind="employeeMonth"
      v-if="selectedTab === 'geral'"
    />

    <DashboardHighlightEmployeesComments
      :comments="comments"
      v-if="selectedTab === 'comentarios'"
    />

    <DashboardHighlightEmployeesGeneral
      v-bind="reward"
      v-if="selectedTab === 'premios'"
    />
  </Card>
</template>
