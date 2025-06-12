import{a as p,S as d,i as l}from"./assets/vendor-vwbIfzmB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="50784068-4a91f229093f0aa96eaf57a94";function g(i){return p.get(m,{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function y(i){return i.map(({id:o,webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
    <li class="list-item" data-id="${o}">
      <a href="${s}">
        <img class="image" src="${r}" alt="${e}" width="360" />
      </a>
      <ul class="info">
        <li><h3>Likes</h3><p class="info-text">${t}</p></li>
        <li><h3>Views</h3><p class="info-text">${n}</p></li>
        <li><h3>Comments</h3><p class="info-text">${u}</p></li>
        <li><h3>Downloads</h3><p class="info-text">${f}</p></li>
      </ul>
    </li>
    `).join("")}function L(i){const o=document.querySelector(".list");o.innerHTML=y(i),new d(".list a",{captionsData:"alt",captionDelay:250}).refresh()}const a=document.querySelector(".form"),b=document.querySelector(".list"),c=document.querySelector(".loader");a.addEventListener("submit",$);function x(){c.style.display="block"}function S(){c.style.display="none"}function $(i){i.preventDefault();const o=a.elements["search-text"].value.trim();if(o===""){l.warning({message:"Введіть назву зображення!",position:"topRight"});return}x(),g(o).then(r=>{const s=r.data.hits;s.length===0?(b.innerHTML="",l.info({message:"Зображень не знайдено.",position:"topRight"})):(console.log(s),L(s)),a.reset()}).catch(r=>{l.error({message:"Сталася помилка при запиті!",position:"topRight"}),console.error("Помилка:",r)}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
