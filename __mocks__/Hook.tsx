import * as React from "react";
import { theme } from "../utils/themeContext";

export interface MockProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Mock(props: MockProps) {
  const { ...attributes } = props;
  const classes = getStyles(props);

  return (
    <div {...attributes} {...classes.root}>
      Mock
    </div>
  );
}

const getStyles = (props: MockProps) => {
  return theme.prepareStyles({
    styles: {
      root: theme.prefixStyle({
        ...props.style
      })
    }
  });
}

export default Mock;
