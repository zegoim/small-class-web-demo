import * as React from "react";
import { theme } from "../utils/themeContext";
import LoginCard from "../components/LoginCard";

export interface MockProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Mock(props: MockProps) {
  const { ...attributes } = props;
  const classes = getStyles(props);

  return (
    <div {...classes.root}>
      <LoginCard
        title="教师房间"
        description="教师由此进入音视频房间"
        userType="teacher"
        linkUrl="/TeacherRoom"
      />
      <LoginCard
        title="学生房间"
        description="学生由此进入音视频房间"
        userType="student"
        linkUrl="/StudentRoom"
      />
    </div>
  );
}

const getStyles = (props: MockProps) => {
  return theme.prepareStyles({
    styles: {
      root: theme.prefixStyle({
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 200,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        // background: theme.acrylicTexture80.background,
        width: "100%",
        height: "100%",
        ...props.style
      })
    }
  });
}

export default Mock;
