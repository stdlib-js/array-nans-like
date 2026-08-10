"use strict";var s=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var l=s(function(q,u){
var v=require('@stdlib/array-base-assert-contains/dist').factory,m=require('@stdlib/array-dtype/dist'),p=require('@stdlib/array-full/dist'),f=require('@stdlib/complex-float64-ctor/dist'),g=require('@stdlib/complex-float32-ctor/dist'),y=require('@stdlib/array-dtypes/dist'),n=require('@stdlib/array-base-join/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist'),d=new f(NaN,NaN),c=new g(NaN,NaN),i=y("floating_point_and_generic"),o=v(i);function w(a){var e,r;if(e=m(a),e===null)throw new TypeError(t('1Zl2f',a));if(arguments.length>1){if(e=arguments[1],!o(e))throw new TypeError(t('1ZlDQ',n(i,'", "'),e))}else if(!o(e))throw new TypeError(t('1ZlKD',n(i,'", "'),e));return e==="complex128"?r=d:e==="complex64"?r=c:r=NaN,p(a.length,r,e)}u.exports=w
});var N=l();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
