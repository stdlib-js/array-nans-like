"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=l(function(w,i){
var u=require('@stdlib/array-dtype/dist'),s=require('@stdlib/array-full/dist'),m=require('@stdlib/complex-float64-ctor/dist'),f=require('@stdlib/complex-float32-ctor/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist'),p=new m(NaN,NaN),v=new f(NaN,NaN),t=["float64","float32","complex128","complex64","generic"];function g(r){var e,a;if(e=u(r),e===null)throw new TypeError(n('1Zl2f',r));if(arguments.length>1){if(e=arguments[1],t.indexOf(e)===-1)throw new TypeError(n('1ZlDQ',t.join('", "'),e))}else if(t.indexOf(e)===-1)throw new TypeError(n('1ZlED',t.join('", "'),e));return e==="complex128"?a=p:e==="complex64"?a=v:a=NaN,s(r.length,a,e)}i.exports=g
});var d=o();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
