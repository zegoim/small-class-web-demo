import * as React from "react";
import * as PropTypes from "prop-types";
import Icon from "react-uwp/Icon";
import { SilverRoom } from "../utils/SilverRoom";
import getSearchQuery from "../utils/getSearchQuery";
import { liveRoomConfig } from "../utils/liveRoomConfig";
import * as faker from "faker";
import * as revealEffect from "reveal-effect";

const silverRoom = new SilverRoom();
silverRoom.initSDK({ appId: liveRoomConfig.appId, signKey: liveRoomConfig.signKey });
const search = getSearchQuery();
const roomId = search.roomId;
const userId = faker.random.uuid();

export interface DataProps {}

export interface TeacherRoomState {
  isPlaying?: boolean;
}
export interface TeacherRoomProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export class TeacherRoom extends React.Component<TeacherRoomProps, TeacherRoomState> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };
  state: TeacherRoomState = {};
  videoEl: HTMLVideoElement;
  
  componentDidMount() {
    this.joinRoom();
  }

  joinRoom = async () => {
    await silverRoom.join({ roomId, userId });
  }

  startShare = async () => {
    await silverRoom.startPreview(this.videoEl);
    this.setState({
      isPlaying: true
    });
    await silverRoom.publish(`${roomId}-streamId`);
  }

  render() {
    const { ...attributes } = this.props;
    const { theme } = this.context;
    const { isPlaying } = this.state;
    const styles = getStyles(this);
    const classes = theme.prepareStyles({ styles });

    return (
      <div {...attributes} {...classes.root}>
        <div {...classes.video} ref={el => revealEffect.addRevealEl(el)}>
          <video
            {...classes.video}
            autoPlay
            ref={videoEl => this.videoEl = videoEl}
          />
          <div {...classes.videoContent} onClick={this.startShare}>
            <Icon size={120} children="PlayLegacy" />
            <p style={{ marginTop: 24 }}>开始直播</p>
          </div>
        </div>
      </div>
    );
  }
}

function getStyles(TeacherRoom: TeacherRoom) {
  const {
    context: { theme },
    props: { style },
    state: { isPlaying }
  } = TeacherRoom;
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
      ...columnCenter,
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      ...style
    }),
    video: prefixStyle({
      position: "relative",
      objectFit: "cover",
      width: 800,
      height: 800,
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
    })
  };
}

export default TeacherRoom;
