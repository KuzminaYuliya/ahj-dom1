(()=>{var t={3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:(t,r,e)=>{var n=e(111);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},9670:(t,r,e)=>{var n=e(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},8457:(t,r,e)=>{"use strict";var n=e(9974),o=e(7908),i=e(3411),u=e(7659),c=e(7466),a=e(6135),f=e(1246);t.exports=function(t){var r,e,s,l,p,v,y=o(t),h="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,x=void 0!==g,b=f(y),m=0;if(x&&(g=n(g,d>2?arguments[2]:void 0,2)),null==b||h==Array&&u(b))for(e=new h(r=c(y.length));r>m;m++)v=x?g(y[m],m):y[m],a(e,m,v);else for(p=(l=b.call(y)).next,e=new h;!(s=p.call(l)).done;m++)v=x?i(l,g,[s.value,m],!0):s.value,a(e,m,v);return e.length=m,e}},1318:(t,r,e)=>{var n=e(5656),o=e(7466),i=e(1400),u=function(t){return function(r,e,u){var c,a=n(r),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},3411:(t,r,e)=>{var n=e(9670),o=e(9212);t.exports=function(t,r,e,i){try{return i?r(n(e)[0],e[1]):r(e)}catch(r){throw o(t),r}}},7072:(t,r,e)=>{var n=e(5112)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[n]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},4326:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},648:(t,r,e)=>{var n=e(1694),o=e(4326),i=e(5112)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?e:u?o(r):"Object"==(n=o(r))&&"function"==typeof r.callee?"Arguments":n}},9920:(t,r,e)=>{var n=e(6656),o=e(3887),i=e(1236),u=e(3070);t.exports=function(t,r){for(var e=o(r),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];n(t,s)||c(t,s,a(r,s))}}},8544:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:(t,r,e)=>{"use strict";var n=e(3383).IteratorPrototype,o=e(30),i=e(9114),u=e(8003),c=e(7497),a=function(){return this};t.exports=function(t,r,e){var f=r+" Iterator";return t.prototype=o(n,{next:i(1,e)}),u(t,f,!1,!0),c[f]=a,t}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6135:(t,r,e)=>{"use strict";var n=e(4948),o=e(3070),i=e(9114);t.exports=function(t,r,e){var u=n(r);u in t?o.f(t,u,i(0,e)):t[u]=e}},654:(t,r,e)=>{"use strict";var n=e(2109),o=e(4994),i=e(9518),u=e(7674),c=e(8003),a=e(8880),f=e(1320),s=e(5112),l=e(1913),p=e(7497),v=e(3383),y=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),g="keys",x="values",b="entries",m=function(){return this};t.exports=function(t,r,e,s,v,O,w){o(e,r,s);var S,j,A,E=function(t){if(t===v&&C)return C;if(!h&&t in _)return _[t];switch(t){case g:case x:case b:return function(){return new e(this,t)}}return function(){return new e(this)}},T=r+" Iterator",P=!1,_=t.prototype,I=_[d]||_["@@iterator"]||v&&_[v],C=!h&&I||E(v),M="Array"==r&&_.entries||I;if(M&&(S=i(M.call(new t)),y!==Object.prototype&&S.next&&(l||i(S)===y||(u?u(S,y):"function"!=typeof S[d]&&a(S,d,m)),c(S,T,!0,!0),l&&(p[T]=m))),v==x&&I&&I.name!==x&&(P=!0,C=function(){return I.call(this)}),l&&!w||_[d]===C||a(_,d,C),p[r]=C,v)if(j={values:E(x),keys:O?C:E(g),entries:E(b)},w)for(A in j)(h||P||!(A in _))&&f(_,A,j[A]);else n({target:r,proto:!0,forced:h||P},j);return j}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),u=e(8113),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s?o=(n=s.split("."))[0]<4?1:n[0]+n[1]:u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),u=e(1320),c=e(3505),a=e(9920),f=e(4705);t.exports=function(t,r){var e,s,l,p,v,y=t.target,h=t.global,d=t.stat;if(e=h?n:d?n[y]||c(y,{}):(n[y]||{}).prototype)for(s in r){if(p=r[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:y+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,r,e)=>{var n=e(3099);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},5005:(t,r,e)=>{var n=e(7854),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?o(n[t]):n[t]&&n[t][r]}},1246:(t,r,e)=>{var n=e(648),o=e(7497),i=e(5112)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:(t,r,e)=>{var n=e(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,r){return o.call(n(t),r)}},3501:t=>{t.exports={}},490:(t,r,e)=>{var n=e(5005);t.exports=n("document","documentElement")},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,r,e)=>{var n=e(7293),o=e(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,r,e)=>{var n=e(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,r,e)=>{var n,o,i,u=e(8536),c=e(7854),a=e(111),f=e(8880),s=e(6656),l=e(5465),p=e(6200),v=e(3501),y="Object already initialized",h=c.WeakMap;if(u||l.state){var d=l.state||(l.state=new h),g=d.get,x=d.has,b=d.set;n=function(t,r){if(x.call(d,t))throw new TypeError(y);return r.facade=t,b.call(d,t,r),r},o=function(t){return g.call(d,t)||{}},i=function(t){return x.call(d,t)}}else{var m=p("state");v[m]=!0,n=function(t,r){if(s(t,m))throw new TypeError(y);return r.facade=t,f(t,m,r),r},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!a(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},7659:(t,r,e)=>{var n=e(5112),o=e(7497),i=n("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},4705:(t,r,e)=>{var n=e(7293),o=/#|\.prototype\./,i=function(t,r){var e=c[u(t)];return e==f||e!=a&&("function"==typeof r?n(r):!!r)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},2190:(t,r,e)=>{var n=e(5005),o=e(3307);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return"function"==typeof r&&Object(t)instanceof r}},9212:(t,r,e)=>{var n=e(9670);t.exports=function(t){var r=t.return;if(void 0!==r)return n(r.call(t)).value}},3383:(t,r,e)=>{"use strict";var n,o,i,u=e(7293),c=e(9518),a=e(8880),f=e(6656),s=e(5112),l=e(1913),p=s("iterator"),v=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(n=o):v=!0);var y=null==n||u((function(){var t={};return n[p].call(t)!==t}));y&&(n={}),l&&!y||f(n,p)||a(n,p,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:v}},7497:t=>{t.exports={}},133:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,r,e)=>{var n=e(7854),o=e(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},30:(t,r,e)=>{var n,o=e(9670),i=e(6048),u=e(748),c=e(3501),a=e(490),f=e(317),s=e(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(p("")),t.close();var r=t.parentWindow.Object;return t=null,r},y=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,r;y="undefined"!=typeof document?document.domain&&n?v(n):((r=f("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):v(n);for(var e=u.length;e--;)delete y.prototype[u[e]];return y()};c[s]=!0,t.exports=Object.create||function(t,r){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[s]=t):e=y(),void 0===r?e:i(e,r)}},6048:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9670),u=e(1956);t.exports=n?Object.defineProperties:function(t,r){i(t);for(var e,n=u(r),c=n.length,a=0;c>a;)o.f(t,e=n[a++],r[e]);return t}},3070:(t,r,e)=>{var n=e(9781),o=e(4664),i=e(9670),u=e(4948),c=Object.defineProperty;r.f=n?c:function(t,r,e){if(i(t),r=u(r),i(e),o)try{return c(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(5296),i=e(9114),u=e(5656),c=e(4948),a=e(6656),f=e(4664),s=Object.getOwnPropertyDescriptor;r.f=n?s:function(t,r){if(t=u(t),r=c(r),f)try{return s(t,r)}catch(t){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},9518:(t,r,e)=>{var n=e(6656),o=e(7908),i=e(6200),u=e(8544),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),n(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},6324:(t,r,e)=>{var n=e(6656),o=e(5656),i=e(1318).indexOf,u=e(3501);t.exports=function(t,r){var e,c=o(t),a=0,f=[];for(e in c)!n(u,e)&&n(c,e)&&f.push(e);for(;r.length>a;)n(c,e=r[a++])&&(~i(f,e)||f.push(e));return f}},1956:(t,r,e)=>{var n=e(6324),o=e(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},7674:(t,r,e)=>{var n=e(9670),o=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(t){}return function(e,i){return n(e),o(i),r?t.call(e,i):e.__proto__=i,e}}():void 0)},2140:(t,r,e)=>{var n=e(111);t.exports=function(t,r){var e,o;if("string"===r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if("string"!==r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},3887:(t,r,e)=>{var n=e(5005),o=e(8006),i=e(5181),u=e(9670);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(u(t)),e=i.f;return e?r.concat(e(t)):r}},1320:(t,r,e)=>{var n=e(7854),o=e(8880),i=e(6656),u=e(3505),c=e(2788),a=e(9909),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,r,e,c){var a,f=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),(a=s(e)).source||(a.source=l.join("string"==typeof r?r:""))),t!==n?(f?!v&&t[r]&&(p=!0):delete t[r],p?t[r]=e:o(t,r,e)):p?t[r]=e:u(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,r,e)=>{var n=e(7854);t.exports=function(t,r){try{Object.defineProperty(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},8003:(t,r,e)=>{var n=e(3070).f,o=e(6656),i=e(5112)("toStringTag");t.exports=function(t,r,e){t&&!o(t=e?t:t.prototype,i)&&n(t,i,{configurable:!0,value:r})}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3505),i="__core-js_shared__",u=n[i]||o(i,{});t.exports=u},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.16.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8710:(t,r,e)=>{var n=e(9958),o=e(1340),i=e(4488),u=function(t){return function(r,e){var u,c,a=o(i(r)),f=n(e),s=a.length;return f<0||f>=s?t?"":void 0:(u=a.charCodeAt(f))<55296||u>56319||f+1===s||(c=a.charCodeAt(f+1))<56320||c>57343?t?a.charAt(f):u:t?a.slice(f,f+2):c-56320+(u-55296<<10)+65536}};t.exports={codeAt:u(!1),charAt:u(!0)}},1400:(t,r,e)=>{var n=e(9958),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},7466:(t,r,e)=>{var n=e(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(4488);t.exports=function(t){return Object(n(t))}},7593:(t,r,e)=>{var n=e(111),o=e(2190),i=e(2140),u=e(5112)("toPrimitive");t.exports=function(t,r){if(!n(t)||o(t))return t;var e,c=t[u];if(void 0!==c){if(void 0===r&&(r="default"),e=c.call(t,r),!n(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===r&&(r="number"),i(t,r)}},4948:(t,r,e)=>{var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:String(r)}},1694:(t,r,e)=>{var n={};n[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,r,e)=>{var n=e(2190);t.exports=function(t){if(n(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},9711:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},3307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(6656),u=e(9711),c=e(133),a=e(3307),f=o("wks"),s=n.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)&&(c||"string"==typeof f[t])||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},1038:(t,r,e)=>{var n=e(2109),o=e(8457);n({target:"Array",stat:!0,forced:!e(7072)((function(t){Array.from(t)}))},{from:o})},8783:(t,r,e)=>{"use strict";var n=e(8710).charAt,o=e(1340),i=e(9909),u=e(654),c="String Iterator",a=i.set,f=i.getterFor(c);u(String,"String",(function(t){a(this,{type:c,string:o(t),index:0})}),(function(){var t,r=f(this),e=r.string,o=r.index;return o>=e.length?{value:void 0,done:!0}:(t=n(e,o),r.index+=t.length,{value:t,done:!1})}))}},r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e(1038),e(8783);var r=function(){function r(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),this.fieldSize=4,this.field=document.querySelector(".field"),this.cells=null,this.previousIndex=null}var e,n;return e=r,(n=[{key:"createField",value:function(){for(var t=0;t<this.fieldSize;t++){var r=document.createElement("div");r.classList.add("col"),this.field.appendChild(r);for(var e=0;e<this.fieldSize;e++){var n=document.createElement("div");n.classList.add("cell"),r.appendChild(n)}}this.cells=Array.from(document.querySelectorAll(".cell"))}},{key:"flip",value:function(){document.querySelector(".goblin")&&document.querySelector(".goblin").remove();for(var t=Math.floor(Math.random()*this.cells.length);t===this.previousIndex;)t=Math.floor(Math.random()*this.cells.length);var r=this.cells[t];this.previousIndex=t;var e=document.createElement("div");e.classList.add("goblin"),r.appendChild(e)}}])&&t(e.prototype,n),r}();document.addEventListener("DOMContentLoaded",(function(){var t=new r;t.createField();var e=t.flip.bind(t);setInterval(e,2e3)}))})()})();