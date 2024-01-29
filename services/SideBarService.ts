import type { iSidebarLink } from "~/types/SidebarLink";

export class SideBarService {
  public getMainContent(): iSidebarLink[] {
    return [
      {
        url: "/",
        label: "Dashboard",
        iconSrc: `ri:layout-grid-line`,
      },
      {
        url: "/calendario",
        label: "Calendário",
        iconSrc: `ri:calendar-line`,
      },
      {
        url: "/descanso",
        label: "Descanso",
        iconSrc: `ri:timer-line`,
      },
      {
        url: "/projetos",
        label: "Projetos",
        iconSrc: `ri:folders-line`,
      },
      {
        url: "/times",
        label: "Times",
        iconSrc: `ri:group-line`,
      },
      {
        url: "/integracoes",
        label: "Integrações",
        iconSrc: `ri:equalizer-line`,
      },
      {
        url: "/beneficios",
        label: "Benefícios",
        iconSrc: `ri:star-smile-line`,
      },
      {
        url: "/documentos",
        label: "Documentos",
        iconSrc: `ri:file-cloud-line`,
      },
    ];
  }

  public getSupportContent(): iSidebarLink[] {
    return [
      {
        url: "/configuracoes",
        label: "Configurações",
        iconSrc: `ri:settings-2-line`,
      },
      {
        url: "/suporte",
        label: "Suporte",
        iconSrc: `ri:headphone-line`,
      },
    ];
  }
}
