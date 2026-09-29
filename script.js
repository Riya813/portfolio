(function(){
  // open a project when something links to it
  function openFor(id){var el=document.getElementById(id);if(el&&el.tagName==='DETAILS'){el.open=true}}
  document.addEventListener('click',function(e){var a=e.target.closest('a[href^="#"]');if(a)openFor(a.getAttribute('href').slice(1))});
  var h=(location.hash||'').slice(1);if(/^[\w.~-]+$/.test(h))openFor(h);
  // copy email
  document.querySelectorAll('[data-copy]').forEach(function(b){b.addEventListener('click',function(){
    var el=document.getElementById(b.dataset.copy),t=el.textContent,l=b.textContent;
    function ok(){b.textContent='Copied';setTimeout(function(){b.textContent=l},1500)}
    function sel(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selected'}
    try{navigator.clipboard.writeText(t).then(ok,sel)}catch(e){sel()}
  })});
  // highlight the current section in the index
  if('IntersectionObserver' in window){
    var links={};document.querySelectorAll('.toc a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){Object.values(links).forEach(function(a){a.classList.remove('on')});var a=links[e.target.id];if(a)a.classList.add('on')}})},{rootMargin:'-30% 0px -60% 0px'});
    Object.keys(links).forEach(function(id){var s=document.getElementById(id);if(s)io.observe(s)});
  }
})();
