(this["webpackJsonpmed-andra-ord"]=this["webpackJsonpmed-andra-ord"]||[]).push([[0],{60:function(e,t,a){e.exports=a(72)},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(65),a(66),a(5)),u=a(10),m=a(99),s=function(){var e=Object(u.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"V\xe4lkommen till Med Andra Ord!"),r.a.createElement(m.a,{variant:"contained",color:"#4f5b66",onClick:function(){e.push("/GameSettings")}},"B\xf6rja spela"))},i=a(103),d=a(104),b=a(108),f=a(107),O=a(109),E=a(105),v=a(110),j=Object(n.createContext)(),g=function(e){var t=Object(n.useState)("2"),a=Object(o.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)("10"),m=Object(o.a)(u,2),s=m[0],i=m[1],d=Object(n.useState)(20),b=Object(o.a)(d,2),f=b[0],O=b[1],E=Object(n.useState)(0),v=Object(o.a)(E,2),g=v[0],h=v[1],p=Object(n.useState)(f),S=Object(o.a)(p,2),w=S[0],T=S[1],x=Object(n.useState)(1),y=Object(o.a)(x,2),k=y[0],C=y[1],B=Object(n.useState)([1,2]),N=Object(o.a)(B,2),R=N[0],P=N[1],G=Object(n.useState)(1),A=Object(o.a)(G,2),W=A[0],I=A[1];return r.a.createElement(j.Provider,{value:[l,c,s,i,f,O,w,T,g,h,k,C,R,P,W,I]},e.children)},h=Object(n.createContext)(),p=function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)({}),m=Object(o.a)(u,2),s=(m[0],m[1],Object(n.useState)([{team:1,score:0},{team:2,score:0}])),i=Object(o.a)(s,2),d=i[0],b=i[1];return r.a.createElement(h.Provider,{value:[l,c,d,b]},e.children)},S=Object(i.a)((function(e){return{formControl:{margin:e.spacing(3),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},slider:{height:e.spacing(3),width:600},typo:{margin:e.spacing(3),marginBottom:e.spacing(6)}}})),w=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"},{value:50,label:"50"},{value:60,label:"60"}],T=function(e){var t=Object(u.f)();Object(n.useEffect)((function(){}),[]);var a=S();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"V\xe4lj spelformat"),r.a.createElement(m.a,{variant:"contained",color:"#4f5b66",onClick:function(){t.push("/GameView")}},"Starta spel"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"outlined",color:"#4f5b66",onClick:function(){t.push("/")}},"G\xe5 tillbaka till start"),r.a.createElement("br",null),r.a.createElement(d.a,{variant:"filled",className:a.formControl},r.a.createElement(b.a,{id:"demo-simple-select-filled-label"},"Antal lag"),r.a.createElement(f.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:e.noOfTeams,onChange:function(t){e.setNoOfTeams(t.target.value);for(var a=[],n=[],r=1;r<=e.noOfTeams;r++)a.push(r),n.push({team:r,score:0});console.log("scoreByTeamArray: ",n),e.setScoreByTeam(n),console.log("nofOfTeams = ",e.noOfTeams),console.log("turnOrder = ",a)}},r.a.createElement(O.a,{value:2},r.a.createElement("em",null,"2")),r.a.createElement(O.a,{value:3},"3"),r.a.createElement(O.a,{value:4},"4"),r.a.createElement(O.a,{value:5},"5"),r.a.createElement(O.a,{value:6},"6"),r.a.createElement(O.a,{value:7},"7"),r.a.createElement(O.a,{value:8},"8"))),r.a.createElement(d.a,{variant:"filled",className:a.formControl},r.a.createElement(b.a,{id:"demo-simple-select-filled-label"},"Antal omg\xe5ngar"),r.a.createElement(f.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:e.noOfRounds,onChange:function(t){console.log(t.target.value),e.setNoOfRounds(t.target.value)}},r.a.createElement(O.a,{value:10},r.a.createElement("em",null,"10")),r.a.createElement(O.a,{value:20},"20"),r.a.createElement(O.a,{value:30},"30"),r.a.createElement(O.a,{value:40},"40"),r.a.createElement(O.a,{value:50},"50"),r.a.createElement(O.a,{value:60},"60"),r.a.createElement(O.a,{value:70},"70"))),r.a.createElement(E.a,{id:"discrete-slider-custom",gutterBottom:!0,className:a.typo},"Tid per omg\xe5ng (sekunder)"),r.a.createElement(v.a,{className:a.slider,defaultValue:20,step:null,valueLabelDisplay:"on",marks:w,onChange:function(t,a){console.log(a),e.setNoOfSecondsPerTurn(a)},getAriaValueText:function(e){return"".concat(e," sekunder")},"aria-labelledby":"discrete-slider-custom"}))},x=Object(n.createContext)(),y=function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(5),m=Object(o.a)(u,2),s=m[0],i=m[1];return r.a.createElement(x.Provider,{value:[l,c,s,i]},e.children)},k=Object(n.createContext)(),C=[{word:"corona"},{word:"sally"},{word:"coronafall"},{word:"brother"},{word:"ciara"},{word:"v\xe4rldsrekord"},{word:"nanne"},{word:"sport-bloggen"},{word:"deltagaren"},{word:"v\xe4rldsrekordet"},{word:"arbetskraftsinvandring"},{word:"ferm"},{word:"elma"},{word:"skidskytte-vm"},{word:"efterfesten"},{word:"faith"},{word:"\xe4ventyr"},{word:"coronautbrottet"},{word:"kryssningsfartyget"},{word:"j\xe4mst\xe4llda"},{word:"norgren"},{word:"t-centralen"},{word:"\xf6fk"}],B=function(e){var t=Object(n.useState)({word:"",index:0}),a=Object(o.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(C),m=Object(o.a)(u,2),s=m[0],i=m[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){c((function(){var e,t=(e=s.length,Math.floor(Math.random()*Math.floor(e)));return{word:s[t].word,index:t}}))};return r.a.createElement(k.Provider,{value:[l,c,d,function(e){console.log("processed word: ".concat(JSON.stringify(e)));var t=s;t.splice(e.index,1),i(t),d()}]},e.children)},N=Object(n.createContext)(),R=function(e){var t=Object(n.useState)(1),a=Object(o.a)(t,2),l=(a[0],a[1],Object(n.useState)()),c=Object(o.a)(l,2),u=(c[0],c[1],Object(n.useState)(!1)),m=Object(o.a)(u,2),s=m[0],i=m[1];return r.a.createElement(N.Provider,{value:[s,i]},e.children)},P=a(106),G=function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(0),m=Object(o.a)(u,2),s=m[0],i=m[1];Object(n.useEffect)((function(){c(e.time),i(50/e.time)}),[]),Object(n.useEffect)((function(){var t=setInterval((function(){c((function(){if(l>0)return l-1;clearInterval(t),e.timeOut()})),i(d(l))}),1e3);return function(){clearInterval(t)}}),[l,s]);var d=function(t){return 0!==t?s+100/e.time:100};return r.a.createElement("div",null,r.a.createElement("h1",null,"Tid: ",l),r.a.createElement(P.a,{variant:"determinate",value:s}))},A=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"N\xe4st p\xe5 tur: Lag ",e.nextTeam),r.a.createElement("h2",null,"N\xe4sta lag b\xf6rjar om.."),r.a.createElement(G,{timeOut:function(){console.log("nextteamout"),e.setShowNextTeam(!1),e.setShowWords(!0)},time:e.time}))},W=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Resultat f\xf6r runda ",e.currentRound,":"),function(){var t=e.scoreByTeam.map((function(e){return r.a.createElement("li",{key:e.team},"Lag ",e.team," - ",e.score," po\xe4ng")}));return r.a.createElement("ul",null,t)}(),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){e.nextRound()}},"B\xf6rja N\xe4sta Omg\xe5ng"))},I=a(111),V=Object(I.a)(m.a)({background:"  rgba(82,255,125,1)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}),F=Object(I.a)(m.a)({background:"rgba(255,157,82,1)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}),L=function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useContext)(k),i=Object(o.a)(s,4),d=i[0],b=(i[1],i[2]),f=i[3];var O=Object(u.f)(),E=function(){f(d),b()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{timeOut:function(){e.updateScore(e.currentTeam,l),e.nextTurn(),e.setShowWords(!1)},time:e.noOfSecondsPerTurn}),r.a.createElement("br",null),r.a.createElement("h2",null,"Lag ",e.currentTeam),r.a.createElement("h1",null,"Antal r\xe4tt: ",l),r.a.createElement("h1",null,d.word),r.a.createElement("br",null),r.a.createElement(V,{onClick:function(){E(),c((function(){return l+1}))}},"R\xe4tt svar"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(F,{onClick:function(){return E()}},"N\xe4sta ord"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){O.push("/GameSettings")}},"G\xe5 tillbaka till konfiguering"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){return O.push("/")}},"G\xe5 tillbaka till start"))};var M=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(!1),m=Object(o.a)(u,2),s=m[0],i=m[1],d=Object(n.useState)(!1),b=Object(o.a)(d,2),f=b[0],O=b[1],E=Object(n.useState)(1),v=Object(o.a)(E,2),j=v[0],g=v[1],h=Object(n.useState)(1),p=Object(o.a)(h,2),S=p[0],w=p[1];function T(){S<e.noOfTeams?(w(S+1),i(!0)):j<e.noOfRounds?(console.log("end of round"+j),O(!0)):console.log("end of game")}function x(){console.log("next round clicked"),g(j+1),w(1),O(!1),c(!0)}function y(t,a){var n=e.scoreByTeam,r=n[t-1].score+a;n[t-1].score=r,e.setScoreByTeam(n),console.log("new score by team = ",e.scoreByTeam)}return r.a.createElement("div",null,l?r.a.createElement("div",null,r.a.createElement(L,{noOfSecondsPerTurn:e.noOfSecondsPerTurn,setShowWords:c,nextTurn:T,setScoreByTeam:e.setScoreByTeam,currentTeam:S,updateScore:y})):s?r.a.createElement("div",null,r.a.createElement(A,{nextTeam:S,time:5,setShowWords:c,setShowNextTeam:i})):f?r.a.createElement("div",null,"Hello",r.a.createElement(W,{nextRound:x,scoreByTeam:e.scoreByTeam,currentRound:j})):void 0)},J=[{team:1,score:0},{team:2,score:0}],D=function(){var e=Object(n.useState)(2),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(10),m=Object(o.a)(c,2),i=m[0],d=m[1],b=Object(n.useState)(5),f=Object(o.a)(b,2),O=f[0],E=f[1],v=Object(n.useState)(J),j=Object(o.a)(v,2),g=j[0],h=j[1];return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(s,null)),r.a.createElement(u.a,{path:"/GameSettings"},r.a.createElement(T,{setNoOfSecondsPerTurn:E,setNoOfRounds:d,noOfRounds:i,noOfTeams:a,setNoOfTeams:l,setScoreByTeam:h})),r.a.createElement(u.a,{path:"/GameView"},r.a.createElement(M,{noOfSecondsPerTurn:O,scoreByTeam:g,setScoreByTeam:h,noOfRounds:i,noOfTeams:a})))};var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null,r.a.createElement(p,null,r.a.createElement(B,null,r.a.createElement(R,null,r.a.createElement(y,null,r.a.createElement(D,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(45);c.a.render(r.a.createElement($.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.189113d0.chunk.js.map