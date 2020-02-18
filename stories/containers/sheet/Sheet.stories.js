import { withProvider } from "stories/runtime";
import M from "./index";

export default {
  title: "MuggleSheet",
  component: M.component
};

export const QuoteBoard = withProvider(M);
