(this["webpackJsonputil-alpha-composition"]=this["webpackJsonputil-alpha-composition"]||[]).push([[0],{14:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),c=t.n(o),i=t(1),l=t(2);function u(){var n=Object(l.a)(["\n  margin: auto;\n  max-width: 35rem;\n"]);return u=function(){return n},n}var s=i.c.div(u()),m=t(3),d=t(13),f=function(n,e,t){return Math.round(t*e+(1-t)*n)},g=function(n){return n.toString(16).padStart(2,"0")},p=function(n){var e=n.red,t=n.green,r=n.blue;return"#".concat(g(e)).concat(g(t)).concat(g(r))},h=function(n){var e=n.red,t=n.green,r=n.blue,a=n.alpha;return"rgba(".concat(e,", ").concat(t,", ").concat(r,", ").concat(a.toPrecision(3),")")},b={md:"@media (min-width: ".concat("750px",")")},v={color:{palette:{primary:"#42aaf4"},background:{light:"#ededed"},text:{dark:"#050d11",grey:"#484848",light:"#fff"}}};function w(){var n=Object(l.a)(["\n  display: inline-block;\n  font-size: 0.9rem;\n"]);return w=function(){return n},n}function E(){var n=Object(l.a)(["\n  display: inline-block;\n  margin: 0.75rem;\n  position: relative;\n  text-align: left;\n  width: calc(100% - 1.5rem);\n\n  "," {\n    max-width: 320px;\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(l.a)(["\n  background: none;\n  border: none;\n  bottom: 0.25rem;\n  height: 1.5rem;\n  position: absolute;\n  right: 0.25rem;\n  width: 1.5rem;\n"]);return y=function(){return n},n}function j(){var n=Object(l.a)(["\n  border: 2px solid ",";\n  border-radius: 5px;\n  font-size: 1rem;\n  height: 2rem;\n  margin-top: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  text-transform: lowercase;\n  width: 100%;\n"]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n  color: ",";\n  font-size: 0.7rem;\n  margin: 0.25rem 0;\n"]);return O=function(){return n},n}var k=i.c.p(O(),v.color.text.grey),x=i.c.input(j(),v.color.text.grey),A=i.c.input(y()),z=i.c.label(E(),b.md),C=i.c.strong(w()),S=a.a.memo((function(n){var e=n.hintText,t=n.label,o=n.onUpdate,c=Object(r.useState)(""),i=Object(m.a)(c,2),l=i[0],u=i[1],s=Object(r.useState)(""),f=Object(m.a)(s,2),g=f[0],h=f[1],b=Object(r.useCallback)((function(n){var e=n.currentTarget.value,t=function(n){var e=n.replace("#","").replace("rgba(","").replace("rgb(","").replace(")","").split(",").map((function(n){return n.trim()}));if(1===e.length){var t=Object(d.a)(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,{r:1,g:2,b:3,a:4}).exec(e[0]);return(null===t||void 0===t?void 0:t.groups)?{red:parseInt(t.groups.r,16),green:parseInt(t.groups.g,16),blue:parseInt(t.groups.b,16),alpha:t.groups.a?parseInt(t.groups.a,16)/255:1}:null}if(3===e.length||4===e.length){var r=Object(m.a)(e,4),a=r[0],o=r[1],c=r[2],i=r[3];return a&&o&&c?{red:parseInt(a,10),green:parseInt(o,10),blue:parseInt(c,10),alpha:i?parseFloat(i):1}:null}return null}(e);h(e),u(t?p(t):""),o({type:"CHANGE_VALUE",value:e,color:t})}),[o]);return a.a.createElement(z,null,a.a.createElement(C,null,t),e?a.a.createElement(k,null,e):null,a.a.createElement(x,{onChange:b,value:g}),a.a.createElement(A,{onChange:b,type:"color",value:l}))})),U=t(7);function I(){var n=Object(l.a)(["\n  margin: 0.75rem;\n  padding: 0.75rem;\n  width: calc(100% - 1.5rem);\n\n  "," {\n    display: inline-block;\n    max-width: 320px;\n  }\n"]);return I=function(){return n},n}function W(){var n=Object(l.a)(["\n  font-weight: 700;\n  margin: 0.25rem 0;\n"]);return W=function(){return n},n}var T=i.c.p(W()),F=i.c.div(I(),b.md),L=function(n){var e=n.background,t=n.foreground,r=function(n){var e=n.red,t=n.green,r=n.blue,a=n.alpha;return"#".concat(g(e)).concat(g(t)).concat(g(r)).concat(g(Math.round(255*a)))}(t),o=h(t),c={color:o},i=function(n,e){var t=e.alpha;return{red:f(n.red,e.red,t),green:f(n.green,e.green,t),blue:f(n.blue,e.blue,t),alpha:1}}(e,t),l=p(i),u=h(i),s={color:u},m={background:h(Object(U.a)(Object(U.a)({},e),{},{alpha:1}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,{style:m},a.a.createElement(T,{style:c},"Original"),a.a.createElement(T,{style:c},r),a.a.createElement(T,{style:c},o)),a.a.createElement(F,{style:m},a.a.createElement(T,{style:s},"Adjusted"),a.a.createElement(T,{style:s},l),a.a.createElement(T,{style:s},u)))};function N(){var n=Object(l.a)(["\n  font-size: 1.4rem;\n  margin: 1rem 0;\n\n  "," {\n    font-size: 1.8rem;\n    margin: 10vh 0 1rem;\n  }\n"]);return N=function(){return n},n}function R(){var n=Object(l.a)(["\n  margin: 0.75rem auto;\n  max-width: 26rem;\n"]);return R=function(){return n},n}function B(){var n=Object(l.a)(["\n  font-size: 1.2rem;\n\n  "," {\n    font-size: 1.4rem;\n  }\n"]);return B=function(){return n},n}function G(){var n=Object(l.a)(["\n  margin: 1rem 0.75rem;\n\n  "," {\n    margin: 1.5rem 0.75rem;\n  }\n"]);return G=function(){return n},n}var H=i.c.header(G(),b.md),P=i.c.h2(B(),b.md),V=i.c.p(R()),_=i.c.h1(N(),b.md),J=function(){var n=Object(r.useState)(null),e=Object(m.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(null),i=Object(m.a)(c,2),l=i[0],u=i[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null,a.a.createElement(_,null,"Opacity Calculator"),a.a.createElement(V,null,"This tool calculates the solid color value of foreground color with opacity, on top of a solid background color.")),a.a.createElement(S,{hintText:'e.g. "#42aaf4", "rgb(66, 170, 244)"',label:"Background color",onUpdate:function(n){"CHANGE_VALUE"===n.type&&n.color&&o(n.color)}}),a.a.createElement(S,{hintText:'e.g. "#42aaf466", "rgb(66, 170, 244, .4)"',label:"Foreground color",onUpdate:function(n){"CHANGE_VALUE"===n.type&&n.color&&u(n.color)}}),l&&t?a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,"Result"),a.a.createElement(L,{background:t,foreground:l})):null)};t(21);function M(){var n=Object(l.a)(["\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html {\n    font-family: sans-serif;\n    font-size: 125%;\n    height: 100%;\n  }\n\n  body {\n    background-color: ",";\n    color: ",";\n    font-size: 0.8rem;\n    text-align: center;\n  }\n\n  #root {\n    height: 100%;\n    width: 100%;\n  }\n\n  button {\n    background: transparent;\n    border: none;\n    cursor: pointer;\n  }\n"]);return M=function(){return n},n}var $=Object(i.b)(M(),v.color.background.light,v.color.text.dark),q=function(){return a.a.createElement(s,null,a.a.createElement($,null),a.a.createElement(J,null))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}c.a.render(a.a.createElement(i.a,{theme:v},a.a.createElement(q,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/util-alpha-composition",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/util-alpha-composition","/service-worker.js");D?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):K(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(e,n)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.820cdd99.chunk.js.map