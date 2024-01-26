import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Shortcut from "./Shortcut.vue";

describe("Shortcut", () => {
  test("renders correctly shortcut", () => {
    Array.from(Array(100).keys()).map((index) => {
      const wrapper = mount(Shortcut, {
        props: { index },
      });

      expect(wrapper.html()).toContain(`⌘ ${index}`);
    });
  });
});
