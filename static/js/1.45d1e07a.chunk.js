(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1612:function(e,t,n){"use strict";n.r(t),n.d(t,"StudentRoom",function(){return P});var o=n(110),a=n(89),i=n(555),r=n.n(i),c=n(556),s=n(84),l=n(85),u=n(87),d=n(86),f=n(88),h=n(2),p=n(25),m=n(138),g=n.n(m),v=n(560),S=n.n(v),y=n(199),b=n.n(y),C=n(557),I=n(558),x=n(559),E=n(562),w=n(139),_=n(82);w.g();var j=new C.a;j.initSDK({appId:x.a.appId,signKey:x.a.signKey});var O=Object(I.a)(),D=E.random.uuid(),k=O.roomId,K=O.studentRoomId,R="student-",P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).context=void 0,n.state={roomId:O.roomId,currStudentRoomId:K},n.videoEl=void 0,n.teacherVideoEl=void 0,n.revealEls=[],n.remoteStudentVideos=[],n.getRooms=function(){var e=Object(I.a)();if(k=e.roomId,e.studentRoomId)n.setState({roomId:e.roomId,currStudentRoomId:e.studentRoomId});else{var t=Array(8+Math.ceil(20*Math.random())).fill(0).map(function(e,t){var n=E.random.uuid();return{roomId:"".concat(R).concat(n)}});n.setState({currStudentRoomId:e.studentRoomId,studentRooms:t.filter(function(e){return e.roomId.includes(R)}).map(function(e){return e.roomId})})}},n.addRevealEffect=function(){w.f(),w.b(n.revealEls)},n.joinRoom=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.join({roomId:n.state.currStudentRoomId,userId:D});case 2:t=e.sent,j.handleStreamsUpdate=function(e){e.slice(0,3).forEach(function(e,t){j.playStream({streamId:e.stream_id,viewEl:n.remoteStudentVideos[t]})})},t.slice(0,3).forEach(function(e,t){j.playStream({streamId:e.stream_id,viewEl:n.remoteStudentVideos[t]})});case 5:case"end":return e.stop()}},e)})),n.startConnect=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.playTeacherStream(),e.next=3,j.startPreview(n.videoEl);case 3:return n.setState({isPlaying:!0}),n.joinRoom(),e.next=7,j.publish(E.random.uuid());case 7:case"end":return e.stop()}},e)})),n.playTeacherStreamTimer=null,n.playTeacherStream=function(){j.playStream({streamId:"".concat(k,"-streamId"),viewEl:n.teacherVideoEl});clearTimeout(n.playTeacherStreamTimer),n.playTeacherStreamTimer=setTimeout(n.playTeacherStream,1e3)},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.addRevealEffect(),this.getRooms()}},{key:"componentDidUpdate",value:function(){w.e(),this.addRevealEffect()}},{key:"componentWillUnmount",value:function(){w.e()}},{key:"render",value:function(){var e=this;this.revealEls=[],this.remoteStudentVideos=[];var t=this.props,n=t.history,i=(Object(a.a)(t,["history"]),this.context.theme),r=this.state,c=(r.isPlaying,r.studentRooms),s=r.currStudentRoomId,l=function(e){var t=e.context.theme,n=e.props.style,a=e.state.isPlaying,i=t.prefixStyle,r={display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},c={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"};return{rowCenter:i(r),columnCenter:i(c),root:i(Object(o.a)({},r,{left:0,top:0,width:"100vw",height:"100vh"},n)),tcVideo:i({position:"relative",objectFit:"cover",width:600,height:600,background:t.acrylicTexture60.background}),stVideos:i({flex:"0 0 auto",marginLeft:20,width:600,height:600,margin:20,display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-around",flexWrap:"wrap"}),stVideo:i({position:"relative",objectFit:"cover",width:299,height:299,border:"1px solid ".concat(t.baseLow),background:t.acrylicTexture60.background}),videoContent:i(Object(o.a)({cursor:"pointer"},c,{position:"absolute",transition:"all .25s 0s ease-in-out",left:0,top:0,width:"100%",height:"100%",opacity:a?0:1,transform:"scale(".concat(a?0:1,")")})),videoContentBtm:i(Object(o.a)({},r,{position:"absolute",transition:"all .25s 0s ease-in-out",width:"100%",left:0,bottom:18})),stRooms:i({display:"flex",flexDirection:"column",pointerEvents:"all",width:"100%",height:360,margin:"18px 0",padding:"4px 0",overflowY:"auto",background:t.acrylicTexture80.background}),stRoom:i({width:"100%",height:48,flex:"0 0 auto",lineHeight:"48px",margin:"4px 0",padding:"0 8px",cursor:"pointer",color:"#fff",transition:"all .25s 0s ease-in-out",background:t.acrylicTexture40.background,"&:hover":{}}),chooseRoom:i({padding:"20px 40px",marginLeft:20,width:600,height:600,margin:20,background:t.acrylicTexture60.background,display:"flex",flexDirection:"column",alignItems:"flex-start"})}}(this),u=i.prepareStyles({styles:l});return h.createElement("div",u.root,h.createElement("div",Object.assign({},u.tcVideo,{ref:function(t){return e.revealEls.push(t)}}),h.createElement("video",Object.assign({},u.tcVideo,{ref:function(t){return e.teacherVideoEl=t},autoPlay:!0})),h.createElement("div",Object.assign({},u.videoContentBtm,{onClick:this.startConnect}),h.createElement(g.a,{size:14,style:{marginRight:12},children:"ContactLegacy"})," \u6559\u5e08")),s?h.createElement("div",Object.assign({},u.stVideos,{ref:function(t){return e.revealEls.push(t)}}),h.createElement("div",u.stVideo,h.createElement("video",Object.assign({},u.stVideo,{autoPlay:!0,ref:function(t){return e.videoEl=t}})),h.createElement("div",Object.assign({},u.videoContent,{onClick:this.startConnect}),h.createElement(g.a,{size:40,children:"PlayLegacy"}),h.createElement("p",{style:{marginTop:24}},"\u5f00\u59cb\u97f3\u89c6\u9891\u901a\u8baf"))),h.createElement("div",u.stVideo,h.createElement("video",Object.assign({},u.stVideo,{autoPlay:!0,ref:function(t){return e.remoteStudentVideos[0]=t}})),h.createElement("div",Object.assign({},u.videoContentBtm,{onClick:this.startConnect}),h.createElement(g.a,{size:14,style:{marginRight:12},children:"ContactLegacy"})," \u5b66\u751f1")),h.createElement("div",u.stVideo,h.createElement("video",Object.assign({},u.stVideo,{autoPlay:!0,ref:function(t){return e.remoteStudentVideos[1]=t}})),h.createElement("div",Object.assign({},u.videoContentBtm,{onClick:this.startConnect}),h.createElement(g.a,{size:14,style:{marginRight:12},children:"ContactLegacy"})," \u5b66\u751f2")),h.createElement("div",u.stVideo,h.createElement("video",Object.assign({},u.stVideo,{autoPlay:!0,ref:function(t){return e.remoteStudentVideos[2]=t}})),h.createElement("div",Object.assign({},u.videoContentBtm,{onClick:this.startConnect}),h.createElement(g.a,{size:14,style:{marginRight:12},children:"ContactLegacy"})," \u5b66\u751f3"))):h.createElement("div",Object.assign({},u.chooseRoom,{ref:function(t){return e.revealEls.push(t)}}),h.createElement("p",null,"\u9009\u62e9\u5df2\u6709\u5c0f\u73ed\uff1a"),h.createElement("div",u.stRooms,c&&c.map(function(t,o){return h.createElement("div",Object.assign({},u.stRoom,{ref:function(t){return e.revealEls.push(t)},key:t,onClick:function(){n.push("".concat(_.a,"StudentRoomWithStudent")+"?roomId=".concat(O.roomId,"&studentRoomId=").concat(t))}}),t.replace(R,""))})),h.createElement("p",null,"\u8fdb\u5165\u5c0f\u73ed\uff1a"),h.createElement(S.a,{style:{width:"100%",margin:"8px 0"},onChangeValue:function(t){return e.state.currStudentRoomId="".concat(R).concat(t)}}),h.createElement(b.a,{style:{alignSelf:"flex-end"},onClick:function(){e.state.currStudentRoomId&&n.push("".concat(_.a,"StudentRoomWithStudent")+"?roomId=".concat(O.roomId,"&studentRoomId=").concat(e.state.currStudentRoomId))}},"\u786e\u5b9a")))}}]),t}(h.Component);P.contextTypes={theme:p.object},t.default=P},557:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(555),a=n.n(o),i=n(556),r=n(110),c=n(84),s=n(85),l=n(87),u=n(86),d=n(140),f=n(88),h=n(561),p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this)))._defaultCacheConfig={publishStreamId:"",streamList:[],playingStreamIds:[],enableLayerCodec:!1,sdkIsInitial:!1,appVersion:"\u56fd\u5185\u7248"},e._cacheSDKConfig=Object(r.a)({},e._defaultCacheConfig),e.join=function(){var t=Object(i.a)(a.a.mark(function t(n){var o,i,r,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e._cacheSDKConfig.roomId=n.roomId,o=n.userId,e._cacheSDKConfig.userId=o,i=n.userName||n.userId,e._cacheSDKConfig.userName=i,e._cacheSDKConfig.loginTokenUrl="\u56fd\u5185\u7248"===e._cacheSDKConfig.appVersion?"https://wsliveroom".concat(e._cacheSDKConfig.appId,"-api.zego.im:8282/token"):"https://wsliveroom".concat(e._cacheSDKConfig.appId,"-api.zegocloud.com:8282/token"),r={appid:e._cacheSDKConfig.appId,server:"\u56fd\u5185\u7248"===e._cacheSDKConfig.appVersion?"wss://wsliveroom".concat(e._cacheSDKConfig.appId,"-api.zego.im:8282/ws"):"wss://wsliveroom".concat(e._cacheSDKConfig.appId,"-api.zegocloud.com:8282/ws"),idName:o,nickName:i,logLevel:3,logUrl:"",audienceCreateRoom:!0,remoteLogLevel:0,testEnvironment:!1},e.config(r),c=function(){return new Promise(function(t,n){fetch("".concat(e._cacheSDKConfig.loginTokenUrl,"?app_id=").concat(e._cacheSDKConfig.appId,"&id_name=").concat(e._cacheSDKConfig.userId),{method:"GET"}).then(function(e){return"string"===typeof e?t(e):e.text().then(function(e){t(e)}),e}).catch(n)})},e._cacheSDKConfig.loginToken){t.next=13;break}return t.next=12,c();case 12:e._cacheSDKConfig.loginToken=t.sent;case 13:return console.error(e._cacheSDKConfig.loginToken),t.abrupt("return",new Promise(function(t,o){e.login(decodeURIComponent(n.roomId),2,e._cacheSDKConfig.loginToken,function(n){e.publish(e._cacheSDKConfig.publishStreamId),e._cacheSDKConfig.streamList=n,t(n),e.handleStreamsUpdate&&e.handleStreamsUpdate(n)},o)}));case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.leave=function(){return e.logout()},e.unInitSDK=function(){e.stopPublish(),e.stopPreview(),e.leave(),e._cacheSDKConfig.streamList.forEach(function(t,n){e.stopPlayingStream(t.stream_id)}),e._cacheSDKConfig=Object(r.a)({},e._defaultCacheConfig),e.handleStreamsUpdate&&e.handleStreamsUpdate(e._cacheSDKConfig.streamList),e.release()},e.startPreview=function(t,n,o,a){return e._cacheSDKConfig.publishViewEl=t,new Promise(function(o,a){h.ZegoClient.prototype.startPreview.call(Object(d.a)(e),t,Object(r.a)({audio:!0,audioInput:null,video:!0,videoInput:null,videoQuality:2,horizontal:!0},n),o,a)})},e.stopPreview=function(t){return h.ZegoClient.prototype.stopPreview.call(Object(d.a)(e),t||e._cacheSDKConfig.publishViewEl)},e.publish=function(t){e._cacheSDKConfig.publishStreamId=t||"".concat(Date.now(),"-").concat(Math.ceil(Math.random()*Math.pow(10,8))),e.startPublishingStream(e._cacheSDKConfig.publishStreamId,e._cacheSDKConfig.publishViewEl)},e.stopPublish=function(){e.stopPublishingStream(e._cacheSDKConfig.publishStreamId)},e.playStream=function(t){var n=e.startPlayingStream(t.streamId,t.viewEl);return e._cacheSDKConfig.playingStreamIds.includes(t.streamId)||e._cacheSDKConfig.playingStreamIds.push(t.streamId),n},e.playStreams=function(t){t.forEach(function(t){return e.playStream(t)})},e.stopPlayStream=function(t){e.stopPlayingStream(t.streamId);var n=e._cacheSDKConfig.playingStreamIds.indexOf(t.streamId);n>-1&&e._cacheSDKConfig.playingStreamIds.splice(n,-1)},e.stopPlayStreams=function(t){t.forEach(function(t){e.stopPlayStream({streamId:t})})},e.onStreamUpdated=function(t,n){var o=e._cacheSDKConfig.streamList,a=o.map(function(e){return e.stream_id}),i=n?n.map(function(e){return e.stream_id}):[];0===t?i.forEach(function(e,t){if(!a.includes(e)){var i=n?n[t]:null;i&&o.push(i)}}):i.forEach(function(t,n){var i=a.indexOf(t);if(i>-1){e.stopPlayingStream(t),o.splice(i,1);var r=e._cacheSDKConfig.playingStreamIds.indexOf(t);r>-1&&e._cacheSDKConfig.playingStreamIds.splice(r,1)}}),e.handleStreamsUpdate&&e.handleStreamsUpdate(o)},e.handleStreamsUpdate=function(e){},e.getEventData=function(e){},e.handleEventDataChange=function(e){return{}},e.setUserStateUpdate(!0),e}return Object(f.a)(t,e),Object(s.a)(t,[{key:"initSDK",value:function(e){this._cacheSDKConfig.appId=e.appId,this._cacheSDKConfig.signKey=e.signKey}}]),t}(h.ZegoClient)},558:function(e,t,n){"use strict";t.a=function(){var e=/\?([^=]+\=[^\=]*\&?)*$/g;if(e.test(location.href)){var t=location.href.match(e)[0];return t?t.slice(1).split("&").reduce(function(e,t){var n=t.match(/([^=]+)\=(.+)/);try{e[n[1]]=decodeURIComponent(n[2])}catch(o){e[n[1]]=n[2]}return e},{}):{}}return{}}},559:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={appId:1082937486,signKey:[96,37,191,76,225,16,66,218,58,160,246,171,248,20,158,204,72,138,52,8,69,172,96,119,37,28,0,99,75,198,214,154]}},560:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),a=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&(n[o[a]]=e[o[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),c=n(25),s=function(){},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t.handleClick=function(e){t.setState({hovered:!1})},t.handleHover=function(e){t.setState({hovered:!0}),t.handleBlur=function(){}},t.handleUnHover=function(e){t.setState({hovered:!1}),t.handleBlur=function(e){t.setState({focused:!1}),t.props.onBlur(e)}},t.handleFocus=function(e){t.setState({focused:!0}),t.props.onFocus(e)},t.handleBlur=function(e){t.setState({focused:!1}),t.props.onBlur(e)},t.setValue=function(e){return t.inputElm.value=e},t.getValue=function(){return t.inputElm.value},t}return o(t,e),t.prototype.render=function(){var e=this,t=this.props,n=(t.hoverStyle,t.focusStyle,t.leftNode),o=t.rightNode,c=t.style,s=t.className,l=t.textBoxStyle,u=t.onChange,d=t.onChangeValue,f=t.children,h=t.background,p=i(t,["hoverStyle","focusStyle","leftNode","rightNode","style","className","textBoxStyle","onChange","onChangeValue","children","background"]),m=this.state,g=m.hovered,v=m.focused,S=n||o||f,y=this.context.theme,b=void 0===h?y.altHigh:h,C={onMouseEnter:this.handleHover,onMouseLeave:this.handleUnHover},I={lineHeight:"32px",height:32,width:296,padding:S?0:"0 8px",fontSize:14,display:"flex",flexDirection:"row",alignItems:"center",color:v?"#000":y.baseHigh,background:v?"#fff":b||"none",boxShadow:v?"inset 0px 0px 0 2px "+this.context.theme.accent:g?"inset 0px 0px 0 2px "+y.baseMedium:"inset 0px 0px 0 2px "+y.baseLow,border:"none",transition:"all .25s"},x={root:S?y.prefixStyle(a({},I,c)):{},input:y.prefixStyle(a({},S?{paddingLeft:o?8:void 0,paddingRight:n?8:void 0,width:"100%",height:"100%",background:"none",border:"none",outline:"none",color:"inherit",transition:"all .25s"}:I,S?void 0:c,l))},E=y.prepareStyles({className:"text-box",styles:x}),w=r.createElement("input",a({ref:function(t){e.inputElm=t,S||(e.rootElm=t)}},p,{style:E.input.style,className:y.classNames(s,E.input.className),onChange:function(e){d(e.currentTarget.value),u(e)},onFocus:this.handleFocus,onBlur:this.handleBlur},S?void 0:C));return S?r.createElement("div",a({ref:function(t){return e.rootElm=t}},p,C,E.root,{onClick:this.handleClick}),n,w,f,o):w},t.defaultProps={background:"none",textBoxStyle:{fontSize:"inherit",outline:"none",transition:"all .25s"},onFocus:s,onBlur:s,onChange:s,onChangeValue:s},t.contextTypes={theme:c.object},t}(r.Component);t.TextBox=l,t.default=l}}]);
//# sourceMappingURL=1.45d1e07a.chunk.js.map