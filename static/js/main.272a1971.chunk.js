(this["webpackJsonptomato-clock"]=this["webpackJsonptomato-clock"]||[]).push([[0],{45:function(n,t,e){},46:function(n,t,e){"use strict";e.r(t);var i,c,a,r,o,s,d,x,b,l,p,j,u,f,O,g,h,m,v,w,k,y,z,E,S,C,A,I,T,D,L,M,F,P,N,J,B,K,U,R,W,Y,q,G=e(1),H=e.n(G),Q=e(22),V=e.n(Q),X=e(5),Z=e(2),$=e(3),_=e(23),nn=e.n(_),tn=e(0),en=$.a.div(i||(i=Object(Z.a)(["\n    width: 300px;\n    height: 300px;\n    background: #ea5548;\n    border-radius: 50%;\n    margin-bottom: 50px;\n    position: relative;\n"]))),cn=$.a.div(c||(c=Object(Z.a)(["\n    width: 60px;\n    height: 75px;\n    background: #316901;\n    border-radius: 50px;\n    position: absolute;\n    right: 0px;\n    transform: translate(-10px, 5px) rotate(45deg);\n"]))),an=$.a.div(a||(a=Object(Z.a)(["\n    text-align: center;\n    font-size: 14px;\n    letter-spacing: 1.5px;\n"]))),rn=$.a.div(r||(r=Object(Z.a)(["\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 24px;\n    letter-spacing: 3.6px;\n    color: #fcfcfc;\n"]))),on=function(){return Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsxs)(en,{children:[Object(tn.jsx)(cn,{}),Object(tn.jsx)(rn,{children:"PODOMORO"})]}),Object(tn.jsxs)(an,{children:[Object(tn.jsx)("div",{children:"You don\u2019t have any task now,"}),Object(tn.jsx)("div",{children:"please add task first\uff01"})]})]})},sn=$.a.div(o||(o=Object(Z.a)(["\n    font-size: 20px;\n    font-weight: bold;\n    letter-spacing: 2px;\n    color: #fcfcfc;\n    border-bottom: 1px solid #414141;\n    padding: 30px 0;\n    margin-bottom: 20px;\n"]))),dn=$.a.div(s||(s=Object(Z.a)(["\n    font-size: 14px;\n    letter-spacing: 0.7px;\n    color: #acacac;\n"]))),xn=$.a.div(d||(d=Object(Z.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 24px;\n"]))),bn=$.a.input(x||(x=Object(Z.a)(["\n    font-family: sans-serif;\n    padding: 16px;\n    outline: none;\n    border: 0px;\n    font-size: 16px;\n    background: #fcfcfc;\n    border-radius: 5px;\n    margin-top: 10px;\n"]))),ln=Object($.a)(xn)(b||(b=Object(Z.a)(["\n    margin-bottom: 50px;\n"]))),pn=$.a.div(l||(l=Object(Z.a)(["\n    color: #fcfcfc;\n    background: #ea5548;\n    border-radius: 30px;\n    text-align: center;\n    padding: 18px 0;\n    cursor: pointer;\n"]))),jn=$.a.div(p||(p=Object(Z.a)(["\n    width: 25px;\n    height: 25px;\n    background: ",";\n    border-radius: 50%;\n    position: relative;\n    cursor: pointer;\n"])),(function(n){return n.isActive?"#EA5548":"#ACACAC"})),un=$.a.div(j||(j=Object(Z.a)(["\n    width: 5px;\n    height: 7px;\n    background: ",";\n    border-radius: 50px;\n    position: absolute;\n    right: 0px;\n    transform: rotate(45deg);\n"])),(function(n){return n.isActive?"#316901":"#6E6E6E"})),fn=$.a.div(u||(u=Object(Z.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n"]))),On=function(n){var t=Object(G.useState)(""),e=Object(X.a)(t,2),i=e[0],c=e[1],a=Object(G.useState)(0),r=Object(X.a)(a,2),o=r[0],s=r[1],d=function(n){return Object(tn.jsx)(jn,{onClick:function(){return s(n.index)},isActive:o>=n.index,children:Object(tn.jsx)(un,{isActive:o>=n.index})})};return Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(sn,{children:"ADD NEW TASK"}),Object(tn.jsxs)(dn,{children:[Object(tn.jsxs)(xn,{children:["TASK TITLE",Object(tn.jsx)(bn,{value:i,onChange:function(n){return c(n.target.value)}})]}),Object(tn.jsxs)(ln,{children:["ESTIMATED TOMOTO",Object(tn.jsx)(fn,{children:Array(12).fill(0).map((function(n,t){return Object(tn.jsx)(d,{index:t},t)}))})]}),Object(tn.jsx)(pn,{onClick:function(){n.setTask({name:i,second:1500,status:"working",tomatos:o+1}),c(""),s(0)},children:"ADD TASK"})]})]})},gn=e(27),hn=e(6),mn=e(7),vn=$.a.div(f||(f=Object(Z.a)(["\n    font-size: 20px;\n    font-weight: bold;\n    letter-spacing: 2px;\n    color: #fcfcfc;\n    border-bottom: 1px solid #414141;\n    padding: 30px 0;\n    margin-bottom: 20px;\n"]))),wn=$.a.div(O||(O=Object(Z.a)(["\n    font-size: 14px;\n    color: #acacac;\n    letter-spacing: 0.7px;\n"]))),kn=$.a.div(g||(g=Object(Z.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 24px;\n"]))),yn=$.a.input(h||(h=Object(Z.a)(["\n    font-family: sans-serif;\n    padding: 16px;\n    outline: none;\n    border: 0px;\n    font-size: 16px;\n    background: #fcfcfc;\n    border-radius: 5px;\n    margin-top: 10px;\n"]))),zn=$.a.div(m||(m=Object(Z.a)(["\n    color: #fcfcfc;\n    background: #ea5548;\n    border-radius: 30px;\n    text-align: center;\n    padding: 18px 0;\n    cursor: pointer;\n"]))),En=$.a.div(v||(v=Object(Z.a)(["\n    height: 1px;\n    background: #414141;\n    margin: 20px 0px;\n"]))),Sn=$.a.div(w||(w=Object(Z.a)(["\n    display: flex;\n    align-items: center;\n    padding: 12px 20px;\n    color: #fcfcfc;\n    letter-spacing: 0.8px;\n    border-radius: 2px;\n    margin-bottom: 1px;\n    cursor: pointer;\n    &:hover {\n        background: #414141;\n    }\n"]))),Cn=Object($.b)(k||(k=Object(Z.a)(["\n  0% {\n    transform: scale(1, 1);\n  }\n  50% {\n    transform: scale(1.3, 1.3);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n"]))),An=$.a.div(y||(y=Object(Z.a)(["\n    margin-right: 8px;\n    animation: "," 3s ease-in-out infinite;\n"])),Cn),In=$.a.div(z||(z=Object(Z.a)(["\n    font-size: 16px;\n    margin-right: 6px;\n    margin-left: 2px;\n"]))),Tn=$.a.div(E||(E=Object(Z.a)(["\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n"]))),Dn=function(n){var t=n.musicList,e=n.setMusicList,i=n.nowPlaying,c=n.setNowPlaying,a=Object(G.useState)(""),r=Object(X.a)(a,2),o=r[0],s=r[1];return Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(vn,{children:"MUSIC LISTS"}),Object(tn.jsxs)(wn,{children:[Object(tn.jsxs)(kn,{children:["ADD MUSIC",Object(tn.jsx)(yn,{value:o,onChange:function(n){return s(n.target.value)}})]}),Object(tn.jsx)(zn,{onClick:function(){fetch("https://noembed.com/embed?url="+o).then((function(n){return n.json()})).then((function(n){return e([].concat(Object(gn.a)(t),[{url:o,title:n.title}]))})).catch((function(n){return console.log(n)})),s("")},children:"ADD"}),Object(tn.jsx)(En,{}),Object(tn.jsx)(kn,{children:"MUSIC LISTS"}),t.map((function(n,t){return Object(tn.jsxs)(Sn,{onClick:function(){return c(t)},children:[Object(tn.jsx)("div",{children:t===i?Object(tn.jsx)(An,{children:Object(tn.jsx)(hn.a,{icon:mn.e,size:"1x"})}):Object(tn.jsx)(In,{children:t+1+"."})}),Object(tn.jsx)(Tn,{children:n.title})]},n.url)}))]})]})},Ln=e(17),Mn=$.a.div(S||(S=Object(Z.a)(["\n    position: relative;\n"]))),Fn=$.a.div(C||(C=Object(Z.a)(["\n    text-align: center;\n    position: absolute;\n    font-size: 24px;\n    font-weight: bold;\n    letter-spacing: 1.2px;\n    top: -30px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]))),Pn=$.a.div(A||(A=Object(Z.a)(["\n    width: 300px;\n    height: 300px;\n    background: ",";\n    border-radius: 50%;\n    background-image: linear-gradient(to right, transparent 50%, #acacac 0);\n    overflow: hidden;\n    position: relative;\n    margin-bottom: 50px;\n    :before {\n        content: '';\n        display: block;\n        margin-left: 50%;\n        height: 100%;\n        background: ",";\n        transform-origin: left;\n        transform: ",";\n    }\n"])),(function(n){return"working"===n.status?"#EA5548":"#B5E254"}),(function(n){return n.angel>180?"#ACACAC":"working"===n.status?"#EA5548":"#B5E254"}),(function(n){return n.angel>180?"rotate(".concat(n.angel-180,"deg)"):"rotate(".concat(n.angel,"deg)")})),Nn=$.a.div(I||(I=Object(Z.a)(["\n    width: 200px;\n    height: 200px;\n    background: #fcfcfc;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 40px;\n    font-weight: bold;\n    letter-spacing: 4px;\n"]))),Jn=$.a.div(T||(T=Object(Z.a)(["\n    width: 300px;\n    display: flex;\n    justify-content: space-between;\n"]))),Bn=$.a.div(D||(D=Object(Z.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    background: #fcfcfc;\n    border-radius: 50%;\n    color: #acacac;\n    cursor: pointer;\n"]))),Kn=function(n){var t=Object(G.useState)(),e=Object(X.a)(t,2),i=e[0],c=e[1],a=Object(G.useState)(),r=Object(X.a)(a,2),o=r[0],s=r[1],d=Object(G.useState)(),x=Object(X.a)(d,2),b=x[0],l=x[1];Object(G.useEffect)((function(){n&&s(n.task.second),l(n.task)}),[n]),Object(G.useEffect)((function(){0===o&&(j(i),"working"===b.status&&(s(300),l(Object(Ln.a)(Object(Ln.a)({},b),{},{second:300,status:"break"})),c(p())))}),[o]);var p=function(){return window.setInterval((function(){return s((function(n){return n-1}))}),1e3)},j=function(n){window.clearInterval(n)};return Object(tn.jsxs)(Mn,{children:[Object(tn.jsx)(Fn,{children:b&&b.name}),Object(tn.jsx)(Pn,{status:b?b.status:"working",angel:b&&360*(b.second-o)/b.second,children:Object(tn.jsx)(Nn,{children:function(n){var t=parseInt(n/60),e=n%60;return e<10&&(e="0"+e),"".concat(t,":").concat(e)}(o)})}),Object(tn.jsxs)(Jn,{children:[Object(tn.jsx)(Bn,{onClick:function(){return c(p())},children:Object(tn.jsx)(hn.a,{icon:mn.d,size:"lg"})}),Object(tn.jsx)(Bn,{onClick:function(){return j(i)},children:Object(tn.jsx)(hn.a,{icon:mn.c,size:"lg"})}),Object(tn.jsx)(Bn,{onClick:function(){return function(n){window.clearInterval(n),s(b.second)}(i)},children:Object(tn.jsx)(hn.a,{icon:mn.g,size:"lg"})})]})]})},Un=function(n,t){return n.name===t.name},Rn=H.a.memo(Kn,Un),Wn=$.a.div(L||(L=Object(Z.a)(["\n    width: ",";\n    height: ",";\n    background: #ea5548;\n    border-radius: 50%;\n    position: relative;\n"])),(function(n){return"s"===n.size?"12.5px":"25px"}),(function(n){return"s"===n.size?"12.5px":"25px"})),Yn=$.a.div(M||(M=Object(Z.a)(["\n    width: ",";\n    height: ",";\n    background: #316901;\n    border-radius: 50px;\n    position: absolute;\n    right: 0px;\n    transform: translate(-1px, 0.5px) rotate(45deg);\n"])),(function(n){return"s"===n.size?"2.5px":"5px"}),(function(n){return"s"===n.size?"3px":"6.25px"})),qn=function(n){return Object(tn.jsx)(tn.Fragment,{children:Object(tn.jsx)(Wn,{size:n.size,children:Object(tn.jsx)(Yn,{size:n.size})})})},Gn=(e(45),$.a.div(F||(F=Object(Z.a)(["\n    display: flex;\n    height: 100%;\n    color: #333333;\n    font-family: sans-serif;\n"])))),Hn=$.a.div(P||(P=Object(Z.a)(["\n    display: flex;\n    width: ",";\n    background: #eaeaea;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    transition: width 0.5s ease-in-out;\n"])),(function(n){return n.barExpand?"50%":"100%"})),Qn=$.a.div(N||(N=Object(Z.a)(["\n    position: fixed;\n    bottom: 50px;\n    font-size: 10px;\n    letter-spacing: 1.5px;\n"]))),Vn=$.a.div(J||(J=Object(Z.a)(["\n    display: flex;\n    flex: ",";\n    background: #333333;\n    transition: flex 0.5s ease-in-out;\n    min-width: 0; // resolve conflict with white-space and flexbox\n"])),(function(n){return n.barExpand?"0 0 50%":"0 0 80px"})),Xn=$.a.div(B||(B=Object(Z.a)(["\n    flex: 0 0 80px;\n    border-right: ",";\n    position: relative;\n    transition: border-right 0.5s ease-in-out;\n"])),(function(n){return n.barExpand?"2px solid #414141":""})),Zn=$.a.div(K||(K=Object(Z.a)(["\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n    color: ",";\n    cursor: pointer;\n    &:hover {\n        color: #ea5548;\n    }\n"])),(function(n){return n.active?"#EA5548":"#FCFCFC"})),$n=$.a.div(U||(U=Object(Z.a)(["\n    flex-grow: 1;\n    min-width: 0; // resolve conflict with white-space and flexbox\n    padding: 0 34px;\n"]))),_n=$.a.div(R||(R=Object(Z.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    position: absolute;\n    width: 90px;\n    height: 50px;\n    background: #fcfcfc;\n    border-radius: 25px 5px 5px 25px;\n    bottom: 14px;\n    left: -24px;\n    cursor: pointer;\n"]))),nt=$.a.div(W||(W=Object(Z.a)(["\n    transform: ",";\n    // transition: transform .5s ease-in-out;\n"])),(function(n){return n.barExpand?"rotate(0deg)":"rotate(-180deg)"})),tt=function(){var n=Object(G.useState)("add"),t=Object(X.a)(n,2),e=t[0],i=t[1],c=Object(G.useState)({}),a=Object(X.a)(c,2),r=a[0],o=a[1],s=Object(G.useState)(1),d=Object(X.a)(s,2),x=d[0],b=d[1],l=Object(G.useState)(1),p=Object(X.a)(l,2),j=p[0],u=p[1],f=Object(G.useState)([]),O=Object(X.a)(f,2),g=O[0],h=O[1],m=Object(G.useState)(),v=Object(X.a)(m,2),w=v[0],k=v[1];return Object(G.useEffect)((function(){var n=localStorage.getItem("musicList");n&&h(JSON.parse(n))}),[]),Object(G.useEffect)((function(){0!==g.length&&localStorage.setItem("musicList",JSON.stringify(g))}),[g]),Object(tn.jsxs)(Gn,{children:[Object(tn.jsxs)(Hn,{barExpand:x,children:[0===Object.keys(r).length?Object(tn.jsx)(on,{}):Object(tn.jsx)(Rn,{task:r}),Object(tn.jsx)(Qn,{children:"PODOMORO"})]}),Object(tn.jsxs)(Vn,{barExpand:x,onTransitionEnd:function(n){x&&u(1)},children:[Object(tn.jsxs)(Xn,{barExpand:x,children:[Object(tn.jsx)(Zn,{onClick:function(){return i("add")},active:"add"===e,children:Object(tn.jsx)(hn.a,{icon:mn.f,size:"lg"})}),Object(tn.jsx)(Zn,{onClick:function(){return i("music")},active:"music"===e,children:Object(tn.jsx)(hn.a,{icon:mn.b,size:"lg"})}),Object(tn.jsxs)(_n,{onClick:function(){x?(b(!x),u(0)):b(!x)},children:[Object(tn.jsx)(qn,{size:"m"}),Object(tn.jsx)(nt,{barExpand:x,children:Object(tn.jsx)(hn.a,{icon:mn.a,size:"lg"})})]})]}),j?Object(tn.jsx)($n,{children:"add"===e?Object(tn.jsx)(On,{task:r,setTask:o}):Object(tn.jsx)(Dn,{musicList:g,setMusicList:h,nowPlaying:w,setNowPlaying:k})}):Object(tn.jsx)(tn.Fragment,{})]}),Object(tn.jsx)(nn.a,{width:"0px",height:"0px",url:g[w]&&g[w].url,playing:!0,volume:.2,onEnded:function(){return k((function(n){return n+1}))}})]})};$.a.div(Y||(Y=Object(Z.a)(["\n    margin: 200px;\n    height: 50px;\n    width: 75px;\n    background: #a7a7a7;\n    position: relative;\n    box-shadow: 5px 5px 10px -5px #a7a7a7;\n    &:after,\n    &:before {\n        content: '';\n        height: 50px;\n        width: 50px;\n        position: absolute;\n        top: 0px;\n        background: #a7a7a7;\n        border-radius: 50%;\n        box-shadow: 5px 5px 10px -5px #a7a7a7;\n    }\n    &:after {\n        right: -25px;\n    }\n    &:before {\n        left: -25px;\n    }\n"]))),$.a.div(q||(q=Object(Z.a)(["\n    height: 40px;\n    width: 40px;\n    background: #f7f7f7;\n    border-radius: 50%;\n    left: ",";\n    top: 50%;\n    transform: translate(0px, -50%);\n    z-index: 2;\n    transition: left 0.3s ease-in-out;\n    box-shadow: 0px 0px 10px -5px #f7f7f7;\n"])),(function(n){return n.toggle?"-20px":"55px"}));V.a.render(Object(tn.jsx)(tt,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.272a1971.chunk.js.map