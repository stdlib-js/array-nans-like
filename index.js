// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).nansLike=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function B(r){var e,t,n;if(!S(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var I,N=Object.prototype,C=N.toString,F=N.__defineGetter__,M=N.__defineSetter__,O=N.__lookupGetter__,P=N.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(O.call(r,e)||P.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var U=I;function Y(r,e,t){U(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var G=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&G.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,J="function"==typeof z?z.toStringTag:"";var q=$()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[J],e=X(r,J);try{r[J]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[J]=t:delete r[J],n}:function(r){return Z.call(r)};var D=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function H(r){return null!==r&&"object"==typeof r}function K(r){return H(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Q(){return/^\s*function\s*([^(]*)/i}Y(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!D(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(H));var rr=/^\s*function\s*([^(]*)/i;function er(r){var e,t,n;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=rr.exec(n.toString()))return e[1]}return K(r)?"Buffer":t}Y(Q,"REGEXP",rr);var tr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},nr="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var or="function"==typeof Float64Array?Float64Array:void 0;var ar=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),t=e,r=(nr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")},ur="function"==typeof Float32Array;var fr=Number.POSITIVE_INFINITY,lr="function"==typeof Float32Array?Float32Array:null;var cr="function"==typeof Float32Array?Float32Array:void 0;var sr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,5e40]),t=e,r=(ur&&t instanceof Float32Array||"[object Float32Array]"===q(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===fr}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")},yr="function"==typeof Uint32Array;var pr="function"==typeof Uint32Array?Uint32Array:null;var hr="function"==typeof Uint32Array?Uint32Array:void 0;var gr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(yr&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")},mr="function"==typeof Int32Array;var wr="function"==typeof Int32Array?Int32Array:null;var br="function"==typeof Int32Array?Int32Array:void 0;var vr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,2147483648]),t=e,r=(mr&&t instanceof Int32Array||"[object Int32Array]"===q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")},dr="function"==typeof Uint16Array;var Er="function"==typeof Uint16Array?Uint16Array:null;var Ar="function"==typeof Uint16Array?Uint16Array:void 0;var Tr=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,65536,65537]),t=e,r=(dr&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")},_r="function"==typeof Int16Array;var xr="function"==typeof Int16Array?Int16Array:null;var jr="function"==typeof Int16Array?Int16Array:void 0;var Vr=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr([1,3.14,-3.14,32768]),t=e,r=(_r&&t instanceof Int16Array||"[object Int16Array]"===q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")},kr="function"==typeof Uint8Array;var Lr="function"==typeof Uint8Array?Uint8Array:null;var Rr="function"==typeof Uint8Array?Uint8Array:void 0;var Sr=function(){var r,e,t;if("function"!=typeof Lr)return!1;try{e=new Lr(e=[1,3.14,-3.14,256,257]),t=e,r=(kr&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")},Br="function"==typeof Uint8ClampedArray;var Ir="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Nr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Cr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir([-1,0,1,3.14,4.99,255,256]),t=e,r=(Br&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===q(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")},Fr="function"==typeof Int8Array;var Mr="function"==typeof Int8Array?Int8Array:null;var Or="function"==typeof Int8Array?Int8Array:void 0;var Pr=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr([1,3.14,-3.14,128]),t=e,r=(Fr&&t instanceof Int8Array||"[object Int8Array]"===q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};function Ur(r){return"number"==typeof r}var Yr=Number,Wr=Yr.prototype.toString;var $r=$();function Zr(r){return"object"==typeof r&&(r instanceof Yr||($r?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Gr(r){return Ur(r)||Zr(r)}Y(Gr,"isPrimitive",Ur),Y(Gr,"isObject",Zr);var Xr=Yr.NEGATIVE_INFINITY,zr=Math.floor;function Jr(r){return zr(r)===r}function qr(r){return r<fr&&r>Xr&&Jr(r)}function Dr(r){return Ur(r)&&qr(r)}function Hr(r){return Zr(r)&&qr(r.valueOf())}function Kr(r){return Dr(r)||Hr(r)}function Qr(r){return Dr(r)&&r>=0}function re(r){return Hr(r)&&r.valueOf()>=0}function ee(r){return Qr(r)||re(r)}Y(Kr,"isPrimitive",Dr),Y(Kr,"isObject",Hr),Y(ee,"isPrimitive",Qr),Y(ee,"isObject",re);function te(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Jr(r.length)&&r.length>=0&&r.length<=4294967295}function ne(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Jr(r.length)&&r.length>=0&&r.length<=9007199254740991}var ie="function"==typeof ArrayBuffer;function oe(r){return ie&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===q(r)}function ae(r){return"object"==typeof r&&null!==r&&!D(r)}var ue=/./;function fe(r){return"boolean"==typeof r}var le=Boolean,ce=Boolean.prototype.toString;var se=$();function ye(r){return"object"==typeof r&&(r instanceof le||(se?function(r){try{return ce.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function pe(r){return fe(r)||ye(r)}function he(){return new Function("return this;")()}Y(pe,"isPrimitive",fe),Y(pe,"isObject",ye);var ge="object"==typeof self?self:null,me="object"==typeof window?window:null,we="object"==typeof global?global:null,be="object"==typeof globalThis?globalThis:null;var ve=function(r){if(arguments.length){if(!fe(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return he()}if(be)return be;if(ge)return ge;if(me)return me;if(we)return we;throw new Error("unexpected error. Unable to resolve global object.")}(),de=ve.document&&ve.document.childNodes,Ee=Int8Array;var Ae="function"==typeof ue||"object"==typeof Ee||"function"==typeof de?function(r){return er(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?er(r).toLowerCase():e};function Te(r){return"function"===Ae(r)}function _e(r,e){if(!(this instanceof _e))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ur(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Ur(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return U(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),U(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(_e,"BYTES_PER_ELEMENT",8),Y(_e.prototype,"BYTES_PER_ELEMENT",8),Y(_e.prototype,"byteLength",16),Y(_e.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(_e.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var xe="function"==typeof Math.fround?Math.fround:null,je=new sr(1);var Ve="function"==typeof xe?xe:function(r){return je[0]=r,je[0]};function ke(r,e){if(!(this instanceof ke))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ur(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Ur(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return U(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ve(r)}),U(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ve(e)}),this}function Le(r){return r instanceof _e||r instanceof ke||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Re(r){return Jr(r/2)}function Se(){return"function"==typeof z&&"symbol"==typeof z("foo")&&X(z,"iterator")&&"symbol"==typeof z.iterator}Y(ke,"BYTES_PER_ELEMENT",4),Y(ke.prototype,"BYTES_PER_ELEMENT",4),Y(ke.prototype,"byteLength",8),Y(ke.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(ke.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Be=Se()?Symbol.iterator:null;function Ie(r,e,t){U(r,e,{configurable:!1,enumerable:!1,get:t})}function Ne(r){return r.re}function Ce(r){return r.im}function Fe(r,e){return new sr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Me(r,e){return new ar(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var Oe={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function Pe(r){var e=Oe[r];return"function"==typeof e?e:Oe.default}var Ue={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Ye(r){var e=Ue[r];return"function"==typeof e?e:Ue.default}function We(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(te(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Le(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ne(n),Ce(n))}return e}function $e(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,te(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Le(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ne(o),Ce(o))}return n}function Ze(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Le(n=e[i]))return null;r[o]=Ne(n),r[o+1]=Ce(n),o+=2}return r}var Ge=2*sr.BYTES_PER_ELEMENT,Xe=Se();function ze(r){return r instanceof He||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Je(r){return r===He||"Complex128Array"===r.name}function qe(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Ge}function De(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Ge}function He(){var r,e,t,n;if(e=arguments.length,!(this instanceof He))return 0===e?new He:1===e?new He(arguments[0]):2===e?new He(arguments[0],arguments[1]):new He(arguments[0],arguments[1],arguments[2]);if(0===e)t=new sr(0);else if(1===e)if(Qr(arguments[0]))t=new sr(2*arguments[0]);else if(ne(arguments[0]))if((n=(t=arguments[0]).length)&&D(t)&&Le(t[0])){if(null===(t=Ze(new sr(2*n),t))){if(!Re(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new sr(arguments[0])}}else{if(qe(t))t=Fe(t,0);else if(De(t))t=Me(t,0);else if(!Re(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new sr(t)}else if(oe(arguments[0])){if(!Jr((t=arguments[0]).byteLength/Ge))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ge,t.byteLength));t=new sr(t)}else{if(!ae(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Xe)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Te(t[Be]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Te((t=t[Be]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=We(t))instanceof Error)throw t;t=new sr(t)}else{if(!oe(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Qr(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Jr(r/Ge))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ge,r));if(2===e){if(!Jr((n=t.byteLength-r)/Ge))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ge,n));t=new sr(t,r)}else{if(!Qr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Ge>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Ge));t=new sr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function Ke(r){return r.re}function Qe(r){return r.im}function rt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(te(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Le(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ke(n),Qe(n))}return e}function et(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,te(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Le(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ke(o),Qe(o))}return n}function tt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Le(n=e[i]))return null;r[o]=Ke(n),r[o+1]=Qe(n),o+=2}return r}Y(He,"BYTES_PER_ELEMENT",Ge),Y(He,"name","Complex64Array"),Y(He,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Te(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Te(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ze(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Le(c=n.call(e,r.get(s),s)))o[y]=Ne(c),o[y+1]=Ce(c);else{if(!(te(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ne(r)){if(n){for(f=r.length,u=r.get&&r.set?Ye("default"):Pe("default"),s=0;s<f;s++)if(!Le(u(r,s))){l=!0;break}if(l){if(!Re(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Le(c=n.call(e,u(r,s),s)))o[y]=Ne(c),o[y+1]=Ce(c);else{if(!(te(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ae(r)&&Xe&&Te(r[Be])){if(!Te((o=r[Be]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?$e(o,n,e):We(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(He,"of",(function(){var r,e;if(!Te(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ie(He.prototype,"buffer",(function(){return this._buffer.buffer})),Ie(He.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ie(He.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(He.prototype,"BYTES_PER_ELEMENT",He.BYTES_PER_ELEMENT),Y(He.prototype,"copyWithin",(function(r,e){if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(He.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new ke(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Be&&Y(t,Be,(function(){return e.entries()})),t})),Y(He.prototype,"get",(function(r){var e;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qr(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new ke((e=this._buffer)[r*=2],e[r+1])})),Ie(He.prototype,"length",(function(){return this._length})),Y(He.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Qr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Le(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ne(r),void(n[t+1]=Ce(r))}if(ze(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Ge,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new sr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ne(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Le(r[f])){o=!0;break}if(o){if(!Re(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Ge,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new sr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ne(u),n[t+1]=Ce(u),t+=2}}));var nt=2*ar.BYTES_PER_ELEMENT,it=Se();function ot(r){return r instanceof lt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function at(r){return r===lt||"Complex64Array"===r.name}function ut(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===nt/2}function ft(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===nt}function lt(){var r,e,t,n;if(e=arguments.length,!(this instanceof lt))return 0===e?new lt:1===e?new lt(arguments[0]):2===e?new lt(arguments[0],arguments[1]):new lt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new ar(0);else if(1===e)if(Qr(arguments[0]))t=new ar(2*arguments[0]);else if(ne(arguments[0]))if((n=(t=arguments[0]).length)&&D(t)&&Le(t[0])){if(null===(t=tt(new ar(2*n),t))){if(!Re(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ar(arguments[0])}}else{if(ut(t))t=Fe(t,0);else if(ft(t))t=Me(t,0);else if(!Re(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ar(t)}else if(oe(arguments[0])){if(!Jr((t=arguments[0]).byteLength/nt))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",nt,t.byteLength));t=new ar(t)}else{if(!ae(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===it)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Te(t[Be]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Te((t=t[Be]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=rt(t))instanceof Error)throw t;t=new ar(t)}else{if(!oe(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Qr(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Jr(r/nt))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",nt,r));if(2===e){if(!Jr((n=t.byteLength-r)/nt))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",nt,n));t=new ar(t,r)}else{if(!Qr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*nt>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*nt));t=new ar(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(lt,"BYTES_PER_ELEMENT",nt),Y(lt,"name","Complex128Array"),Y(lt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Te(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Te(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ot(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Le(c=n.call(e,r.get(s),s)))o[y]=Ke(c),o[y+1]=Qe(c);else{if(!(te(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ne(r)){if(n){for(f=r.length,u=r.get&&r.set?Ye("default"):Pe("default"),s=0;s<f;s++)if(!Le(u(r,s))){l=!0;break}if(l){if(!Re(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Le(c=n.call(e,u(r,s),s)))o[y]=Ke(c),o[y+1]=Qe(c);else{if(!(te(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ae(r)&&it&&Te(r[Be])){if(!Te((o=r[Be]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?et(o,n,e):rt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(lt,"of",(function(){var r,e;if(!Te(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ie(lt.prototype,"buffer",(function(){return this._buffer.buffer})),Ie(lt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ie(lt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(lt.prototype,"BYTES_PER_ELEMENT",lt.BYTES_PER_ELEMENT),Y(lt.prototype,"copyWithin",(function(r,e){if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(lt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new _e(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Be&&Y(t,Be,(function(){return e.entries()})),t})),Y(lt.prototype,"get",(function(r){var e;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qr(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new _e((e=this._buffer)[r*=2],e[r+1])})),Ie(lt.prototype,"length",(function(){return this._length})),Y(lt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Qr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Le(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ke(r),void(n[t+1]=Qe(r))}if(ot(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*nt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new ar(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ne(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Le(r[f])){o=!0;break}if(o){if(!Re(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*nt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new ar(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ke(u),n[t+1]=Qe(u),t+=2}}));var ct=[ar,sr,vr,gr,Vr,Tr,Pr,Sr,Cr,He,lt],st=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],yt=st.length;function pt(r){var e;if(D(r))return"generic";if(K(r))return null;for(e=0;e<yt;e++)if(r instanceof ct[e])return st[e];return tr[er(r)]||null}var ht={float64:ar,float32:sr,generic:Array,int16:Vr,int32:vr,int8:Pr,uint16:Tr,uint32:gr,uint8:Sr,uint8c:Cr,complex64:He,complex128:lt};function gt(r){return ht[r]||null}function mt(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}var wt="function";var bt={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function vt(r){var e=bt[r];return"function"==typeof e?e:bt.default}var dt={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function Et(r){var e=dt[r];return"function"==typeof e?e:dt.default}function At(r){var e,t=pt(r);return typeof(e=r).get===wt&&typeof e.set===wt?{accessorProtocol:!0,accessors:[Ye(t),Et(t)]}:{accessorProtocol:!1,accessors:[Pe(t),vt(t)]}}function Tt(r){var e=At(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}function _t(r,e,t,n,i){var o,a,u,f;for(o=t.data,a=t.accessors[1],u=i,f=0;f<r;f++)a(o,u,e),u+=n;return t}function xt(r,e,t,n){var i,o,a,u;if(r<=0)return t;if((u=Tt(t)).accessorProtocol)return _t(r,e,u,n,i=n<0?(1-r)*n:0),u.data;if(1===n){if((a=r%8)>0)for(o=0;o<a;o++)t[o]=e;if(r<8)return t;for(o=a;o<r;o+=8)t[o]=e,t[o+1]=e,t[o+2]=e,t[o+3]=e,t[o+4]=e,t[o+5]=e,t[o+6]=e,t[o+7]=e;return t}for(i=n<0?(1-r)*n:0,o=0;o<r;o++)t[i]=e,i+=n;return t}function jt(r,e){var t,n,i;if(!Qr(r))throw new TypeError(B("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r));if("generic"===(t=arguments.length>2?arguments[2]:"float64"))return mt(e,r);if(null===(n=gt(t)))throw new TypeError(B("invalid argument. Third argument must be a recognized data type. Value: `%s`.",t));return xt(r,e,i=new n(r),1),i}function Vt(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}Y(xt,"ndarray",(function(r,e,t,n,i){var o,a,u,f;if(r<=0)return t;if((u=Tt(t)).accessorProtocol)return _t(r,e,u,n,i),u.data;if(o=i,1===n){if((a=r%8)>0)for(f=0;f<a;f++)t[o]=e,o+=n;if(r<8)return t;for(f=a;f<r;f+=8)t[o]=e,t[o+1]=e,t[o+2]=e,t[o+3]=e,t[o+4]=e,t[o+5]=e,t[o+6]=e,t[o+7]=e,o+=8;return t}for(f=0;f<r;f++)t[o]=e,o+=n;return t}));var kt=new _e(NaN,NaN),Lt=new ke(NaN,NaN),Rt=["float64","float32","complex128","complex64","generic"];return function(r){var e,t;if(null===(e=pt(r)))throw new TypeError(Vt("1Zl2f,Mm",r));if(arguments.length>1){if(e=arguments[1],-1===Rt.indexOf(e))throw new TypeError(Vt("1ZlGN,Mn",Rt.join('", "'),e))}else if(-1===Rt.indexOf(e))throw new TypeError(Vt("1ZlMo",Rt.join('", "'),e));return t="complex128"===e?kt:"complex64"===e?Lt:NaN,jt(r.length,t,e)}}));
//# sourceMappingURL=index.js.map
