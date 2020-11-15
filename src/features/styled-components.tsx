// @flow
/** @jsx emotionJSX */
import { jsx as emotionJSX } from "@emotion/core";

export const Note = ({ Tag = "div", ...props }: any) => (
  <Tag
    css={{
      color: "hsl(0, 0%, 40%)",
      display: "inline-block",
      fontSize: 12,
      fontStyle: "italic",
      marginTop: "1em",
      marginLeft: "200px",
    }}
    {...props}
  />
);
