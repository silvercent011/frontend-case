import { Icon } from "#components";
import "./LocalButton.scss";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "red",
    },
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        "button",
        {
          class: `${props.color}-button flex gap-4 align-center`,
          style: {
            backgroundColor: "transparent",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "16px",
            cursor: "pointer",
          },
        },
        [
          h(Icon, {
            name: `${props.icon}`,
            style: { width: "16px", height: "16px" },
          }),
          slots.default!(),
        ]
      );
  },
});
