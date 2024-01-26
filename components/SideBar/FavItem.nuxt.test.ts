import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import FavItem from "./FavItem.vue";

describe("FavItem", () => {
  test("renders correctly fav info ", () => {
    const favs = [
      {
        url: "/fav1",
        label: "Loom Mobile App",
        color: "purple",
        mappingIndex: 1,
      },
    ];

    favs.map((fav) => {
      const wrapper = mount(FavItem, {
        props: fav,
      });
      expect(wrapper.html()).toContain(fav.label);
      expect(wrapper.html()).toContain(fav.mappingIndex);
    });
  });
});
