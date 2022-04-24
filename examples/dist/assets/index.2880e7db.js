var x=Object.defineProperty,C=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var w=(t,e,r)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))S.call(e,r)&&w(t,r,e[r]);if(O)for(var r of O(e))T.call(e,r)&&w(t,r,e[r]);return t},q=(t,e)=>C(t,I(e));import{b as E}from"./vendor.f6953c41.js";const A=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};A();var D=Object.defineProperty,u=(t,e)=>D(t,"name",{value:e,configurable:!0}),f=u((t,e)=>t.indexOf(e),"indexOf"),F=u(t=>{let e=f(t,"query");return e>-1?e+6:(e=f(t,"mutation"),e>-1?e+9:(e=f(t,"subscription"),e>-1?e+13:-1))},"getOperationIndex"),M=u(t=>{let e=f(t,"("),r=f(t," ");return e===r?-1:r>e?e:r},"getOperationDelimiter"),Q=u(t=>{let e=F(t);if(e===-1)return"_";let r=t.substring(e),n=M(r);return n===-1?"_":r.substring(0,n)||"_"},"getOperationName"),$=u((t,{config:e={},plugins:r=[],timeout:n=5e3}={})=>({_e:"",_c:{},_p:[],_t:5e3,config:function(o,{config:i={},plugins:a=[],timeout:d=5e3}={}){this._e=o,this._c=i,this._p=a,this._t=d}}),"createClient"),N=$(""),G=u(async(t,{client:e=N,variables:r={},config:n={},plugins:o=[],endpoint:i,method:a="POST"}={})=>{var d;let{_e:L,_c:h,_p:j}=e,m=Q(t),b=j.concat(o),p=null;for(let l of b)for(let g of l.middlewares||[]){let s=await g({operationName:m,variables:r,query:t});!p&&s&&(p=s)}if(p)return p;try{let l=new AbortController,g=setTimeout(()=>{throw l.abort(),new Error("Request timeout")},n.timeout||1/0);console.log(n.timeout||1/0);let{data:s,errors:v=null}=await E(i||L,q(c(c({method:a},h),n),{headers:c(c({"content-type":"application/json"},h.headers),(d=n.config)==null?void 0:d.headers),signal:l.signal,body:JSON.stringify({query:t,variables:r,operationName:m})})).then(y=>(clearTimeout(g),y.json()));if(v)throw v;for(let y of b)for(let P of y.afterwares||[]){let _=await P({data:s,operationName:m,variables:r,query:t});_&&(s=_)}return s}catch(l){return l}},"gql"),J=G;N.config("https://api.hifumin.app/graphql");const K=()=>J(`query GQLInMemoryCacheSample($id: Int!) {
    nhql {
      by(id: $id) {
        success
        error
        data {
          id
          title {
            display
          }
        }
      }
    }
  }`,{variables:{id:177013}});K();
