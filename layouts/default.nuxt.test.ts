import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import DefaultLayout from "./default.vue";

describe("layouts/default.vue", () => {
  test("renders correctly a <main> tag", () => {
    const wrapper = mount(DefaultLayout);

    expect(wrapper.html().includes("main")).toBeTruthy();
  });
});
