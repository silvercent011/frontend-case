import type { InjectionKey, Ref } from "vue";

export interface TabsProvider {
  selectedTab: Ref<string>;
  updateValue: (value: string) => void;
}

// Create a Symbol for the injection key
export const tabsKey = Symbol() as InjectionKey<TabsProvider>;
