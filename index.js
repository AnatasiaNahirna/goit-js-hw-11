import{a as f,i as m}from"./assets/vendor-CRaSdWZI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(s){return f.get("https://pixabay.com/api/",{params:{key:"51402348-a0c5f352e8dacc54a34bc803e",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(r.data.hits.length===0){m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#EF4040"});return}return r.data.value})}function g(s){document.querySelector(".container").insertAdjacentHTML("beforeend","<ul class=”gallery”>");const o=document.querySelector(".gallery"),n=s.map(e=>{const{webformatURL:t,largeImageURL:a,tags:i,likes:c,views:l,comments:u,downloads:d}=e;return`<li class="img-li">
        <a href="${a}">
        <img src="${t}" alt="${i}">
        <div class="stats"><p>Likes</p><p>${c}</p></div>
        <div class="stats"><p>Views</p><p>${l}</p></div>
        <div class="stats"><p>Comments</p><p>${u}</p></div>
        <div class="stats"><p>Downloads</p><p>${d}</p></div>
        </a>
        </li>`}).join("");o.insertAdjacentHTML("beforeend",n)}const y=document.querySelector(".form");y.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();r&&p(r).then(o=>g(o))});
//# sourceMappingURL=index.js.map
