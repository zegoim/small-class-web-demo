import * as React from "react";
import * as PropTypes from "prop-types";
import Icon from "react-uwp/Icon";
import Button from "react-uwp/Button";
import IconButton from "react-uwp/IconButton";
import TextBox from "react-uwp/TextBox";
import { Link } from "react-router-dom";

export interface DataProps {
  title?: string;
  description?: string;
  linkUrl?: string;
  userType?: "teacher" | "student";
}

export interface LoginCardProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export class LoginCard extends React.Component<LoginCardProps> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    const {
      title,
      description,
      linkUrl,
      userType,
      ...attributes
    } = this.props;
    const { theme } = this.context;
    const styles = getStyles(this);
    const classes = theme.prepareStyles({ styles });

    return (
      <div {...attributes} {...classes.root}>
        <div style={{ width: "100%"}}>
          <div {...classes.rowCenter}>
            <p>{title}</p>
            <IconButton size={48} children="SettingsLegacy" />
          </div>
          <p style={{ marginTop: 18, fontSize: 12 }}>{description}</p>
        </div>
        <div {...classes.columnCenter}>
          <Icon hoverStyle={{ transform: "scale(1.125)" }} style={{ color: theme.accent }} size={120} children={userType === "teacher" ? "ContactLegacy" : "People"} />
          <TextBox style={{ marginTop: 32, width: "100%" }} placeholder="请输入房间" />
        </div>
        <Link style={{ width: "100%" }} to={linkUrl}>
        <Button style={styles.btn} icon="ChevronFlipRightLegacy">
          登录
        </Button>
        </Link>
      </div>
    );
  }
}

function getStyles(LoginCard: LoginCard) {
  const {
    context: { theme },
    props: { style }
  } = LoginCard;
  const { prefixStyle } = theme;

  const rowCenter = prefixStyle({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  });

  const columnCenter = prefixStyle({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  });

  return {
    rowCenter,
    columnCenter,
    root: prefixStyle({
      fontSize: 18,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      background: theme.acrylicTexture80.background,
      padding: "20px 16px",
      height: 480,
      width: 360,
      ...style
    }),
    btn: prefixStyle({
      width: "100%",
      height: 42,
      background: theme.accent,
      color: "#fff"
    })
  };
}

export default LoginCard;
