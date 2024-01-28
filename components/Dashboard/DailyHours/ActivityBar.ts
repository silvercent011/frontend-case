import { defineComponent, h } from "vue";
import "./Activity.scss";

export default defineComponent({
  props: {
    color: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    return () =>
      h("div", {
        class: `${props.percentage > 1 ? props.color : "disabled"}`,
        style: {
          height: "100%",
          flex: props.percentage > 1 ? props.percentage : 1,
          borderRadius: "2px",
          transition: "all 0.5s ease-in-out",
        },
      });
  },
});
