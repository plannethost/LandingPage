document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#primary-nav');
 if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'Buka navigasi':'Tutup navigasi');nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}
 document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{
  const code=btn.closest('.snippet')?.querySelector('pre code')?.textContent;
  if(!code)return;
  try{await navigator.clipboard.writeText(code);const old=btn.textContent;btn.textContent='Tersalin ✓';setTimeout(()=>btn.textContent=old,1700)}
  catch{const range=document.createRange(),sel=window.getSelection();const el=btn.closest('.snippet').querySelector('pre code');range.selectNodeContents(el);sel.removeAllRanges();sel.addRange(range);btn.textContent='Blok teks lalu salin';setTimeout(()=>{sel.removeAllRanges();btn.textContent='Salin ⧉'},2800)}
 }));
 const oidInput=document.querySelector('#oid-search'),oidRows=[...document.querySelectorAll('#oid-table tbody tr')],oidButtons=[...document.querySelectorAll('[data-oid-filter]')],oidCount=document.querySelector('#oid-count');
 let oidType='all';
 function filterOid(){const term=(oidInput?.value||'').toLocaleLowerCase('id');let visible=0;oidRows.forEach(row=>{const show=(oidType==='all'||row.dataset.type===oidType)&&row.textContent.toLocaleLowerCase('id').includes(term);row.hidden=!show;if(show)visible++});if(oidCount)oidCount.textContent=visible+' entri ditemukan';const empty=document.querySelector('#oid-empty');if(empty)empty.style.display=visible?'none':'block'}
 oidInput?.addEventListener('input',filterOid);oidButtons.forEach(btn=>btn.addEventListener('click',()=>{oidType=btn.dataset.oidFilter;oidButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));filterOid()}));filterOid();
 const errorInput=document.querySelector('#error-search'),faqs=[...document.querySelectorAll('.faq')],errorCount=document.querySelector('#error-count');
 function filterErrors(){const term=(errorInput?.value||'').toLocaleLowerCase('id');let n=0;faqs.forEach(el=>{const show=el.textContent.toLocaleLowerCase('id').includes(term);el.hidden=!show;if(show)n++});if(errorCount)errorCount.textContent=n+' kategori error ditemukan';const empty=document.querySelector('#error-empty');if(empty)empty.style.display=n?'none':'block'}
 errorInput?.addEventListener('input',filterErrors);filterErrors();
 const headingLinks=[...document.querySelectorAll('.aside-sticky > a[href^="#"]')];
 if(headingLinks.length&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){headingLinks.forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id))}})},{rootMargin:'-110px 0px -70% 0px'});document.querySelectorAll('.doc-section[id]').forEach(s=>observer.observe(s))}
});
