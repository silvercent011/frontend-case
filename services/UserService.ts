export class UserService {
  public getLoggedUser() {
    return {
      name: "Sophia Williams",
      email: "sophia@jurisoft.com",
      avatar: "/images/Avatar/User.png",
      verified: true,
    };
  }
}
