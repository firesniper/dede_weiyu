!function(){function e(e){sogouExplorer.extension.sendRequest(e)}function t(){var e="";return e=document.getSelection?document.getSelection().toString():document.selection.createRange().text,e=e.trim(),1==e.length&&1===e.charCodeAt(0)&&(e=""),e}function n(e,t,n){e.addEventListener?e.addEventListener(t,n,!0):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function i(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!0):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function o(e){e=e||window.event,e.target=e.target||e.srcElement;var t;e.which=e.which||(t=e.button,1&t?1:2&t?3:4&t?2:0);var n=document.documentElement,i=document.body;return e.pageX=e.pageX||e.clientX+(n&&n.scrollLeft||i&&i.scrollLeft||0)-(n&&n.clientLeft||i&&i.clientLeft||0),e.pageY=e.pageY||e.clientY+(n&&n.scrollTop||i&&i.scrollTop||0)-(n&&n.clientTop||i&&i.clientTop||0),e}function r(){try{document.execCommand("copy")}catch(e){}}function a(e,t){for(;e;){if(t(e)===!0)return e;e=e.parentNode}return null}function c(e){var t=!0,n=e.tagName.toLowerCase(),i=a(e,function(e){return e&&e.hasAttribute&&e.hasAttribute("contenteditable")});return(i||0==e.disabled&&("input"==n||"textarea"==n))&&(t=!1),t}function u(t,n){(0!=S||0!=t)&&n&&e({cmd:"panel",type:t,data:n,uuid:M.create()})}function d(e){for(var t=0;e&&1===e.nodeType;)t+=e.offsetLeft,e=e.offsetParent;return t}function m(e){return Math.max(e.scrollWidth,e.offsetWidth)}function l(){var e;if("getSelection"in window){var t=getSelection(),n=t.getRangeAt(0);e=n.commonAncestorContainer}else{var n=document.selection.createRange();e=n.parentElement}return e}function s(e){var t=l();if(1==t.nodeType){var n=d(t),i=n+m(t);return e>n&&i>e}return!0}function f(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function h(e){e.x1>e.x2&&f(e,"x1","x2"),e.y1>e.y2&&f(e,"y1","y2")}function v(e,t,n){h(n);var i=16;return t<n.y1-i||t>n.y2+i?!0:(e<n.x1||e>n.x2)&&!s(e)?!0:!1}function w(){try{"getSelection"in window?getSelection().removeAllRanges():document.selection.empty()}catch(e){}}function p(e){var t=arguments.callee;if("number"!=typeof t.offset){var n=document.body.scrollTop,i=document.createElement("div");i.style.cssText="position: absolute; left: 0; top: 0;",document.body.appendChild(i),t.offset=-i.getBoundingClientRect().top-n,document.body.removeChild(i),i=null}if(e){var o=e.getBoundingClientRect(),r=t.offset;return{top:o.top+r,right:o.right+r,bottom:o.bottom+r,left:o.left+r}}}function g(e,t){for(var n,i=document.getElementsByTagName("iframe"),o=0,r=i.length;r>o;++o){var a=i[o],c=a.getAttribute("name");if(c===e){n=a;break}}if(!n)for(var o=0,r=i.length;r>o;++o){var a=i[o];if(a.src===t){n=a;break}}var u={width:window.innerWidth||document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight,left:0,top:0};if(n){var d=p(n);u.left=d.left,u.top=d.top}return u}function y(){function e(e){if(r){e=o(e);var n={clientX:e.clientX,clientY:e.clientY},i=t();if(i){if(a.x2=e.pageX,a.y2=e.pageY,"mouseup"==e.type&&!e.shiftKey&&a.x2==a.x1&&a.y2==a.y1)return;setTimeout(function(){b(n)},0)}}r=!1}function i(e){var n=t();return n?void 0:u(0,e.type||"key")}if(!y.hasrun){y.hasrun=!0;var r=!1,a={};n(document,"mouseup",e),n(document,"dblclick",e),n(document,"mousedown",function(e){if(u(0,"mousedown"),e=o(e),1==e.which&&(r=c(e.target))){var n=t();if(n&&!e.shiftKey){var i=v(e.pageX,e.pageY,a);i&&w()}a.x1=e.pageX,a.y1=e.pageY}}),n(window,"resize",function(){u(0,"resize")}),n(document,"keydown",i),n(document,"keyup",i),n(document,"focusin",function(e){e=o(e);var t=e.target,n=t.nodeName.toUpperCase();("INPUT"==n||"TEXTAREA"==n)&&u(0,"focusin")}),n(document,"mousewheel",function(){u(0,"mousewheel-ie")}),n(window,"mousewheel",function(e){u(0,"mousewheel")}),n(window,"hashchange",function(e){var n=t();n&&w(),u(0,"hashchange")})}}function x(t,n){var i=window==top;if(i)a={x:t.clientX,y:t.clientY,w:window.innerWidth||document.documentElement.clientWidth,h:window.innerHeight||document.documentElement.clientHeight},n(a);else{var o=this.name;try{var r=p(frameElement),a={x:t.clientX+r.left,y:t.clientY+r.top,w:parent.innerWidth||parent.document.documentElement.clientWidth,h:parent.innerHeight||parent.document.documentElement.clientHeight};n(a)}catch(c){var u=t.clientX,d=t.clientY;e({cmd:"get-relative-position-and-size",id:R(function(e){a={x:u+e.left,y:d+e.top,w:e.width,h:e.height},n(a)}),data:{name:o,url:location.href}})}}}function b(e){function n(e){u(1,{text:i,zoom:100*X.zoom(),position:e})}if(!L){var i=t();return i&&"输入法手写拼音关闭"!=i?void x(e,n):void u(0,"no-selection")}}function P(e,t,n){var i,o=0,r=function(){n.timer=null,o=+new Date,e.apply(this,i)};return function(){i=arguments;var a=+new Date,c=t-(a-o);0>c?(n.timer&&(clearTimeout(n.timer),n.timer=null),o=a,e.apply(this,i)):!n.timer&&n.trailing&&(n.timer=setTimeout(r,c))}}function E(e,t,o){S=!!e,o&&(e&&t?n(document,"mousemove",k):(W.timer&&clearTimeout(W.timer),i(document,"mousemove",k)))}function C(){if(!C.hasRun){C.hasRun=!0;for(var e="prefix_",t=document.getElementsByTagName("iframe"),n=t.length-1;n>=0;n--){t[n].name||t[n].setAttribute("name",e+n);var i=t[n].getAttribute("src");i&&"about:blank"!=i&&(t[n].src+="#"+e+n)}}}if(!window._se_multi_trident_insert){window._se_multi_trident_insert=!0;for(var z=location.host,T=["wx.qq.com"],A=0;A<T.length;++A)if(T[A].indexOf(z)>-1)return;var X=function(){var e=function(){return window.devicePixelRatio||1},t=function(){return{zoom:1,devicePxPerCssPx:1}},n=function(){var t=Math.round(screen.deviceXDPI/screen.logicalXDPI*100)/100;return{zoom:t,devicePxPerCssPx:t*e()}},i=function(){var t=Math.round(document.documentElement.offsetHeight/window.innerHeight*100)/100;return{zoom:t,devicePxPerCssPx:t*e()}},o=function(){var t=Math.round(top.window.outerWidth/top.window.innerWidth*100)/100;return{zoom:t,devicePxPerCssPx:t*e()}},r=function(){var t=Math.round(window.outerWidth/window.innerWidth*100)/100;return{zoom:t,devicePxPerCssPx:t*e()}},a=function(){var t=90==Math.abs(window.orientation)?screen.height:screen.width,n=t/window.innerWidth;return{zoom:n,devicePxPerCssPx:n*e()}},c=function(){var t=function(e){return e.replace(/;/g," !important;")},n=document.createElement("div");n.innerHTML="1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0",n.setAttribute("style",t("font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;"));var i=document.createElement("div");i.setAttribute("style",t("width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;")),i.appendChild(n),document.body.appendChild(i);var o=1e3/n.clientHeight;return o=Math.round(100*o)/100,document.body.removeChild(i),{zoom:o,devicePxPerCssPx:o*e()}},u=function(){var e=l("min--moz-device-pixel-ratio","",0,10,20,1e-4);return e=Math.round(100*e)/100,{zoom:e,devicePxPerCssPx:e}},d=function(){return{zoom:u().zoom,devicePxPerCssPx:e()}},m=function(){var t=window.top.outerWidth/window.top.innerWidth;return t=Math.round(100*t)/100,{zoom:t,devicePxPerCssPx:t*e()}},l=function(e,t,n,i,o,r){function a(n,i,o){var u=(n+i)/2;if(0>=o||r>i-n)return u;var d="("+e+":"+u+t+")";return c(d).matches?a(u,i,o-1):a(n,u,o-1)}var c,u,d,m;window.matchMedia?c=window.matchMedia:(u=document.getElementsByTagName("head")[0],d=document.createElement("style"),u.appendChild(d),m=document.createElement("div"),m.className="mediaQueryBinarySearch",m.style.display="none",document.body.appendChild(m),c=function(e){d.sheet.insertRule("@media "+e+"{.mediaQueryBinarySearch {text-decoration: underline} }",0);var t="underline"==getComputedStyle(m,null).textDecoration;return d.sheet.deleteRule(0),{matches:t}});var l=a(n,i,o);return m&&(u.removeChild(d),document.body.removeChild(m)),l},s=function(){var e=t;return isNaN(screen.logicalXDPI)||isNaN(screen.systemXDPI)?window.navigator.msMaxTouchPoints?e=i:window.chrome&&!(window.opera||navigator.userAgent.indexOf(" Opera")>=0)?e=o:Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0?e=r:"orientation"in window&&"webkitRequestAnimationFrame"in window?e=a:"webkitRequestAnimationFrame"in window?e=c:navigator.userAgent.indexOf("Opera")>=0?e=m:window.devicePixelRatio?e=d:u().zoom>.001&&(e=u):e=n,e}();return{zoom:function(){return s().zoom},device:function(){return s().devicePxPerCssPx}}}();String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/,"")};var R=function(){var e="_sogou_search_translate_",t=1;return function(n){var i=e+ ++t;return window[i]=n,i}}(),M=function(){var e;return{get:function(){return e},create:function(){return e=(""+Math.random()).slice(2)+(new Date).getTime()}}}(),W={trailing:!0},k=P(function(t){t=o(t);var n={clientX:t.clientX,clientY:t.clientY};x(n,function(t){e({cmd:"opacity-update",data:{position:t,zoom:100*X.zoom()}})})},100,W);window==top&&("complate"==document.readyState?C():n(document,"DOMContentLoaded",C)),sogouExplorer.extension.onRequest.addListener(function(t,n,i){var o=t.cmd;switch(o){case"config-update":var a=t.data;L=1==!!a.disableAll;break;case"copy":t.uuid==M.get()&&r();break;case"run":var c=t.id,u=t.data,d=window[c];"function"==typeof d&&(d(u),window[c]=null);break;case"get-relative-position-and-size":if(top==window){var u=t.data,m=g(u.name,u.url);e({cmd:"run",id:t.id,data:m})}break;case"sync-layer-status":E(t.data,t.helper,t.support)}});var L=!1,S=!1;y()}}();