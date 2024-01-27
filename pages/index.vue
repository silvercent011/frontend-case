<template>
  <NavBar>
    <Button icon="ri:calendar-check-line">Calendário</Button>
    <Button variant="primary" icon="ri:add-line">Nova solicitação</Button>
  </NavBar>

  <div class="grid padding-x-32 padding-y-4">
    <Card
      class="v-span-2"
      title="Rastreador de Tempo"
      icon="ri:timer-flash-line"
    >
      <template #header>
        <Button small icon="ri:history-line">Histórico</Button>
      </template>
    </Card>

    <Card title="Horas diárias de trabalho" icon="ri:timer-line">
      <template #header>
        <Button small>Detalhes</Button>
      </template>
    </Card>

    <Card
      class="v-span-2"
      title="Destaque colaboradores"
      icon="ri:star-smile-line"
    >
      <template #header>
        <Button small icon="ri:share-forward-line">Enviar</Button>
      </template>
    </Card>

    <Card title="Cursos - Progresso" icon="ri:book-3-line">
      <template #header>
        <Button small>Ver todos</Button>
      </template>
    </Card>
    <Card class="h-span-2" title="Cursos" icon="ri:book-3-line">
      <template #header>
        <input type="text" placeholder="Hello" />
        <Button small>Ver todos</Button>
      </template>
    </Card>
    <Card title="Feedback diário" icon="ri:discuss-line"> </Card>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
}
</style>
