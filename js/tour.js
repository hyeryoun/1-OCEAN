/* 1-OCEAN Tool 공통 튜토리얼 · window.TOUR = [{el:'id 또는 null', title, body}] */
(function(){
  let i=0,hl=null;
  function $(id){return document.getElementById(id)}
  function ensure(){
    if($('tut-card'))return;
    document.body.insertAdjacentHTML('beforeend','<div id="tut-overlay"></div><div id="tut-card" role="dialog" aria-modal="true"><div class="step-eyebrow" id="tutEyebrow"></div><h3 id="tutTitle"></h3><p id="tutBody"></p><div class="dots" id="tutDots"></div><div class="row"><button type="button" class="tb" data-a="close">닫기</button><div style="display:flex;gap:8px"><button type="button" class="tb" id="tutPrev" data-a="prev">이전</button><button type="button" class="tb go" id="tutNext" data-a="next">다음</button></div></div></div>');
    $('tut-overlay').onclick=end;
    $('tut-card').addEventListener('click',e=>{const a=e.target.dataset.a;if(a==='close')end();if(a==='prev')step(-1);if(a==='next')step(1)});
  }
  function clear(){if(hl){hl.classList.remove('tut-highlight');hl=null}}
  function show(){
    const T=window.TOUR||[];clear();const t=T[i];
    $('tut-overlay').style.display=t.el?'none':'block';
    if(t.el){hl=$(t.el);if(hl){hl.classList.add('tut-highlight');hl.scrollIntoView({behavior:'smooth',block:'center'})}}
    $('tutEyebrow').textContent='튜토리얼 '+(i+1)+' / '+T.length;$('tutTitle').textContent=t.title;$('tutBody').textContent=t.body;
    $('tutDots').innerHTML=T.map((_,k)=>'<i class="'+(k===i?'on':'')+'"></i>').join('');
    $('tutPrev').style.visibility=i===0?'hidden':'visible';$('tutNext').textContent=i===T.length-1?'시작하기':'다음';
    const c=$('tut-card');c.style.display='block';
    setTimeout(()=>{if(!t.el){c.style.left='50%';c.style.top='50%';c.style.transform='translate(-50%,-50%)'}else{c.style.transform='none';c.style.left=Math.max(20,innerWidth/2-200)+'px';c.style.top=(innerHeight-c.offsetHeight-28)+'px'}},260);
  }
  function step(d){const T=window.TOUR||[];i+=d;if(i<0)i=0;if(i>=T.length){end();return}show()}
  function end(){clear();if($('tut-overlay'))$('tut-overlay').style.display='none';if($('tut-card'))$('tut-card').style.display='none'}
  window.startTutorial=function(){ensure();i=0;show()};
  window.endTutorial=end;window.tutStep=step;
  document.addEventListener('keydown',e=>{const c=$('tut-card');if(c&&c.style.display==='block'){if(e.key==='Escape')end();if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)}});
})();
