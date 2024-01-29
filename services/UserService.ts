import type { iUser } from "~/types/User";

export class UserService {
  public getLoggedUser(): iUser {
    return {
      name: "Sophia Williams",
      email: "sophia@jurisoft.com",
      avatar: "/images/Avatar/User.png",
      verified: true,
      gender: "F",
    };
  }
}
