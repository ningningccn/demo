(function(e){function t(t){for(var a,i,o=t[0],d=t[1],l=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var d=n[o];0!==r[d]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var s=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("bc3a"),c=n.n(r),i=n("2106"),o=n.n(i),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.data[0]?n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"title"},[e._v(" 專案名稱: "+e._s(e.data[0].name)+" ")]),n("div",{staticClass:"parallax-img2"},[n("div",{staticClass:"context-data"},[n("p",[e._v("專案描述: "+e._s(e.data[0].description)+" ")]),n("p",[e._v("專案網址: "+e._s(e.data[0].html_url)+" ")]),n("p",[e._v("專案建立: "+e._s(e.data[0].created_at)+" ")]),n("p",[e._v("專案更新: "+e._s(e.data[0].updated_at)+" ")])])])]):e._e()},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"parallax-img1"},[n("div",{staticClass:"context"},[n("span",[e._v("Scroll Down")])])])}],s=(n("a4d3"),n("e01a"),n("b0c0"),{data:function(){return{data:[],index:1}},methods:{getApi:function(){var e="https://api.github.com/users/ningningccn/repos",t=this;t.axios.get(e).then((function(e){t.data=e.data}))},createPost:function(e,t){var n=document.getElementsByClassName("container")[0],a=document.createElement("div");a.className="title";var r=document.createElement("div"),c=document.createElement("div"),i=document.createElement("p"),o=document.createElement("p"),d=document.createElement("p"),l=document.createElement("p");r.className="parallax-img2",c.className="context-data",a.innerHTML="專案名稱: ".concat(e[t].name),i.innerHTML="專案網址: ".concat(e[t].html_url),o.innerHTML="專案建立: ".concat(e[t].created_at),d.innerHTML="專案更新: ".concat(e[t].updated_at),l.innerHTML="專案描述: ".concat(e[t].description),n.appendChild(a),n.appendChild(r),r.appendChild(c),c.appendChild(l),c.appendChild(i),c.appendChild(o),c.appendChild(d)},createLastPost:function(){var e=document.getElementsByClassName("container")[0],t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("span"),r=document.createElement("div");r.className="title",t.className="parallax-img3",n.className="context",t.appendChild(n),n.appendChild(a),a.innerHTML="End",e.appendChild(r),e.appendChild(t)}},created:function(){this.getApi()},mounted:function(){var e=this;window.addEventListener("scroll",(function(){var t=e,n=document.documentElement,a=n.scrollHeight,r=n.scrollTop,c=n.clientHeight;r+c>a-5&&(t.data.length>t.index?(t.createPost(t.data,t.index),e.index+=1):t.data.length===t.index&&(e.index+=1,t.createLastPost()))}))}}),u=s,p=(n("5c0b"),n("2877")),m=Object(p["a"])(u,d,l,!1,null,null,null),f=m.exports,v=n("8c4f");a["a"].use(v["a"]);var h=[],_=new v["a"]({mode:"hash",base:"",routes:h}),g=_;a["a"].config.productionTip=!1,a["a"].use(o.a,c.a),new a["a"]({router:g,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.0763a70a.js.map