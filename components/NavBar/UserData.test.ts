import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import UserData from "./UserData.vue";

describe("UserData", () => {
  test("renders correctly user info ", () => {
    const users = [
      {
        name: "Sophia Williams",
        gender: "F",
      },
      {
        name: "John Doe",
        gender: "M",
      },
    ];

    users.map((user) => {
      const wrapper = mount(UserData, {
        props: user,
      });

      expect(wrapper.html()).toContain(user.name);
      expect(wrapper.html()).toContain(
        user.gender === "F" ? `Bem-vinda` : `Bem-vindo`
      );
    });
  });
});
