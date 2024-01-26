import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Base from "./Base.vue";

describe("Base", () => {
  test("renders correctly <aside> element ", () => {
    const wrapper = mount(Base);

    expect(wrapper.find("aside").exists()).toBe(true);
  });
});
