export class SideBarService {
  public getMainContent() {
    return [
      {
        url: "/",
        label: "Dashboard",
        iconSrc: `/images/SideBar/layout-grid-line.svg`,
      },
      {
        url: "/calendario",
        label: "Calendário",
        iconSrc: `/images/SideBar/calendar-line.svg`,
      },
      {
        url: "/descanso",
        label: "Descanso",
        iconSrc: `/images/SideBar/timer-line.svg`,
      },
      {
        url: "/projetos",
        label: "Projetos",
        iconSrc: `/images/SideBar/folders-line.svg`,
      },
      {
        url: "/times",
        label: "Times",
        iconSrc: `/images/SideBar/group-line.svg`,
      },
      {
        url: "/integracoes",
        label: "Integrações",
        iconSrc: `/images/SideBar/equalizer-line.svg`,
      },
      {
        url: "/beneficios",
        label: "Benefícios",
        iconSrc: `/images/SideBar/star-smile-line.svg`,
      },
      {
        url: "/documentos",
        label: "Documentos",
        iconSrc: `/images/SideBar/file-cloud-line.svg`,
      },
    ];
  }

  public getSupportContent() {
    return [
      {
        url: "/configuracoes",
        label: "Configurações",
        iconSrc: `/images/SideBar/settings-2-line.svg`,
      },
      {
        url: "/suporte",
        label: "Suporte",
        iconSrc: `/images/SideBar/headphone-line.svg`,
      },
    ];
  }
}
