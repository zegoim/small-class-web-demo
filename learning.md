# ZEGO超级小班
## 场景描述
超级⼩班课主要应用于老师⼤班授课，学⽣分⼩班互动讨论的场景。
- 教师加入班级（大房间），学生加入小班（普通房间）。加⼊小班后，⼩班内的学生可以收发彼此的音视频流。
- 学⽣再加⼊⼤频道班级。加入大班后，所有学生都可以收到老师的⾳视频流。

## 实现方案
### 方案
即构超级小班主要通过如下方案实现：    
教师进入班级、学生加入小班是进入真实的房间，而学生进入大班则是直接拉取教师推的音视频流。达到学生同时加入两个房间一样的效果。

### 多平台互通
Android、iOS、Windows三端既可以是讲师端，也可以是学生端。

### 调用逻辑
> `SilverRoom` 是封装简易版的 SDK，位置为此项目的 src/utils/SilverRoom.ts，安装依赖 `npm i webrtc-zego@1.2.2` 即可使用。
#### 教师逻辑代码
```js
// -------------------------- initial --------------------------
// 创建 SDK 实例。
const silverRoom = new SilverRoom();

// 初始化引擎，appId 和 signKey 在官网获取。
silverRoom.initSDK({ appId, signKey });

// -------------------------- start --------------------------
// 进入房间，roomId 为房间 id，userId 为用户 id。
await silverRoom.join({ roomId, userId });

// 设置本地渲染视图，videoEl 为 HTMLVideoElement。
await silverRoom.startPreview(this.videoEl);

// 设置推流 id 为当前房间 id 拼接。
await silverRoom.publish(`${user}-streamId`);

// -------------------------- end --------------------------
// 退出房间，无需其他操作。
silverRoom.leave();
```

#### 学生逻辑代码
```js
// -------------------------- initial --------------------------
// 创建 SDK 实例。
const silverRoom = new SilverRoom();

// 初始化引擎，appId 和 signKey 在官网获取。
silverRoom.initSDK({ appId, signKey });

// 学生小班课的房间号。
const smallRoomId = "smallRoomId";

// 播放视频流函数。
function playStreams(streamList) {
  // HTMLVideoElement[]，video element 数组。
  const remoteVideos = [];

  streamList.forEach((stream, index) => {
    silverRoom.playStream({ streamId: stream.stream_id, viewEl: remoteVideos[index] });
  });
}

// -------------------------- start --------------------------
// 进入小班课房间，roomId 为房间 id，userId 为用户 id，获取流列表
const streamList = await silverRoom.join({ roomId: smallRoomId, userId });

// 播放房间视频流。
playStreams(streamList);

// 播放进入的大班课房间的教师流。
silverRoom.playStream({ streamId: `${roomId}-streamId`, viewEl: this.teacherVideoEl });

// 设置本地渲染视图，videoEl 为 HTMLVideoElement。
await silverRoom.startPreview(this.videoEl);

// 设置推流。
await silverRoom.publish(`${userId}-streamId`);

// 流更新时，播放流。
silverRoom.handleStreamsUpdate = (streamList) => {
    playStreams(streamList);
};

// -------------------------- end --------------------------
// 退出房间，无需其他操作。
silverRoom.leave();
```

## SDK 快速集成指引
超级小班课是基于 ZegoLiveRoom SDK 开发。SDK 及相关示例代码请联系相关人员。
- [WebRTC 平台集成指引](https://doc.zego.im/CN/306.html)

## 注意事项
由于超级小班课场景实现方案是直接拉取教师推的音视频流，即教师和学生并不在同一个房间，所以教师和学生将不能进行互动。如学生发送房间内广播消息 `sendRoomMessage` 教师端将不会收到。