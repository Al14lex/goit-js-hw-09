import"./assets/modulepreload-polyfill-3cfb730f.js";const o=document.querySelector(".feedback-form"),c="feedbackFormState";function s(){const t=new FormData(o),a={};t.forEach((e,r)=>{a[r]=e}),localStorage.setItem(c,JSON.stringify(a))}function m(){const t=localStorage.getItem(c);if(t){const a=JSON.parse(t);Object.entries(a).forEach(([e,r])=>{o.elements[e].value=r})}}m();o.addEventListener("input",()=>{s()});o.addEventListener("submit",t=>{t.preventDefault();const a=new FormData(o),e={};a.forEach((r,n)=>{e[n]=r.trim()}),e.email&&e.message?(console.log(e),localStorage.removeItem(c),o.reset()):alert("Будь ласка, заповніть усі поля.")});
//# sourceMappingURL=commonHelpers2.js.map
