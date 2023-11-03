// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-full@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";var l=new t(NaN,NaN),n=new o(NaN,NaN),i=["float64","float32","complex128","complex64","generic"];function m(t){var o,m;if(null===(o=e(t)))throw new TypeError(s("1Zl2f,Mm",t));if(arguments.length>1){if(o=arguments[1],-1===i.indexOf(o))throw new TypeError(s("1ZlGN,Mn",i.join('", "'),o))}else if(-1===i.indexOf(o))throw new TypeError(s("1ZlMo",i.join('", "'),o));return m="complex128"===o?l:"complex64"===o?n:NaN,r(t.length,m,o)}export{m as default};
//# sourceMappingURL=index.mjs.map
