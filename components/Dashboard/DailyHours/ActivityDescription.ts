import { defineComponent, h } from "vue";
import "./Activity.scss";

export default defineComponent({
  props: {
    color: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () =>
      h(
        "div",
        {
          class: `flex gap-4 align-center`,
        },
        [
          h("div", {
            class: `dot ${props.disabled ? "disabled" : props.color}`,
          }),
          h(
            "span",
            { class: props.disabled ? `description-disabled` : `description` },
            props.title
          ),
        ]
      );
  },
});
