import{i as m,S as f}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g=document.querySelector(".search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader"),o=document.querySelector(".result-info"),p="https://pixabay.com/api/";let u;g.addEventListener("submit",n=>{n.preventDefault();const r=n.target.elements.query.value.trim();if(r.length<3){m.warning({title:"Warning",message:"Please enter a search query with at least 3 characters.",position:"topRight"});return}l.innerHTML="",o.innerHTML="",d(r).then(({hits:i})=>{if(i.length>0){const s=i.map(y).join("");l.innerHTML=s,o.innerHTML='<p class="result-messages">Loading images, please wait...</p>',u=new f(".gallery-link"),u.refresh(),setTimeout(()=>{o.innerHTML=""},2e3)}})});function d(n){const r={key:"42392659-652aaf55959599f1a779f61b5",q:n,image_type:"photo",orientation:"horizontal",safeSearch:!0},i=p+"?"+new URLSearchParams(r).toString();return c.style.display="block",fetch(i).then(s=>s.json()).catch(s=>{throw s}).finally(()=>{c.style.display="none"})}function y({largeImageURL:n,tags:r,webformatURL:i,likes:s,views:e,comments:t,downloads:a}){return`
    <a href="${n}" class="gallery-link">
      <figure>
        <img src="${i}" alt="${r}" class="gallery-image">
        <figcaption class="gallery__figcaption">
          <div class="image-item">Likes <span class="image-elem">${s}</span></div>
          <div class="image-item">Views <span class="image-elem">${e}</span></div>
          <div class="image-item">Comments <span class="image-elem">${t}</span></div>
          <div class="image-item">Downloads <span class="image-elem">${a}</span></div>
        </figcaption>
      </figure>
    </a>
  `}
//# sourceMappingURL=commonHelpers.js.map
