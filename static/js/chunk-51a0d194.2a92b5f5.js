(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51a0d194"],{"2d2d":function(e,t,n){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),a=n("577e"),c=n("5899"),s="["+c+"]",i=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),u=function(e){return function(t){var n=a(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(o,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(e,t,n){var r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var c,s;return a&&"function"==typeof(c=t.constructor)&&c!==n&&r(s=c.prototype)&&s!==n.prototype&&a(e,s),e}},a10a:function(e,t,n){"use strict";n.r(t);n("b680"),n("a9e3");var r=n("7a23"),a=Object(r["W"])("data-v-629997a4");Object(r["F"])("data-v-629997a4");var c={class:"page-box"},s={class:"my-team"},i={class:"top flex-middle"},o={class:"item flex-item"},u={class:"price"},l=Object(r["m"])("div",{class:"desc"},"直推地址总量(个)",-1),d={class:"item flex-item"},b={class:"price"},f=Object(r["m"])("div",{class:"desc"},"直推质押总量(ABDX)",-1),m=Object(r["m"])("div",{class:"list-box"},null,-1),p={class:"ul"},v={class:"li"},O={class:"value"},j=Object(r["m"])("span",{class:"key"},"直推地址:",-1),h={class:"li"},g={class:"value"},N=Object(r["m"])("span",{class:"key"},"质押总量:",-1);Object(r["D"])();var x=a((function(e,t,n,a,x,I){var w=Object(r["J"])("HeadTop");return Object(r["C"])(),Object(r["h"])("div",c,[Object(r["m"])(w,{title:"我的团队"}),Object(r["m"])("div",s,[Object(r["m"])("div",i,[Object(r["m"])("div",o,[Object(r["m"])("div",u,Object(r["N"])(e.childrenLength),1),l]),Object(r["m"])("div",d,[Object(r["m"])("div",b,Object(r["N"])(Number(e.total).toFixed(3)),1),f])]),m,(Object(r["C"])(!0),Object(r["h"])(r["a"],null,Object(r["I"])(e.list,(function(e){return Object(r["C"])(),Object(r["h"])("div",p,[Object(r["m"])("div",v,[Object(r["m"])("div",O,[j,Object(r["l"])(Object(r["N"])(e.address),1)])]),Object(r["m"])("div",h,[Object(r["m"])("div",g,[N,Object(r["l"])(Object(r["N"])(e.amount)+" ABDX",1)])])])})),256))])])})),I=n("5530"),w=n("1da1"),C=(n("96cf"),n("1a2e")),A=n("47e2"),k=n("5502"),E=n("01ea"),y=n("722f"),_=n("440b"),F=n("626a"),T={components:{HeadTop:C["a"]},setup:function(){var e=Object(k["b"])(),t=Object(A["b"])(),n=t.t,a=Object(r["G"])({$t:n,address:Object(r["f"])((function(){return e.state.accounts[0]})),web3:Object(r["f"])((function(){return e.state.provider})),investContract:null,abdxContract:null,tokenDecimls:0,childrenLength:0,total:0,list:[],initContract:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.investContract=new a.web3.eth.Contract(_,E["a"].investAddress),a.abdxContract=new a.web3.eth.Contract(y,E["a"].abdxAddress),e.next=4,a.abdxContract.methods.decimals().call();case 4:a.tokenDecimls=e.sent,a.initData();case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),initData:function(){a.getUserList()},getUserList:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,n,r,c,s,i,o,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.investContract.methods.getUserInfo(a.address).call();case 2:t=e.sent,n=t.children,r=0,c=[],s=null,n.length>0&&(s=F["a"].loading({duration:0,forbidClick:!0,message:"加载中..."})),a.childrenLength=n.length,i=0;case 10:if(!(i<n.length)){e.next=23;break}return e.next=14,a.investContract.methods.getUserInfo(n[i]).call();case 14:o=e.sent,u=Number(o.investAmmount/Math.pow(10,a.tokenDecimls)).toFixed(3),r=Number(u)+Number(r),l={address:n[i],amount:u},c.push(l);case 20:i++,e.next=10;break;case 23:a.list=c,a.total=r,n.length>0&&s.clear();case 26:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()});a.address&&a.initContract(),Object(r["S"])((function(){return a.address}),(function(e){e&&a.initContract()}));var c=Object(r["O"])(a);return Object(I["a"])({},c)}};n("c9fd");T.render=x,T.__scopeId="data-v-629997a4";t["default"]=T},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),c=n("94ca"),s=n("6eeb"),i=n("5135"),o=n("c6b6"),u=n("7156"),l=n("d9b5"),d=n("c04e"),b=n("d039"),f=n("7c73"),m=n("241c").f,p=n("06cf").f,v=n("9bf2").f,O=n("58a8").trim,j="Number",h=a[j],g=h.prototype,N=o(f(g))==j,x=function(e){if(l(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,r,a,c,s,i,o,u=d(e,"number");if("string"==typeof u&&u.length>2)if(u=O(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(c=u.slice(2),s=c.length,i=0;i<s;i++)if(o=c.charCodeAt(i),o<48||o>a)return NaN;return parseInt(c,r)}return+u};if(c(j,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var I,w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(N?b((function(){g.valueOf.call(n)})):o(n)!=j)?u(new h(x(t)),n,w):x(t)},C=r?m(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;C.length>A;A++)i(h,I=C[A])&&!i(w,I)&&v(w,I,p(h,I));w.prototype=g,g.constructor=w,s(a,j,w)}},c9fd:function(e,t,n){"use strict";n("2d2d")}}]);
//# sourceMappingURL=chunk-51a0d194.2a92b5f5.js.map