import{a as c}from"./assets/vendor-Bf72jExa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();c.defaults.baseURL="https://pixabay.com/api/";function d(l){return c("",{params:{q:l,key:"50178649-88518a6762b6816f005eeb1ba",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>t)}function m(l){return l.map(({type:t,largeImageURL:r,webformatURL:a,likes:e,views:s,comments:i,downloads:u})=>`<li class="gallery-item ">
                <div>
                    <a href="${r}" class="link">
                        <img src="${a}" alt="${t}" class="gallery-image">
                    </a>
                </div>
                <div>
                    <ul class="wrapper-box">
                        <li class="list-item">
                            <p class="value-tittle">Likes</p>
                            <p class="label" data-likes>${e}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Views</p>
                            <p class="label" data-views>${s}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Comments</p>
                            <p class="label" data-comments>${i}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Downloads</p>
                            <p class="label" data-downloads>${u}</p>
                        </li>
                    </ul>
                </div>
            </li>`).join("")}function p(l){l.classList.remove("hidden")}function f(l){l.classList.add("hidden")}const n=document.querySelector(".js-form"),y=document.querySelector(".gallery"),o=document.querySelector(".loader");n.addEventListener("submit",h);function h(l){l.preventDefault();const t=l.target.elements["search-text"].value.trim();t&&(console.log(t),p(o),d(t).then(r=>{console.log(r),y.innerHTML=m(r.hits)}).catch(r=>console.log(r)).finally(()=>{f(o),n.reset()}))}
//# sourceMappingURL=index.js.map
