import * as React from "react";
import * as PropTypes from "prop-types";
import Icon from "react-uwp/Icon";
import { SilverRoom } from "../utils/SilverRoom";
import getSearchQuery from "../utils/getSearchQuery";
import { liveRoomConfig } from "../utils/liveRoomConfig";
import * as faker from "faker";

const silverRoom = new SilverRoom();
silverRoom.initSDK({ appId: liveRoomConfig.appId, signKey: liveRoomConfig.signKey });
const search = getSearchQuery();
const userId = faker.random.uuid();
const roomId: string = search.roomId;

export interface DataProps {}

export interface StudentRoomState {
  isPlaying?: boolean;
}
export interface StudentRoomProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export class StudentRoom extends React.Component<StudentRoomProps, StudentRoomState> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };
  state: StudentRoomState = {};
  videoEl: HTMLVideoElement;
  teacherVideoEl: HTMLVideoElement;

  componentDidMount() {
    this.joinRoom();
  }

  joinRoom = async () => {
    const streamList = await silverRoom.join({ roomId, userId });
  }

  startConnect = async () => {
    await silverRoom.playStream({ streamId: `${roomId}-streamId`, viewEl: this.teacherVideoEl });
    await silverRoom.startPreview(this.videoEl);
    this.setState({
      isPlaying: true
    });
    await silverRoom.publish(faker.random.uuid());
  }

  render() {
    const { ...attributes } = this.props;
    const { theme } = this.context;
    const { isPlaying } = this.state;
    const styles = getStyles(this);
    const classes = theme.prepareStyles({ styles });

    return (
      <div {...attributes} {...classes.root}>
        <div {...classes.tcVideo}>
          <video
            {...classes.tcVideo}
            ref={teacherVideoEl => this.teacherVideoEl = teacherVideoEl}
            autoPlay
          />
        </div>
        <div {...classes.stVideos} >
          <div {...classes.stVideo}>
            <video
              {...classes.stVideo}
              autoPlay
              ref={videoEl => this.videoEl = videoEl}
            />
            <div {...classes.videoContent} onClick={this.startConnect}>
              <Icon size={40} children="PlayLegacy" />
              <p style={{ marginTop: 24 }}>开始音视频通讯</p>
            </div>
          </div>
          <div {...classes.stVideo}>
            <video
              {...classes.stVideo}
              autoPlay
            />
            <div {...classes.videoContentBtm} onClick={this.startConnect}>
              <Icon size={14} style={{ marginRight: 12 }} children="ContactLegacy" /> 学生1
            </div>
          </div>
          <div {...classes.stVideo}>
            <video
              {...classes.stVideo}
              autoPlay
            />
            <div {...classes.videoContentBtm} onClick={this.startConnect}>
              <Icon size={14} style={{ marginRight: 12 }} children="ContactLegacy" /> 学生2
            </div>
          </div>
          <div {...classes.stVideo}>
            <video
              {...classes.stVideo}
              autoPlay
            />
            <div {...classes.videoContentBtm} onClick={this.startConnect}>
              <Icon size={14} style={{ marginRight: 12 }} children="ContactLegacy" /> 学生3
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function getStyles(StudentRoom: StudentRoom) {
  const {
    context: { theme },
    props: { style },
    state: { isPlaying }
  } = StudentRoom;
  const { prefixStyle } = theme;

  const rowCenter = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties;
  const columnCenter = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties;

  return {
    rowCenter: prefixStyle(rowCenter),
    columnCenter: prefixStyle(columnCenter),
    root: prefixStyle({
      ...rowCenter,
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      ...style
    }),
    tcVideo: prefixStyle({
      position: "relative",
      objectFit: "cover",
      width: 600,
      height: 600,
      background: theme.acrylicTexture60.background
    }),
    stVideos: prefixStyle({
      marginLeft: 20,
      border: `1px solid ${theme.baseLow}`,
      width: 600,
      height: 600,
      margin: 20,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-around",
      flexWrap: "wrap",
    }),
    stVideo: prefixStyle({
      position: "relative",
      objectFit: "cover",
      width: 299,
      height: 299,
      border: `1px solid ${theme.baseLow}`,
      background: theme.acrylicTexture60.background
    }),
    videoContent: prefixStyle({
      cursor: "pointer",
      ...columnCenter,
      position: "absolute",
      transition: "all .25s 0s ease-in-out",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      opacity: isPlaying ? 0 : 1,
      transform: `scale(${isPlaying ? 0 : 1})`,
    }),
    videoContentBtm: prefixStyle({
      ...rowCenter,
      position: "absolute",
      transition: "all .25s 0s ease-in-out",
      width: "100%",
      left: 0,
      bottom: 18
    })
  };
}

export default StudentRoom;
