(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ca=ba(this),da="function"===typeof Symbol&&"symbol"===typeof Symbol("x"),p={},v={};function w(a,b){var c=v[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]} 
function z(a,b,c){if(b)a:{var d=a.split(".");a=1===d.length;var e=d[0],f;!a&&e in p?f=p:f=ca;for(e=0;e<d.length-1;e++){var g=d[e];if(!(g in f))break a;f=f[g]}d=d[d.length-1];c=da&&"es6"===c?f[d]:null;b=b(c);null!=b&&(a?l(p,d,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===v[d]&&(v[d]=da?ca.Symbol(d):"$jscp$"+d),l(f,v[d],{configurable:!0,writable:!0,value:b})))}} 
z("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}},"es6"); 
z("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.g=e;l(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.g};var d=0;return b},"es6"); 
z("Symbol.iterator",function(a){if(a)return a;a=(0,p.Symbol)("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ca[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&l(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a},"es6");function ea(a){a={next:a};a[w(p.Symbol,"iterator")]=function(){return this};return a} 
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[w(p.Symbol,"iterator")]=function(){return e};return e}z("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}},"es8");z("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}},"es8"); 
z("Array.prototype.keys",function(a){return a?a:function(){return fa(this,function(b){return b})}},"es6");var B=this||self,ha=/^[\w+/_-]+[=]{0,2}$/,ia=null;function ja(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ha.test(a)?a:""}function ka(a){return a};function E(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};function oa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var pa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};var F;a:{var qa=B.navigator;if(qa){var ra=qa.userAgent;if(ra){F=ra;break a}}F=""};var H;function I(a,b){this.g=b===sa?a:""}I.prototype.toString=function(){return this.g+""};var sa={};function ta(a){if(void 0===H){var b=null;var c=B.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:ka,createScript:ka,createScriptURL:ka})}catch(d){B.console&&B.console.error(d.message)}H=b}else H=b}a=(b=H)?b.createScriptURL(a):a;return new I(a,sa)};function ua(a,b){a.src=b instanceof I&&b.constructor===I?b.g:"type_error:TrustedResourceUrl";(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=B?b=ja(b.document):(null===ia&&(ia=ja(B.document)),b=ia);b&&a.setAttribute("nonce",b)};function va(a){va[" "](a);return a}va[" "]=function(){};function wa(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};var xa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ya(a){var b=a.match(xa);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}function J(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var za=/#|$/; 
function Aa(a,b){var c=a.search(za),d=J(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}var Ba=/[?&]($|#)/; 
function K(a,b,c){for(var d=a.search(za),e=0,f,g=[];0<=(f=J(a,e,b,d));)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||d,d);g.push(a.substr(e));a=g.join("").replace(Ba,"$1");c=null!=c?"="+encodeURIComponent(String(c)):"";(b+=c)?(c=a.indexOf("#"),0>c&&(c=a.length),d=a.indexOf("?"),0>d||d>c?(d=c,e=""):e=a.substring(d+1,c),c=[a.substr(0,d),e,a.substr(c)],a=c[1],c[1]=b?a?a+"&"+b:b:a,b=c[0]+(c[1]?"?"+c[1]:"")+c[2]):b=a;return b};function Ca(){if(!B.crypto)return Math.random();try{var a=new Uint32Array(1);B.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}}function Da(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var Fa=oa(function(){return pa(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],Ea)||1E-4>Math.random()}),Ga=oa(function(){return-1!=F.indexOf("MSIE")});function Ea(a){return-1!=F.indexOf(a)} 
function L(a){return/^true$/.test(a)};var Ha=E("0.20"),Ia=E("0.002"),Ja=E("0.00"),Ka=E("0.00"),La=L("true"),Ma=L("true"),Na=L("true"),Oa=L("true"),Pa=L("false");var Qa=null;function Ra(){if(null===Qa){Qa="";try{var a="";try{a=B.top.location.hash}catch(c){a=B.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);Qa=b?b[1]:""}}catch(c){}}return Qa} 
function Sa(a,b,c){var d=M;if(c?d.g.hasOwnProperty(c)&&""==d.g[c]:1){var e;e=(e=Ra())?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!Ga()&&!Fa()&&(e=Math.random(),e<b)){e=Ca();a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(c?d.g.hasOwnProperty(c)&&(d.g[c]=a):d.i[a]=!0)}}function Ta(a){var b=M;return b.g.hasOwnProperty(a)?b.g[a]:""}function Ua(){var a=M,b=[];Da(a.i,function(c,d){b.push(d)});Da(a.g,function(c){""!=c&&b.push(c)});return b};var Va={C:2,J:13,I:14,F:16,D:17},M=null;function Wa(){return!!M&&"592230571"==Ta(16)};var N=window,Xa=document;var Ya={};function O(a){Ya.TAGGING=Ya.TAGGING||[];Ya.TAGGING[a]=!0};function Za(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&O(4):O(5);return b}function $a(a,b){if(a&&Za(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]}function ab(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};var bb={};function cb(){return void 0==bb.gtag_cs_api?!1:bb.gtag_cs_api};var P=[];function Q(){var a={};var b=N.google_tag_data;N.google_tag_data=void 0===b?a:b;a=N.google_tag_data;a.ics||(a.ics={entries:{},set:db,update:eb,addListener:fb,notifyListeners:gb,active:!1,usedDefault:!1});return a.ics} 
function db(a,b,c,d,e,f){var g=Q();g.active=!0;g.usedDefault=!0;if(void 0!=b){var k=g.entries;g=k[a]||{};var h=g.region;c=c&&"string"==typeof c?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||c===e||(c===d?h!==e:!c&&!h)){e=!!(f&&0<f&&void 0===g.update);var m={region:c,initial:"granted"===b,update:g.update,quiet:e};if(""!==d||!1!==g.initial)k[a]=m;e&&N.setTimeout(function(){k[a]===m&&m.quiet&&(m.quiet=!1,hb(a),gb(),O(2))},f)}}} 
function eb(a,b){var c=Q();c.active=!0;if(void 0!=b){var d=S(a);c=c.entries;c=c[a]=c[a]||{};c.update="granted"===b;b=S(a);c.quiet?(c.quiet=!1,hb(a)):b!==d&&hb(a)}}function fb(a,b){P.push({o:a,u:b})}function hb(a){for(var b=0;b<P.length;++b){var c=P[b];Za(c.o)&&-1!==c.o.indexOf(a)&&(c.s=!0)}}function gb(a){for(var b=0;b<P.length;++b){var c=P[b];if(c.s){c.s=!1;try{c.u({K:a})}catch(d){}}}}function S(a){a=Q().entries[a]||{};return void 0!==a.update?a.update:void 0!==a.initial?a.initial:void 0} 
function ib(a){return!(Q().entries[a]||{}).quiet}function jb(a,b){Q().addListener(a,b)}function kb(a){function b(){for(var e=0;e<c.length;e++)if(!ib(c[e]))return!0;return!1}var c=["ad_storage"];if(b()){var d=!1;jb(c,function(e){d||b()||(d=!0,a(e))})}else a({})}function lb(a){if(!1===S("ad_storage")){var b=!1;jb(["ad_storage"],function(c){!b&&S("ad_storage")&&(a(c),b=!0)})}};var mb=/:[0-9]+$/;function nb(a,b){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(decodeURIComponent(d[0]).replace(/\+/g," ")===b)return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g," ")}} 
function ob(a,b){var c="query";if("protocol"===c||"port"===c)a.protocol=pb(a.protocol)||pb(N.location.protocol);"port"===c?a.port=String(Number(a.hostname?a.port:N.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===c&&(a.hostname=(a.hostname||N.location.hostname).replace(mb,"").toLowerCase());var d=pb(a.protocol);c&&(c=String(c).toLowerCase());switch(c){case "url_no_fragment":b="";a&&a.href&&(b=a.href.indexOf("#"),b=0>b?a.href:a.href.substr(0,b));a=b;break;case "protocol":a= 
d;break;case "host":a=a.hostname.replace(mb,"").toLowerCase();break;case "port":a=String(Number(a.port)||("http"==d?80:"https"==d?443:""));break;case "path":a.pathname||a.hostname||O(1);a="/"==a.pathname.charAt(0)?a.pathname:"/"+a.pathname;a=a.split("/");a:if(b=a[a.length-1],c=[],Array.prototype.indexOf)b=c.indexOf(b),b="number"==typeof b?b:-1;else{for(d=0;d<c.length;d++)if(c[d]===b){b=d;break a}b=-1}0<=b&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?","");b&&(a=nb(a,b)); 
break;case "extension":a=a.pathname.split(".");a=1<a.length?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#","");break;default:a=a&&a.href}return a}function pb(a){return a?a.replace(":","").toLowerCase():""};function qb(a,b,c,d){if(rb(d)){d=[];b=String(b||document.cookie).split(";");for(var e=0;e<b.length;e++){var f=b[e].split("="),g=f[0].replace(/^\s*|\s*$/g,"");g&&g==a&&((f=f.slice(1).join("=").replace(/^\s*|\s*$/g,""))&&c&&(f=decodeURIComponent(f)),d.push(f))}a=d}else a=[];return a}function sb(a,b,c,d){var e=document.cookie;document.cookie=a;a=document.cookie;return e!=a||void 0!=c&&0<=qb(b,a,!1,d).indexOf(c)} 
function tb(a,b,c){function d(x,q,y){if(null==y)return delete g[q],x;g[q]=y;return x+"; "+q+"="+y}function e(x,q){if(null==q)return delete g[q],x;g[q]=!0;return x+"; "+q}if(rb(c.l)){if(void 0==b)var f=a+"=deleted; expires="+(new Date(0)).toUTCString();else c.encode&&(b=encodeURIComponent(b)),b=ub(b),f=a+"="+b;var g={};f=d(f,"path",c.path);if(c.expires instanceof Date)var k=c.expires.toUTCString();else null!=c.expires&&(k=c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.M);f=d(f,"samesite",c.N);c.O&& 
(f=e(f,"secure"));k=c.domain;if("auto"===k){k=vb();for(var h=0;h<k.length;++h){var m="none"!==k[h]?k[h]:void 0,n=d(f,"domain",m);n=e(n,c.flags);if(!wb(m,c.path)&&sb(n,a,b,c.l))break}}else k&&"none"!==k&&(f=d(f,"domain",k)),f=e(f,c.flags),wb(k,c.path)||sb(f,a,b,c.l)}}function ub(a){a&&1200<a.length&&(a=a.substring(0,1200));return a}var xb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,zb=/(^|\.)doubleclick\.net$/i;function wb(a,b){return zb.test(document.location.hostname)||"/"===b&&xb.test(a)} 
function vb(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));b=document.location.hostname;zb.test(b)||xb.test(b)||a.push("none");return a}function rb(a){if(!(cb()&&a&&cb()&&Q().active))return!0;if(!ib(a))return!1;a=S(a);return null==a?!0:!!a};function Ab(a,b){var c,d=a.L;null==d&&(d=7776E3);0!==d&&(c=new Date((b||(new Date).getTime())+1E3*d));return{path:a.path,domain:a.domain,flags:a.flags,encode:!0,expires:c}};var Bb=/^\w+$/,Cb=/^[\w-]+$/,Db=/^~?[\w-]+$/,Eb={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Fb(){if(!cb()||!cb()||!Q().active)return!0;var a=S("ad_storage");return null==a?!0:!!a}function Gb(a,b){ib("ad_storage")?Fb()?a():lb(a):b?O(3):kb(function(){Gb(a,!0)})}function Hb(a){return Ib(document,a).map(function(b){return b.h})} 
function Ib(a,b){var c=[];if(!a.cookie)return c;a=qb(b,a.cookie,void 0,"ad_storage");if(!a||0==a.length)return c;b={};for(var d=0;d<a.length;b={j:b.j},d++){b.j=Jb(a[d]);var e=Kb(a[d]);if(b.j&&e){var f=$a(c,function(g){return function(k){return k.h===g.j}}(b));f&&f.timestamp<e?f.timestamp=e:f||c.push({h:b.j,timestamp:e})}}return Lb(c)}function Mb(a){return a&&"string"==typeof a&&a.match(Bb)?a:"_gcl"} 
function Nb(){var a=N.location.href,b=Xa.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||O(1),c="/"+c);a=b.hostname.replace(mb,"");var d={href:b.href,protocol:b.protocol,host:b.host,hostname:a,pathname:c,search:b.search,hash:b.hash,port:b.port};b=ob(d,"gclid");c=ob(d,"gclsrc");a=ob(d,"gbraid");var e=ob(d,"dclid");b&&c&&a||(d=d.hash.replace("#",""),b=b||nb(d,"gclid"),c=c||nb(d,"gclsrc"),a=a||nb(d,"gbraid"));return Ob(b,c,e,a)} 
function Ob(a,b,c,d){function e(g,k){f[k]||(f[k]=[]);f[k].push(g)}var f={};f.gclid=a;f.gclsrc=b;f.dclid=c;void 0!==d&&Cb.test(d)&&(f.gbraid=d,e(d,"gb"));if(void 0!==a&&a.match(Cb))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return f}function Pb(){var a={},b=Nb();Gb(function(){Qb(b,a)})} 
function Qb(a,b,c){function d(h){return["GCL",k,h].join(".")}function e(h,m){h=Eb[h];h=void 0!==h?f+h:void 0;h&&(null==g.path&&(g.path="/"),g.domain||(g.domain="auto"),tb(h,m,g))}b=b||{};var f=Mb(b.prefix);c=c||(new Date).getTime();var g=Ab(b,c);g.l="ad_storage";var k=Math.round(c/1E3);a.aw&&(!0===b.P?e("aw",d("~"+a.aw[0])):e("aw",d(a.aw[0])));a.dc&&e("dc",d(a.dc[0]));a.gf&&e("gf",d(a.gf[0]));a.ha&&e("ha",d(a.ha[0]));a.gp&&e("gp",d(a.gp[0]))} 
function Kb(a){a=a.split(".");return 3!==a.length||"GCL"!==a[0]?0:1E3*(Number(a[1])||0)}function Jb(a){a=a.split(".");if(3==a.length&&"GCL"==a[0]&&a[1])return a[2]}function Lb(a){return a.filter(function(b){return Db.test(b.h)})}function Rb(){for(var a=["aw"],b={},c=Mb(b.prefix),d={},e=0;e<a.length;e++)Eb[a[e]]&&(d[a[e]]=Eb[a[e]]);Gb(function(){ab(d,function(f,g){g=qb(c+g,Xa.cookie,void 0,"ad_storage");if(g.length){g=g[0];var k=Kb(g),h={};h[f]=[Jb(g)];Qb(h,b,k)}})})};var Sb=/^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,Tb=/^~?[\w-]+(?:\.~?[\w-]+)*$/,Ub=/^\d+\.fls\.doubleclick\.net$/,Vb=/;gac=([^;?]+)/,Wb=/;gclaw=([^;?]+)/,Xb=/;gclgb=([^;?]+)/;function Yb(a,b,c,d){if(Ub.test(a.location.host)){if((a=a.location.href.match(d))&&2==a.length&&a[1].match(Tb))return[{h:a[1]}]}else return Ib(a,(b||"_gcl")+c);return[]}function Zb(a,b){return Yb(a,b,"_aw",Wb).map(function(c){return c.h}).join(".")} 
function $b(a,b){return Yb(a,b,"_gb",Xb).map(function(c){return c.h}).join(".")}function ac(a,b){a=Ib(a,b);for(var c=b=0;c<a.length;c++)b=Math.max(b,a[c].timestamp);return b}function bc(a){0!==Hb("_gcl_aw").length||a&&0!==Hb(a+"_aw").length||(Pb(),Rb())};function cc(a){var b=B.performance;return b&&b.timing&&b.timing[a]||0};var dc={G:0,v:1,H:2,B:3,A:4};function T(){this.g={}}function ec(a,b,c){"number"===typeof c&&0<c&&(a.g[b]=Math.round(c))}function fc(a){var b=T.g();var c=void 0===c?B:c;c=c.performance;ec(b,a,c&&c.now?c.now():null)}function gc(){function a(){return ec(b,0,cc("loadEventStart")-cc("navigationStart"))}var b=T.g();0!=cc("loadEventStart")?a():window.addEventListener("load",a)}function hc(a,b){b.google_tag_manager&&b.google_tag_manager._li&&(b=b.google_tag_manager._li,ec(a,4,b.cbt),ec(a,3,b.cst))} 
function ic(){var a=T.g();return w(Object,"values").call(Object,dc).map(function(b){return[b,a.g[b]||0]})}T.i=void 0;T.g=function(){return T.i?T.i:T.i=new T};function jc(a,b,c){a=kc(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=c;return!0}function kc(a,b){var c=a.GooglebQhCsO;c||(c={},b&&(a.GooglebQhCsO=c));return c};var lc={},mc=null; 
function nc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=4;void 0===a&&(a=0);if(!mc)for(mc={},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));lc[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===mc[k]&&(mc[k]=g)}}a=lc[a];c=[];for(d=0;d<b.length;d+=3){var h=b[d],m=(e=d+1<b.length)?b[d+1]:0;k=(f=d+2<b.length)?b[d+2]:0;g=h>>2;h=(h&3)<<4|m>> 
4;m=(m&15)<<2|k>>6;k&=63;f||(k=64,e||(m=64));c.push(a[g],a[h],a[m]||"",a[k]||"")}return c.join("")};function oc(a,b,c,d){var e=Aa(c,"fmt");if(d){var f=Aa(c,"random"),g=Aa(c,"label")||"";if(!f)return!1;f=nc(decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," ")));if(!jc(a,f,d))return!1}e&&4!=e&&(c=K(c,"rfmt",e));e=K(c,"fmt",4);c=wa("SCRIPT");e=ta(e);ua(c,e);c.onload=function(){a.google_noFurtherRedirects&&d&&d.call&&(a.google_noFurtherRedirects=null,d())};b.getElementsByTagName("script")[0].parentElement.appendChild(c);return!0};var pc=L("false");function qc(){if("function"==typeof N.__uspapi){var a="";try{N.__uspapi("getUSPData",1,function(b,c){c&&b&&(b=b.uspString)&&/^[\da-zA-Z-]{1,20}$/.test(b)&&(a=b)})}catch(b){}return a}};var rc={id:!0,origin:!0,destination:!0,start_date:!0,end_date:!0,location_id:!0},sc="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" "); 
function tc(a,b){var c=a;return function(){--c;0>=c&&b()}}function U(a){return null!=a?encodeURIComponent(String(a)):""}function uc(a){if(null!=a){a=String(a).substring(0,512);var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}return""}function V(a,b){b=U(b);return""!=b&&(a=U(a),""!=a)?"&".concat(a,"=",b):""}function vc(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")} 
function wc(a){if(!a||"object"!=typeof a||"function"==typeof a.join)return"";var b=[],c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=a[c];if(d&&"function"==typeof d.join){for(var e=[],f=0;f<d.length;++f){var g=vc(d[f]);null!=g&&e.push(g)}d=0==e.length?null:e.join(",")}else d=vc(d);(e=vc(c))&&null!=d&&b.push(e+"="+d)}return b.join(";")}function W(a){return"number"!=typeof a&&"string"!=typeof a?"":U(a.toString())} 
function xc(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain&&(!b.google_gcl_cookie_prefix||!/^_ycl/.test(b.google_gcl_cookie_prefix)))return"";var c="",d="";b.google_gcl_cookie_prefix&&/^[a-zA-Z0-9_]+$/.test(b.google_gcl_cookie_prefix)&&"_gcl"!=b.google_gcl_cookie_prefix&&(d=b.google_gcl_cookie_prefix);b=d;if(Pa)if(Ub.test(a.location.host))b=!(Wb.test(a.location.href)||Vb.test(a.location.href));else{var e=ac(a,(b||"_gcl")+"_aw");b=ac(a,(b||"_gcl")+"_gb")> 
e}else b=!1;if(b){if(d)return c=$b(a,d),V("gclgb",c);var f=$b(a);f&&(c=V("gclgb",f));return c}if(d)return c=Zb(a,d),V("gclaw",c);(d=Zb(a))&&(c=V("gclaw",d));if(Ub.test(a.location.host))f=(f=a.location.href.match(Vb))&&2==f.length&&f[1].match(Sb)?decodeURIComponent(f[1]):"";else{if(Fb()){d=[];a=a.cookie.split(";");b=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/;for(e=0;e<a.length;e++){var g=a[e].match(b);g&&d.push({m:g[1],value:g[2]})}a={};if(d&&d.length)for(b=0;b<d.length;b++)e=d[b].value.split("."),"1"== 
e[0]&&3==e.length&&e[1]&&(a[d[b].m]||(a[d[b].m]=[]),a[d[b].m].push({timestamp:e[1],h:e[2]}));d=a}else d={};a=[];for(f in d){b=[];e=d[f];for(g=0;g<e.length;g++)b.push(e[g].h);a.push(f+":"+b.join(","))}f=0<a.length?a.join(";"):""}return c+(f?V("gac",f):"")}function yc(a){function b(d){try{return decodeURIComponent(d),!0}catch(e){return!1}}a=a?a.title:"";if(void 0==a||""==a)return"";a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)} 
function zc(a,b,c,d,e,f){f=void 0===f?null:f;var g="https://",k="landing"===d.google_conversion_type?"/extclk":"/";switch(e){default:return"";case 2:case 3:var h="googleads.g.doubleclick.net/";var m="pagead/viewthroughconversion/";break;case 1:h="www.google.com/";m="pagead/1p-conversion/";break;case 0:h=d.google_conversion_domain||"www.googleadservices.com/";m="pagead/conversion/";break;case 4:h="www.google.com/",m="pagead/privacysandbox/conversion/"}La&&d.google_transport_url&&(h=d.google_transport_url); 
"/"!==h[h.length-1]&&(h+="/");if(0===h.indexOf("http://")||0===h.indexOf("https://"))g="";g=[g,h,m,U(d.google_conversion_id),k,"?random=",U(d.google_conversion_time)].join("");var n=f;n=void 0===n?null:n;f=V("cv",d.google_conversion_js_version);h=V("fst",d.google_conversion_first_time);m=V("num",d.google_conversion_snippets);k=V("fmt",d.google_conversion_format);var x=d.google_remarketing_only?V("userId",d.google_user_id):"";var q=d.google_tag_for_child_directed_treatment;q=null==q||0!=q&&1!=q?"": 
V("tfcd",q);var y=d.google_tag_for_under_age_of_consent;y=null==y||0!=y&&1!=y?"":V("tfua",y);var la=d.google_allow_ad_personalization_signals;la=!1===la?V("npa",1):!0===la?V("npa",0):"";var ma=d.google_restricted_data_processing;ma=Na?!0===ma?V("rdp",1):!1===ma?V("rdp",0):"":"";var Gc=V("value",d.google_conversion_value),Hc=V("currency_code",d.google_conversion_currency),Ic=V("label",d.google_conversion_label),Jc=V("oid",d.google_conversion_order_id),Kc=V("bg",d.google_conversion_color);a:{var t= 
d.google_conversion_language;if(null!=t){t=t.toString();if(2==t.length){t=V("hl",t);break a}if(5==t.length){t=V("hl",t.substring(0,2))+V("gl",t.substring(3,5));break a}}t=""}var Lc=V("guid","ON"),Mc=!d.google_conversion_domain&&"GooglemKTybQhCsO"in B&&"function"==typeof B.GooglemKTybQhCsO?V("resp","GooglemKTybQhCsO"):"",Nc=V("disvt",d.google_disable_viewthrough),Oc=V("eid",Ua().join());var R=d.google_conversion_date;var r=[];if(a){var D=a.screen;D&&(r.push(V("u_h",D.height)),r.push(V("u_w",D.width)), 
r.push(V("u_ah",D.availHeight)),r.push(V("u_aw",D.availWidth)),r.push(V("u_cd",D.colorDepth)));a.history&&r.push(V("u_his",a.history.length))}R&&"function"==typeof R.getTimezoneOffset&&r.push(V("u_tz",-R.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&r.push(V("u_java",b.javaEnabled())),b.plugins&&r.push(V("u_nplug",b.plugins.length)),b.mimeTypes&&r.push(V("u_nmime",b.mimeTypes.length)));R=r.join("");r=V("gtm",d.google_gtm);b=b&&b.sendBeacon?V("sendb","1"):"";D=Ac();var Qc=V("ig",/googleadservices\.com/.test("www.google.com")? 
1:0),C=n;C=void 0===C?null:C;n=wc(d.google_custom_params);C=wc(C);n=n.concat(0<n.length&&0<C.length?";":"",C);n=""==n?"":"&".concat("data=",encodeURIComponent(n));C=xc(c,d);var yb=d.google_conversion_page_url,Rc=d.google_conversion_referrer_url,na="";if(c){if(a.top==a)var u=0;else{var G=a.location.ancestorOrigins;if(G)u=G[G.length-1]==a.location.origin?1:2;else{G=a.top;try{var A;if(A=!!G&&null!=G.location.href)c:{try{va(G.foo);A=!0;break c}catch(Sc){}A=!1}u=A}catch(Sc){u=!1}u=u?1:2}}A=yb?yb:1==u? 
a.top.location.href:a.location.href;na+=V("frm",u);na+=V("url",uc(A));na+=V("ref",uc(Rc||c.referrer))}a=[f,h,m,k,x,q,y,la,ma,Gc,Hc,Ic,Jc,Kc,t,Lc,Mc,Nc,Oc,R,r,b,D,Qc,n,C,na,yc(c),Bc(d.google_additional_params),Bc(d.google_remarketing_only?{}:d.google_additional_conversion_params),"&hn="+U("www.google.com"),Cc(a)].join("");c=Ra();a+=0<c.length?"&debug_experiment_id="+c:"";if(d.google_remarketing_only||d.google_conversion_domain)d=a;else{c=[V("mid",d.google_conversion_merchant_id),V("fcntr",d.google_basket_feed_country), 
V("flng",d.google_basket_feed_language),V("dscnt",d.google_basket_discount),V("bttype",d.google_basket_transaction_type)].join("");if(d)if(d=d.google_conversion_items){u=[];A=0;for(f=d.length;A<f;A++)h=d[A],m=[],h&&(m.push(W(h.value)),m.push(W(h.quantity)),m.push(W(h.item_id)),m.push(W(h.start_date)),m.push(W(h.end_date)),u.push("("+m.join("*")+")"));d=0<u.length?"&item="+u.join(""):""}else d="";else d="";d=[a,c,d].join("");d=4E3<d.length?[a,V("item","elngth")].join(""):d}g+=d;1===e?g+=[V("gcp",1), 
V("sscte",1),V("ct_cookie_present",1)].join(""):3==e&&(g+=V("gcp",1),g+=V("ct_cookie_present",1));Ma&&(e=qc(),void 0!==e&&(g+=V("us_privacy",e||"error")));return g}function Dc(a){if(!pc){var b=wa("IFRAME");b.style.display="none";b.src="https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";a.body.appendChild(b)}}function Ec(){return new Image} 
function Fc(a,b,c,d,e,f){var g=c.onload_callback,k;e&&g&&g.call?k=g:k=function(){};d+=V("async","1");e=c.google_gtm_url_processor;"function"==typeof e&&(d=e(d));g=(e=c.opt_image_generator)&&e.call;if(!(f=g||!f)){if(c.google_conversion_domain)var h=!1;else try{h=oc(a,b,d,k)}catch(m){h=!1}f=!h}f&&(a=Ec,g&&(a=e),a=a(),a.src=d,a.onload=k)} 
function Pc(a,b){M&&"376635471"==Ta(2)&&("complete"===b.readyState?Dc(b):a.addEventListener?a.addEventListener("load",function(){Dc(b)}):a.attachEvent("onload",function(){Dc(b)}))} 
function Tc(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version= 
"9";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=3);!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0);return!0}function Uc(a,b){function c(f){d[f]=b&&null!=b[f]?b[f]:a[f]}for(var d={},e=0;e<sc.length;e++)c(sc[e]);c("onload_callback");return d} 
function Vc(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=void 0;d.hasOwnProperty("google_business_vertical")?(e=d.google_business_vertical,b[e]=b[e]||{google_business_vertical:e}):(e="",Object.prototype.hasOwnProperty.call(b,e)||(b[e]={}));e=b[e];for(var f=w(Object,"keys").call(Object,d).filter(function(h){return rc.hasOwnProperty(h)}),g=0;g<f.length;g++){var k=f[g];k in e||(e[k]=[]);e[k].push(d[k])}}return w(Object,"values").call(Object,b)} 
function Ac(){var a="";Wa()&&(a=ic().map(function(b){return b.join("-")}).join("_"));return V("li",a)}function Cc(a){if(!Oa||!a.__gsaExp||!a.__gsaExp.id)return"";a=a.__gsaExp.id;if("function"!=typeof a)return"";try{var b=Number(a());return isNaN(b)?"":V("gsaexp",b)}catch(c){return""}}function Bc(a){if(!a)return"";var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+=V(c,a[c]));return b};var Wc=!1;function Xc(a,b){a.onload_callback&&"function"==typeof a.onload_callback.call?a.onload_callback=tc(b,a.onload_callback):a.onload_callback=function(){}} 
function Yc(a,b,c,d){if(!d)return!1;Wa()&&(fc(2),d.google_gtm&&hc(T.g(),a));var e=!1;if(3!=d.google_conversion_format)return!1;try{if(Tc(d)){d.google_remarketing_only&&d.google_enable_display_cookie_match&&!pc&&M&&Sa(["376635470","376635471"],Ha,2);d.google_remarketing_only&&!d.google_conversion_domain&&M&&Sa(["759238990","759238991"],Ka,13);!d.google_remarketing_only||d.google_conversion_domain||M&&("759248991"==Ta(14)||"759248990"==Ta(14))||M&&Sa(["759248990","759248991"],Ja,14);!1===d.google_conversion_linker|| 
d.google_gtm||bc(d.google_gcl_cookie_prefix);if(1==d.google_remarketing_only&&null!=d.google_gtag_event_data&&null!=d.google_gtag_event_data.items&&d.google_gtag_event_data.items.constructor===Array&&0<d.google_gtag_event_data.items.length)Zc(a,b,c,d);else{var f=!1;w("www.google.com","endsWith").call("www.google.com","google.com")&&(f=!0);var g=d.google_additional_params;g&&g.dg&&(f="e"===g.dg);g=function(){var h=d.google_gtm_experiments;if(h&&h.capi&&!d.google_transport_url){if(h=!Wc){h=c;var m= 
w("www.google.com","endsWith").call("www.google.com","google.com")?"":"A7iusd6XVbb7SOF83vXQdziVdvBy4R7Bh2tuVErLbKXxemIjQH20g7jWaz48nG08Cd6zfylzuF+H+1s9S3JodAEAAACOeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d";h=void 0===h?window.document:h;if(m&&h.head){var n=document.createElement("meta");n.httpEquiv="origin-trial";n.content=m;h.head.appendChild(n);h=n}else h=null;h=!h}h?h=!1:(Wc=!0,h=(h=c.featurePolicy)&&"function"===typeof h.features?0<=h.features().indexOf("conversion-measurement"):!1)}else h=!1;h&&Fc(a,c,d,zc(a,b,c,d,4),!1,!1)};var k=function(h){Fc(a,c,d,zc(a,b,c, 
d,h),!0,!0)};d.google_remarketing_only?k(2):f?(Xc(d,2),g(),k(1),k(3)):(g(),k(0))}d.google_remarketing_only&&d.google_enable_display_cookie_match&&Pc(a,c);e=!0}}catch(h){}return e}function Zc(a,b,c,d){var e=Vc(d.google_gtag_event_data.items);Xc(d,e.length);for(var f=0;f<e.length;f++)Fc(a,c,d,zc(a,b,c,d,2,e[f]),!0,!0),d.google_conversion_time=d.google_conversion_time+1};M=new function(){var a=[],b=0,c;for(c in Va)a[b++]=Va[c];this.i={};this.g={};a=a||[];b=0;for(c=a.length;b<c;++b)this.g[a[b]]=""};Sa(["592230570","592230571"],Ia,16);Wa()&&(fc(1),gc()); 
function $c(a,b,c){function d(m,n){var x=new Image;x.onload=m;x.src=n}function e(){--f;if(0>=f){var m=kc(a,!1),n=m[b];n&&(delete m[b],(m=n[0])&&m.call&&m())}}var f=c.length+1;if(2==c.length){var g=c[0],k=c[1];0<=J(g,0,"rmt_tld",g.search(za))&&0<=J(g,0,"ipr",g.search(za))&&!k.match(xa)[6]&&(k+=ya(g),c[1]=K(k,"rmt_tld","1"))}for(g=0;g<c.length;g++){k=c[g];var h=Aa(k,"fmt");switch(parseInt(h,10)){case 1:case 2:(h=a.document.getElementById("goog_conv_iframe"))&&!h.src?(h.onload=e,h.src=k):d(e,k);break; 
case 4:oc(a,a.document,k,e);break;case 5:if(a.navigator&&a.navigator.sendBeacon)if(a.navigator.sendBeacon(k,"")){e();break}else k=K(k,"sendb",2);k=K(k,"fmt",3);default:d(e,k)}}e()}var X=["GooglemKTybQhCsO"],Y=B;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===$c?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=$c; 
window.google_trackConversion=function(a){var b=window,c=navigator,d=document;a=Uc(b,a);a.google_conversion_format=3;bb.gtag_cs_api=!!a.google_gtm;return Yc(b,c,d,a)};}).call(this);
