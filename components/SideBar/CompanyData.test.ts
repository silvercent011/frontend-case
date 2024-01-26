import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import CompanyData from "./CompanyData.vue";

describe("CompanyData", () => {
  test("renders correctly company info ", () => {
    const companies = [
      {
        company: "Test Company",
        area: "Test Area",
      },
      {
        company: "Milliways",
        area: "Food",
      },
      {
        company: "Nelson and Murdock",
        area: "Law",
      },
    ];

    companies.map((company) => {
      const wrapper = mount(CompanyData, {
        props: company,
      });

      expect(wrapper.html()).toContain(company.area);
      expect(wrapper.html()).toContain(company.company);
    });
  });
});
