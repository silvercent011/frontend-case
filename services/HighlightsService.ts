import type { iComment, iHighlight } from "~/types/Highlight";

export class HighlightsService {
  public getMonthlyHighlightsEmployee(): iHighlight {
    return {
      name: "Matthew Johnson",
      role: "Engenheiro de Software",
      imgSrc: "/images/HighlightEmployees/Highlight.svg",
      message: "Funcionário de melhor desempenho de dezembro!",
    };
  }

  public getMonthlyHighlightsReward(): iHighlight {
    return {
      name: "Cartão presente de R$ 50,00",
      role: "Aproveite o prêmio, Matthew!",
      imgSrc: "/images/HighlightEmployees/Reward.svg",
      message: "Os funcionários do mês recebem recompensas",
    };
  }

  public getComments(): iComment[] {
    return [
      {
        user: "James Brown",
        comment: "Parabéns, Matthew! 🔥",
        avatar: "/images/HighlightEmployees/James.svg",
      },
      {
        user: "Lena Müller",
        comment: "Ótimo trabalho! 🤗",
        avatar: "/images/HighlightEmployees/Lena.svg",
      },
      {
        user: "Juma Omondi",
        comment: "O céu é o limite! ⚡️",
        avatar: "/images/HighlightEmployees/Juma.svg",
      },
    ];
  }
}
