import type { iCompany } from "~/types/Company";

export class CompanyService {
  public getCompany(): iCompany {
    return {
      logo: "/images/JurisoftIcon.svg",
      name: "Jurisoft",
      area: "Marketing Jurídico ",
    };
  }
}
