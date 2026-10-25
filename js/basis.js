/* 계산 근거 공통 서식 (CII·EEXI 계산기와 같은 형식) */
window.BX=(()=>{
const A=(u,t)=>`<a href="${u}" target="_blank" rel="noopener">${t}</a>`;
const IMO='https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MEPCDocuments/';
const L=r=>A(`${IMO}MEPC.${r}.pdf`,`MEPC.${r}`);
const S={
 feu:A('https://eur-lex.europa.eu/eli/reg/2023/1805/oj','EU 2023/1805'),
 ets:A('https://eur-lex.europa.eu/eli/dir/2023/959/oj','EU 2023/959'),
 uk:A('https://assets.publishing.service.gov.uk/media/6925919c33d088f6d5da2ccd/uk-ets-domestic-maritime-main-authority-response.pdf','UK ETS Authority Response'),
 nzf:A('https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-approves-netzero-regulations.aspx','MEPC 83 NZF 초안'),
 es2:A('https://www.imo.org/en/mediacentre/meetingsummaries/pages/mepc-es-2.aspx','MEPC/ES.2'),
};
const FR=(n,d)=>`<span class="fr"><span>${n}</span><span>${d}</span></span>`;
const EQ=(l,r,src,d)=>`<div class="eq"><div class="em"><span class="lh">${l}</span><span class="op">=</span><span class="rh">${r}</span></div><div class="es">${src||''}</div>${d?`<div class="ed">${d}</div>`:''}</div>`;
const REFS=(lab,...xs)=>`<div class="refs"><span class="rl">${lab}</span>${xs.join('')}</div>`;
const DEFS=rows=>`<div class="vals2"><dl class="defs">${rows.map(([t,b,d,s,sm])=>`<dt>${t}</dt><dd><b>${b}</b> · ${d}${s?` <span>${s}</span>`:''}${sm?`<small>${sm}</small>`:''}</dd>`).join('')}</dl></div>`;
const WARN=items=>items.length?`<ul class="warn">${items.map(([b,t])=>`<li><b>${b}:</b> ${t}</li>`).join('')}</ul>`:'';
const BOX=({refs='',eqs='',defs='',note='',warn=''})=>`<details class="why2"><summary>계산 근거 보기</summary>${refs}<div class="eqs">${eqs}${defs}${note}</div>${warn}</details>`;
return {A,L,S,FR,EQ,REFS,DEFS,WARN,BOX};
})();
