import * as React from "react";
import * as PropTypes from "prop-types";
import Icon from "react-uwp/Icon";
import Button from "react-uwp/Button";
import IconButton from "react-uwp/IconButton";
import TextBox from "react-uwp/TextBox";
import { RouteComponentProps } from "react-router";

export interface DataProps {
  title?: string;
  description?: string;
  linkUrl?: string;
  userType?: "teacher" | "student";
  onChangeRoom?: (room?: string) => void;
  history?: RouteComponentProps["history"];
}

export interface LoginCardProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export class LoginCard extends React.Component<LoginCardProps> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };
  roomName: string;
  handleChangeRoom = (roomName: string) => {
    const { onChangeRoom } = this.props;
    this.roomName = roomName;
    if (onChangeRoom) onChangeRoom(roomName);
  }
  
  enterRoom = () => {
    const { linkUrl, history } = this.props;
    if (this.roomName) {
      if (linkUrl) {
        history.push(`${linkUrl}?roomId=${this.roomName}`);
      }
    } else {
      window.setDialog({
        statusBarTitle: "提示",
        content: "请输入房间号！",
        defaultShow: true,
        showCloseButton: true,
        primaryButtonText: null,
        secondaryButtonText: null,
      });
    }
  }

  render() {
    const {
      title,
      description,
      linkUrl,
      userType,
      onChangeRoom,
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
          <TextBox
            style={{ marginTop: 32, width: "100%" }}
            onChangeValue={this.handleChangeRoom}
            placeholder="请输入房间"
          />
        </div>
        <Button
          onClick={this.enterRoom}
          style={styles.btn}
          icon="ChevronFlipRightLegacy"
        >
          登录
        </Button>
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
