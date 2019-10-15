import * as React from "react";
import { theme } from "../utils/themeContext";
import Icon from "react-uwp/Icon";
import { Link } from "react-router-dom";

export interface MockProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Mock(props: MockProps) {
  const { ...attributes } = props;
  const classes = getStyles(props);

  return (
    <div {...attributes} {...classes.root}>
      <Link to="/" {...classes.link}>
        <Icon children="Home" style={{ marginRight: 8 }} />
        <p>首页</p>
      </Link>
    </div>
  );
}

const getStyles = (props: MockProps) => {
  return theme.prepareStyles({
    styles: {
      root: theme.prefixStyle({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 14,
        ...props.style
      }),
      link: theme.prefixStyle({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: theme.baseHigh,
        textDecoration: "none",
        "&:hover": {
          color: theme.accent
        }
      })
    }
  });
}

export default Mock;
