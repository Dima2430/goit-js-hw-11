import{i as l,S as f}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".search-form"),m=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const g="https://pixabay.com/api/";let u;c.addEventListener("submit",n=>{n.preventDefault(),a.style.display="block";const s=n.target.elements.query.value.trim();if(s.length<3){l.warning({title:"Warning",message:"Please enter a search query with at least 3 characters.",position:"topRight"}),a.style.display="none";return}m.innerHTML="",p(s).then(({hits:i})=>{if(i.length>0){const r=i.map(d).join("");m.innerHTML=r,u=new f(".gallery-link"),u.refresh(),a.style.display="none"}else l.info({title:"Info",message:"Unfortunately, no images were found for your search. Please try again!",position:"topRight"})}),c.reset()});function p(n){const s={key:"42392659-652aaf55959599f1a779f61b5",q:n,image_type:"photo",orientation:"horizontal",safeSearch:!0},i=g+"?"+new URLSearchParams(s).toString();return fetch(i).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).catch(r=>{throw l.error({title:"Error",message:"There seems to be a problem with your internet connection. Please check and try again.",position:"topRight"}),r}).finally(()=>{a.style.display="none"})}function d({largeImageURL:n,tags:s,webformatURL:i,likes:r,views:e,comments:t,downloads:o}){return`
    <a href="${n}" class="gallery-link">
      <figure>
        <img src="${i}" alt="${s}" class="gallery-image">
        <figcaption class="gallery__figcaption">
          <div class="image-item">Likes <span class="image-elem">${r}</span></div>
          <div class="image-item">Views <span class="image-elem">${e}</span></div>
          <div class="image-item">Comments <span class="image-elem">${t}</span></div>
          <div class="image-item">Downloads <span class="image-elem">${o}</span></div>
        </figcaption>
      </figure>
    </a>
  `}
//# sourceMappingURL=commonHelpers.js.map
