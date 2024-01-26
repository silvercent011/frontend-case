import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import UserInfo from "./UserInfo.vue";

describe("UserInfo", () => {
  test("renders correctly user info ", () => {
    const users = [
      {
        name: "Sophia Williams",
        email: "sophia@jurisoft.com",
        avatar: "/images/Avatar/User.png",
        verified: true,
      },
      {
        name: "John Doe",
        email: "john@jurisoft.com",
        avatar: "/images/Avatar/User.png",
        verified: false,
      },
    ];

    users.map((user) => {
      const wrapper = mount(UserInfo, {
        props: user,
      });

      expect(wrapper.html()).toContain(user.name);
      expect(wrapper.html()).toContain(user.email);
      expect(wrapper.find(".verified").exists()).toBe(user.verified);
    });
  });
});
