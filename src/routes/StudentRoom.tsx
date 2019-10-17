import * as React from "react";
import * as PropTypes from "prop-types";
import Icon from "react-uwp/Icon";
import TextBox from "react-uwp/TextBox";
import Button from "react-uwp/Button";
import { SilverRoom } from "../utils/SilverRoom";
import getSearchQuery from "../utils/getSearchQuery";
import { getRoomList } from "../utils/getRoomList";
import { liveRoomConfig } from "../utils/liveRoomConfig";
import { RouteComponentProps } from "react-router";
import * as faker from "faker";

const silverRoom = new SilverRoom();
silverRoom.initSDK({ appId: liveRoomConfig.appId, signKey: liveRoomConfig.signKey });
const search = getSearchQuery();
const userId = faker.random.uuid();
let roomId: string = search.roomId;
const currStudentRoomId: string = search.studentRoomId;
const studentRoomPrefix = "student-";

export interface DataProps {}

export interface StudentRoomState {
  isPlaying?: boolean;
  studentRooms?: string[];
  currStudentRoomId?: string;
}
export interface StudentRoomProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {
  history?: RouteComponentProps["history"];
}

export class StudentRoom extends React.Component<StudentRoomProps, StudentRoomState> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };
  state: StudentRoomState = {
    currStudentRoomId: currStudentRoomId
  };
  videoEl: HTMLVideoElement;
  teacherVideoEl: HTMLVideoElement;

  async componentDidMount() {
    // let data: any = await getRoomList();
    // let data = {
    //   code: 0,
    //   data: {
    //     room_list: []
    //   }
    // };
    console.log("--------------")

    const search: any = getSearchQuery();
    roomId = search.roomId;

    const roomList = Array(8 + Math.ceil(Math.random() * 20)).fill(0).map((zero, index) => {
      const roomId = faker.random.uuid();
      return { roomId: `${studentRoomPrefix}${roomId}` };
    });
    
    this.setState({
      currStudentRoomId: search.studentRoomId,
      studentRooms: roomList.filter(room => room.roomId.includes(studentRoomPrefix)).map(room => room.roomId)
    });
  }

  joinRoom = async () => {
    const streamList = await silverRoom.join({ roomId: this.state.currStudentRoomId, userId });
  }

  startConnect = async () => {
    this.playTeacherStream();
    await silverRoom.startPreview(this.videoEl);
    this.setState({
      isPlaying: true
    });
    // await silverRoom.publish(faker.random.uuid());
  }

  playTeacherStreamTimer = null;
  playTeacherStream = () => {
    const playSuccess = silverRoom.playStream({ streamId: `${roomId}-streamId`, viewEl: this.teacherVideoEl });
    clearTimeout(this.playTeacherStreamTimer);
    this.playTeacherStreamTimer = setTimeout(this.playTeacherStream, 1000);
  }

  render() {
    const { history, ...attributes } = this.props;
    const { theme } = this.context;
    const { isPlaying, studentRooms, currStudentRoomId } = this.state;
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
          <div {...classes.videoContentBtm} onClick={this.startConnect}>
            <Icon size={14} style={{ marginRight: 12 }} children="ContactLegacy" /> 教师
          </div>
        </div>
        {currStudentRoomId ? (
            <div {...classes.stVideos}>
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
          ) : (
            <div {...classes.chooseRoom}>
              <p>选择已有小班：</p>
              <div {...classes.stRooms}>
                {studentRooms && studentRooms.map((roomId, index) => (
                  <div
                    {...classes.stRoom}
                    key={roomId}
                    onClick={() => {
                      // eslint-disable-next-line
                      // history.push(location.pathname + `?roomId=${search.roomId}&studentRoomId=${roomId}`);
                      // this.setState({ currStudentRoomId: roomId });
                      // eslint-disable-next-line
                      location.href = location.pathname + `?roomId=${search.roomId}&studentRoomId=${roomId}`;
                    }}
                  >
                    {roomId.replace(studentRoomPrefix, "")}
                  </div>
                ))}
              </div>
              <p>创建新小班：</p>
              <TextBox
                style={{ width: "100%", margin: "8px 0" }}
                onChangeValue={currStudentRoomId => this.state.currStudentRoomId = currStudentRoomId}
              />
              <Button
                style={{ alignSelf: "flex-end" }}
                onClick={() => {
                  if (this.state.currStudentRoomId) {
                      // eslint-disable-next-line
                      // history.push(location.pathname + `?roomId=${search.roomId}&studentRoomId=${this.state.currStudentRoomId}`);
                      // this.setState({ currStudentRoomId: this.state.currStudentRoomId });
                      // eslint-disable-next-line
                      location.href = location.pathname + `?roomId=${search.roomId}&studentRoomId=${this.state.currStudentRoomId}`
                  }
                }}
              >
                确定
              </Button>
            </div>
          )}
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
    }),
    stRooms: prefixStyle({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: 360,
      margin: "18px 0",
      padding: "4px 0",
      overflowY: "auto",
      background: theme.acrylicTexture80.background
    }),
    stRoom: prefixStyle({
      width: "100%",
      height: 48,
      flex: "0 0 auto",
      lineHeight: "48px",
      margin: "4px 0",
      padding: "0 8px",
      cursor: "pointer",
      color: "#fff",
      transition: "all .25s 0s ease-in-out",
      background: theme.acrylicTexture40.background,
      "&:hover": {
        background: theme.accent
      }
    }),
    chooseRoom: prefixStyle({
      padding: "20px 40px",
      marginLeft: 20,
      border: `1px solid ${theme.baseLow}`,
      width: 600,
      height: 600,
      margin: 20,
      background: theme.acrylicTexture60.background,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    })
  };
}

export default StudentRoom;
