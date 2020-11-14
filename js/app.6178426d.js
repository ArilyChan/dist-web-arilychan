(function(e){function t(t){for(var s,r,a=t[0],c=t[1],u=t[2],f=0,d=[];f<a.length;f++)r=a[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},i={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0265":function(e,t,n){},"0cef":function(e,t,n){},1:function(e,t){},"1b5c":function(e,t,n){"use strict";n("2107")},2107:function(e,t,n){},"431b":function(e,t,n){"use strict";n("0265")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"io",(function(){return F}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("db4d");var s=n("a026"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"chat"}},[n("div",{staticClass:"sidebar"},[n("card"),n("list")],1),n("div",{staticClass:"main"},[n("message"),n("text-input")],1)])},o=[],r=n("5530"),a=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("header",{staticStyle:{display:"flex","align-items":"self-end"}},[n("img",{staticClass:"avatar",attrs:{width:"40",height:"40",alt:e.user.name,src:e.user.img}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"search",attrs:{placeholder:"your id"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("footer",[n("input",{staticClass:"search",attrs:{type:"text",placeholder:"search user..."},on:{keyup:e.onKeyup}})])])},u=[],l=(n("b0c0"),n("ac1f"),n("841c"),{computed:Object(r["a"])(Object(r["a"])({},Object(a["c"])(["user"])),{},{name:{get:function(){return this.user.name},set:function(e){""===e&&(e=null),this.changeUserData({name:e})}}}),methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])(["search","changeUserData"])),{},{onKeyup:function(e){this.search(e.target.value)}})}),f=l,d=(n("431b"),n("2877")),m=Object(d["a"])(f,c,u,!1,null,"6b9a1a52",null),p=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},[n("ul",[e._l(e.sessions,(function(t,s){return n("li",{key:s,class:{active:t.id===e.currentId},on:{click:function(n){return e.selectSession(t.id)}}},[n("img",{staticClass:"avatar",attrs:{width:"30",height:"30",alt:t.user.name,src:t.user.img}}),n("p",{staticClass:"name"},[e._v(e._s(t.user.name))])])})),n("li",{on:{click:function(t){return t.stopPropagation(),e.joinRoom()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.joinRoomId,expression:"joinRoomId"}],domProps:{value:e.joinRoomId},on:{input:function(t){t.target.composing||(e.joinRoomId=t.target.value)}}}),n("p",{staticClass:"name"},[e._v("create new room")])])],2)])},g=[],h={computed:Object(r["a"])({},Object(a["c"])(["sessions","currentId"])),methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])(["selectSession","createSession"])),{},{joinRoom:function(){this.$socket.emit("join-room",{room:this.joinRoomId}),this.joinRoomId=""}}),data:function(){return{joinRoomId:void 0}}},S=h,b=(n("e2e5"),Object(d["a"])(S,v,g,!1,null,"12f3ea76",null)),_=b.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{placeholder:"按 Ctrl + Enter 发送"},domProps:{value:e.content},on:{keyup:e.onKeyup,input:function(t){t.target.composing||(e.content=t.target.value)}}})])},y=[],E={data:function(){return{content:""}},methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])(["sendMessage"])),{},{onKeyup:function(e){e.ctrlKey&&13===e.keyCode&&this.content.length&&(this.sendMessage(this.content),this.content="")}})},O=E,C=(n("f63f"),Object(d["a"])(O,j,y,!1,null,"654b4dea",null)),x=C.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"scroll-bottom",rawName:"v-scroll-bottom",value:e.session.messages,expression:"session.messages"}],staticClass:"message"},[e.session?n("ul",e._l(e.session.messages,(function(t,s){return n("li",{key:s},[0===s||new Date(t.date).getMinutes()>new Date(e.session.messages[s-1].date).getMinutes()?n("p",{staticClass:"time"},[n("span",[e._v(e._s(e._f("time")(t.date)))])]):e._e(),n("div",{staticClass:"main",class:{self:t.self}},[n("img",{staticClass:"avatar",attrs:{width:"30",height:"30",src:t.self?e.user.img:e.session.user.img}}),n("div",{staticStyle:{display:"flex","flex-direction":"column","flex-grow":"0"}},[t.self?e._e():n("span",[n("small",[e._v(e._s(t.user.name||t.user.id))])]),n("div",{staticClass:"text",staticStyle:{width:"fit-content"}},e._l(t.content.split("\n"),(function(t,s){return n("p",{key:s,staticStyle:{"line-height":"1.2"}},[e._v(" "+e._s(t)+" ")])})),0)])])])})),0):e._e()])},w=[],T={computed:Object(r["a"])({},Object(a["c"])(["user","session"])),filters:{time:function(e){return"string"===typeof e&&(e=new Date(e)),e.getHours()+":"+e.getMinutes()}}},A=T,D=(n("1b5c"),Object(d["a"])(A,I,w,!1,null,"4e4e9850",null)),M=D.exports,N={components:{Card:p,List:_,TextInput:x,Message:M},methods:Object(r["a"])({},Object(a["b"])(["initData"])),created:function(){this.initData()}},R=N,K=(n("a587"),Object(d["a"])(R,i,o,!1,null,"73d9f3a7",null)),k=K.exports;n("4de4"),n("7db0"),n("caad"),n("d81d"),n("d3b7"),n("25f0"),n("2532");s["a"].use(a["a"]);var P=new a["a"].Store({state:{user:{name:"coffce",img:"images/1.jpg"},sessions:[{id:"1",type:"group",user:{name:"default-chat",img:"images/1.jpg"},messages:[]}],currentSessionId:void 0,filterKey:""},getters:{session:function(e){var t=e.sessions,n=e.currentSessionId;return t.find((function(e){return e.id===n}))},user:function(e){var t=e.user;return t},filterKey:function(e){var t=e.filterKey;return t},sessions:function(e){var t=e.sessions,n=e.filterKey,s=t.filter((function(e){return e.user.name.includes(n)}));return s},currentId:function(e){var t=e.currentSessionId;return t}},mutations:{INIT_DATA:function(e){e.sessions.map((function(e){return F.emit("join-room",{room:e.id})}));var t=JSON.parse(localStorage.getItem("vue-chat-session"));t&&t.map((function(t){if(!e.sessions.find((function(e){var n=e.id;return n===t.id})))return F.emit("join-room",{room:t.id})}))},SEND_MESSAGE:function(e,t){var n=e.sessions,s=e.currentSessionId,i=n.find((function(e){return e.id===s}));i.messages.push({content:t,date:new Date,self:!0})},RECV_MESSAGE:function(e,t){var n=e.sessions;console.log(n,t);var s=n.find((function(e){return e.id===t.id}));s.messages.push({content:t.message,date:new Date,user:t.user,self:!1})},SELECT_SESSION:function(e,t){e.currentSessionId=t},CREATE_SESSION:function(e,t){e.sessions.find((function(e){return e.id===t.id}))||e.sessions.push({id:t.id,type:t.type,user:{name:t.name||t.id.toString(),img:t.avatar||"images/1.jpg"},messages:[]})},SET_FILTER_KEY:function(e,t){e.filterKey=t},CHANGE_USERDATA:function(e,t){e.user.name=t.name,e.user.img=t.img||e.user.img}},actions:{initData:function(e){var t=e.commit;t("INIT_DATA")},changeUserData:function(e,t){var n=e.commit;n("CHANGE_USERDATA",t)},sendMessage:function(e,t){var n=e.commit,s=e.state;console.log(s.sessions);var i=s.sessions.find((function(e){return e.id===s.currentSessionId}));F.emit("client-message",{room:i.id,message:t,user:s.user}),n("SEND_MESSAGE",t)},selectSession:function(e,t){var n=e.commit;return n("SELECT_SESSION",t)},search:function(e,t){var n=e.commit;return n("SET_FILTER_KEY",t)},reciveMessage:function(e,t){var n=e.commit;return n("RECV_MESSAGE",t)},createSession:function(e,t){var n=e.commit;return n("CREATE_SESSION",t)},"SOCKET_joined-room":function(e,t){var n=e.dispatch,s=e.state,i=t.room,o=t.type;n("createSession",{id:i,type:o}),s.currentSessionId||n("selectSession",i)},"SOCKET_client-message":function(e,t){var n=e.dispatch,s=t.room,i=t.user,o=void 0===i?{}:i,r=t.message;n("reciveMessage",{id:s,user:o,message:r})}}});P.watch((function(e){return e.sessions}),(function(e){console.log("CHANGE: ",e),localStorage.setItem("vue-chat-session",JSON.stringify(e))}),{deep:!0});var G=P,$=n("5132"),H=n.n($),L=n("8055"),U=n.n(L);s["a"].directive("scroll-bottom",(function(e,t,n){n.context.$nextTick((function(){e.scrollTop=e.scrollHeight-e.clientHeight}))}));var J={},F=U()("http://141.193.21.250:3004/chat",J);s["a"].use(new H.a({debug:!0,connection:F,vuex:{store:G,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),new s["a"]({el:"#app",components:{App:k},template:"<App/>",store:G})},a587:function(e,t,n){"use strict";n("d723")},acfd:function(e,t,n){},d723:function(e,t,n){},e2e5:function(e,t,n){"use strict";n("acfd")},f63f:function(e,t,n){"use strict";n("0cef")}});
//# sourceMappingURL=app.6178426d.js.map