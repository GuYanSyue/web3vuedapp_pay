if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const o=e=>i(e,l),t={module:{uri:l},exports:a,require:o};s[l]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"5ddfc603d4652843412d059d10c5c377"},{url:"assets/_...all_.580eef6a.js",revision:null},{url:"assets/_name_.626a53e7.js",revision:null},{url:"assets/404.20906454.js",revision:null},{url:"assets/about.e5af45ec.js",revision:null},{url:"assets/app.accc618b.js",revision:null},{url:"assets/home.ec84d82f.js",revision:null},{url:"assets/index.95164756.css",revision:null},{url:"assets/README.9e753fcc.js",revision:null},{url:"assets/virtual_pwa-register.ad4d7b78.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"66ac00a56fac82221c74354acc0f1109"},{url:"readme.html",revision:"247411368c79ea5a400857433f3252ec"},{url:"favicon.svg",revision:"50eaa5ff03f3d89bea3e4450aefa60af"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37f418b959dec6ffce5cf9e87ef79f5f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
