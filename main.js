(()=>{"use strict";document.querySelector(".btn").addEventListener("click",(function(){const e=document.querySelector(".popover");if(e)return e.classList.remove("popover-visible"),void setTimeout((()=>e.remove()),500);const t=document.createElement("div");t.className="popover";const o=document.createElement("div");o.className="arrow";const s=document.createElement("h3");s.className="popover-header",s.textContent=this.dataset.popoverTitle;const n=document.createElement("div");n.className="popover-body",n.textContent=this.dataset.popoverContent,t.append(o),t.append(s),t.append(n),this.after(t),t.style.top=this.offsetTop-t.offsetHeight-o.offsetHeight+"px",t.style.left=this.offsetLeft+this.offsetWidth/2-t.offsetWidth/2+"px",t.classList.add("popover-visible")}))})();