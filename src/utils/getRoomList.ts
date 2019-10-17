import { liveRoomConfig } from "./liveRoomConfig";

export function getRoomList() {
    return fetch(`https://liveroom${liveRoomConfig.appId}-api.zego.im/demo/roomlist?appid=${liveRoomConfig.appId}`)
}
