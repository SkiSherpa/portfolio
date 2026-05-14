import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signal Hill Interactive Map — Prototype',
  robots: { index: false, follow: false },
}

export default function SignalHillDemo() {
  return (
    <main className="min-h-screen bg-stone-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-3">
            Prototype · UI/UX concept
          </p>
          <h1 className="text-3xl font-medium text-stone-800 mb-3">
            Signal Hill Interactive Map
          </h1>
          <p className="text-stone-500 text-base leading-relaxed max-w-xl">
            An interactive historical map for the Signal Hill Public Library.
            Explore locations by category, tap or click a marker to read more,
            and filter by era or type.
          </p>
        </div>

        {/* Desktop section */}
        <section className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium tracking-widest text-stone-400 uppercase">
              Desktop
            </span>
            <div className="flex-1 h-px bg-stone-200" />
          </div>
          <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm">
            <DesktopMockup />
          </div>
        </section>

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-stone-200" />
          <span className="text-xs text-stone-300 tracking-widest uppercase">
            mobile
          </span>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        {/* Mobile section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium tracking-widest text-stone-400 uppercase">
              Mobile
            </span>
            <div className="flex-1 h-px bg-stone-200" />
          </div>
          <div className="flex justify-center">
            <MobileMockup />
          </div>
        </section>

        {/* Footer note */}
        <p className="text-center text-xs text-stone-300">
          Map tiles representative · prototype built with React + Leaflet concept
        </p>

      </div>
    </main>
  )
}

// ─── Desktop Mockup ────────────────────────────────────────────────────────────
// Inline as a client component since it uses interactivity.
// In your actual repo, split into a separate 'use client' file:
// components/signal-hill/DesktopMockup.tsx

function DesktopMockup() {
  // For the portfolio page this renders as a self-contained iframe-like embed.
  // Swap this out for the real Leaflet map component when ready.
  return (
    <iframe
      srcDoc={desktopHTML}
      className="w-full border-0"
      style={{ height: '520px' }}
      title="Signal Hill desktop map prototype"
    />
  )
}

// ─── Mobile Mockup ─────────────────────────────────────────────────────────────
function MobileMockup() {
  return (
    <iframe
      srcDoc={mobileHTML}
      className="border-0"
      style={{ width: '336px', height: '700px' }}
      title="Signal Hill mobile map prototype"
    />
  )
}

// ─── Desktop HTML ──────────────────────────────────────────────────────────────
const desktopHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f2eb}
.app{display:flex;flex-direction:column;border-radius:12px;overflow:hidden;background:#fff;height:520px}
.toolbar{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:0.5px solid #e5e1d8;background:#fff;flex-wrap:wrap}
.toolbar-title{font-size:14px;font-weight:500;color:#1c1917;margin-right:8px}
.filter-btn{font-size:12px;padding:4px 10px;border-radius:999px;border:0.5px solid #d6d3ca;background:transparent;color:#78716c;cursor:pointer;transition:all 0.15s}
.filter-btn:hover{background:#f5f2eb}
.filter-btn.active{border-color:transparent;color:#085041;background:#E1F5EE}
.filter-btn.active.oil{color:#633806;background:#FAEEDA}
.filter-btn.active.park{color:#27500A;background:#EAF3DE}
.filter-btn.active.culture{color:#3C3489;background:#EEEDFE}
.filter-btn.active.landmark{color:#712B13;background:#FAECE7}
.map-row{display:flex;flex:1;overflow:hidden}
.map-area{flex:1;position:relative;background:#e8e4da;overflow:hidden}
.street{position:absolute;background:#fff}
.street.h{height:6px;left:0;right:0}
.street.v{width:6px;top:0;bottom:0}
.street.major.h{height:9px;background:#f5c842}
.street.major.v{width:9px;background:#f5c842}
.block{position:absolute;background:#ddd8ce;border-radius:2px}
.marker{position:absolute;transform:translate(-50%,-100%);cursor:pointer;display:flex;flex-direction:column;align-items:center;z-index:2}
.marker-pin{width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid rgba(0,0,0,0.15);display:flex;align-items:center;justify-content:center;transition:transform 0.15s}
.marker:hover .marker-pin{transform:rotate(-45deg) scale(1.15)}
.marker.active .marker-pin{transform:rotate(-45deg) scale(1.2);box-shadow:0 0 0 3px rgba(0,0,0,0.12)}
.marker-icon{transform:rotate(45deg);font-size:13px;color:#fff}
.marker.historical .marker-pin{background:#1D9E75}
.marker.oil .marker-pin{background:#BA7517}
.marker.park .marker-pin{background:#639922}
.marker.culture .marker-pin{background:#7F77DD}
.marker.landmark .marker-pin{background:#D85A30}
.marker.hidden{opacity:0;pointer-events:none}
.detail-panel{width:240px;border-left:0.5px solid #e5e1d8;display:flex;flex-direction:column;overflow:hidden;background:#fff}
.panel-empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;padding:24px;text-align:center}
.panel-empty-icon{font-size:28px;color:#a8a29e}
.panel-empty-text{font-size:13px;color:#a8a29e;line-height:1.5}
.panel-header{padding:14px 14px 10px;border-bottom:0.5px solid #e5e1d8}
.panel-close{float:right;background:none;border:none;cursor:pointer;color:#a8a29e;font-size:16px;padding:0;margin:-2px -2px 0 0}
.panel-close:hover{color:#1c1917}
.panel-category{font-size:11px;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px}
.panel-name{font-size:15px;font-weight:500;color:#1c1917;line-height:1.3}
.panel-period{font-size:11px;color:#a8a29e;margin-top:3px}
.panel-img{width:100%;height:110px;background:#f5f2eb;display:flex;align-items:center;justify-content:center}
.panel-img-placeholder{font-size:28px;color:#a8a29e}
.panel-body{padding:12px 14px;flex:1;overflow-y:auto}
.panel-desc{font-size:13px;color:#78716c;line-height:1.6;margin-bottom:12px}
.panel-links{display:flex;flex-direction:column;gap:6px}
.panel-link{font-size:12px;color:#185FA5;display:flex;align-items:center;gap:4px;text-decoration:none}
.panel-link:hover{text-decoration:underline}
.cat-historical{color:#085041}.cat-oil{color:#633806}.cat-park{color:#27500A}.cat-culture{color:#3C3489}.cat-landmark{color:#712B13}
.legend{display:flex;gap:12px;padding:8px 14px;border-top:0.5px solid #e5e1d8;flex-wrap:wrap;background:#fff}
.legend-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#78716c}
.legend-dot{width:10px;height:10px;border-radius:50%}
</style>
</head>
<body>
<div class="app">
  <div class="toolbar">
    <span class="toolbar-title">Signal Hill</span>
    <button class="filter-btn active" onclick="setFilter('all',this)">All</button>
    <button class="filter-btn" data-cat="historical" onclick="setFilter('historical',this)">Historical</button>
    <button class="filter-btn" data-cat="oil" onclick="setFilter('oil',this)">Oil industry</button>
    <button class="filter-btn" data-cat="park" onclick="setFilter('park',this)">Parks</button>
    <button class="filter-btn" data-cat="culture" onclick="setFilter('culture',this)">Arts &amp; culture</button>
    <button class="filter-btn" data-cat="landmark" onclick="setFilter('landmark',this)">Landmarks</button>
  </div>
  <div class="map-row">
    <div class="map-area" id="map">
      <div class="street h major" style="top:38%"></div>
      <div class="street h major" style="top:62%"></div>
      <div class="street h" style="top:25%"></div>
      <div class="street h" style="top:50%"></div>
      <div class="street h" style="top:75%"></div>
      <div class="street v major" style="left:30%"></div>
      <div class="street v major" style="left:65%"></div>
      <div class="street v" style="left:15%"></div>
      <div class="street v" style="left:48%"></div>
      <div class="street v" style="left:82%"></div>
      <div class="block" style="left:16%;top:26%;width:12%;height:11%"></div>
      <div class="block" style="left:31%;top:26%;width:15%;height:11%"></div>
      <div class="block" style="left:49%;top:26%;width:14%;height:11%"></div>
      <div class="block" style="left:66%;top:26%;width:14%;height:11%"></div>
      <div class="block" style="left:16%;top:39%;width:12%;height:22%"></div>
      <div class="block" style="left:31%;top:39%;width:15%;height:22%"></div>
      <div class="block" style="left:49%;top:39%;width:14%;height:22%"></div>
      <div class="block" style="left:66%;top:39%;width:14%;height:22%"></div>
      <div class="block" style="left:16%;top:63%;width:12%;height:11%"></div>
      <div class="block" style="left:31%;top:63%;width:15%;height:11%"></div>
      <div class="block" style="left:49%;top:63%;width:14%;height:11%"></div>
      <div class="block" style="left:66%;top:63%;width:14%;height:11%"></div>
      <div class="marker historical" style="left:22%;top:35%" id="m0" onclick="selectMarker(0)"><div class="marker-pin"><i class="ti ti-building-monument marker-icon"></i></div></div>
      <div class="marker oil" style="left:40%;top:55%" id="m1" onclick="selectMarker(1)"><div class="marker-pin"><i class="ti ti-building-factory marker-icon"></i></div></div>
      <div class="marker park" style="left:60%;top:30%" id="m2" onclick="selectMarker(2)"><div class="marker-pin"><i class="ti ti-trees marker-icon"></i></div></div>
      <div class="marker culture" style="left:75%;top:58%" id="m3" onclick="selectMarker(3)"><div class="marker-pin"><i class="ti ti-palette marker-icon"></i></div></div>
      <div class="marker landmark" style="left:50%;top:72%" id="m4" onclick="selectMarker(4)"><div class="marker-pin"><i class="ti ti-map-pin marker-icon"></i></div></div>
      <div class="marker historical" style="left:85%;top:42%" id="m5" onclick="selectMarker(5)"><div class="marker-pin"><i class="ti ti-building-monument marker-icon"></i></div></div>
    </div>
    <div class="detail-panel" id="panel">
      <div class="panel-empty-state" id="empty-state">
        <i class="ti ti-map-pin panel-empty-icon"></i>
        <p class="panel-empty-text">Select a marker on the map to learn more</p>
      </div>
      <div id="panel-content" style="display:none;flex-direction:column;height:100%">
        <div class="panel-header">
          <button class="panel-close" onclick="closePanel()"><i class="ti ti-x"></i></button>
          <div class="panel-category" id="panel-cat"></div>
          <div class="panel-name" id="panel-name"></div>
          <div class="panel-period" id="panel-period"></div>
        </div>
        <div class="panel-img"><i class="ti ti-photo panel-img-placeholder"></i></div>
        <div class="panel-body">
          <p class="panel-desc" id="panel-desc"></p>
          <div class="panel-links" id="panel-links"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="legend">
    <div class="legend-item"><div class="legend-dot" style="background:#1D9E75"></div>Historical</div>
    <div class="legend-item"><div class="legend-dot" style="background:#BA7517"></div>Oil industry</div>
    <div class="legend-item"><div class="legend-dot" style="background:#639922"></div>Parks</div>
    <div class="legend-item"><div class="legend-dot" style="background:#7F77DD"></div>Arts &amp; culture</div>
    <div class="legend-item"><div class="legend-dot" style="background:#D85A30"></div>Landmarks</div>
  </div>
</div>
<script>
const locations=[
  {id:0,name:'Signal Hill founding site',cat:'historical',catLabel:'Historical',period:'1900s',desc:'The original settlement point of Signal Hill, used by the Tongva people as a signaling location and later by early settlers for its panoramic views of the basin.',links:['City historical records','Library archive']},
  {id:1,name:'Discovery Well No. 1',cat:'oil',catLabel:'Oil industry',period:'1920s',desc:'The site of the 1921 oil discovery that triggered one of the largest oil booms in California history, transforming Signal Hill overnight.',links:['LA Times archive','Oil museum records']},
  {id:2,name:'Hilltop Park',cat:'park',catLabel:'Parks & nature',period:'1970s',desc:'A beloved community park at the summit offering 360-degree views of the LA basin, Long Beach, and on clear days, Catalina Island.',links:['City parks dept.']},
  {id:3,name:'Signal Hill Arts Center',cat:'culture',catLabel:'Arts & culture',period:'1990s',desc:'A community arts hub hosting rotating exhibitions by local artists, with a permanent collection celebrating Signal Hill\'s multicultural heritage.',links:['Center website','Current exhibitions']},
  {id:4,name:'Atlantic Ave. corridor',cat:'landmark',catLabel:'Landmark',period:'1940s',desc:'The historic commercial spine of Signal Hill, lined with mid-century storefronts that document the city\'s post-war growth and economic character.',links:['Historic survey report']},
  {id:5,name:'Burnett Acreage site',cat:'historical',catLabel:'Historical',period:'1910s',desc:'Former homestead of the Burnett family, one of Signal Hill\'s earliest landowners, whose agricultural use of the land predated the oil era.',links:['Deed records','Family history archive']},
];
const catColors={historical:'cat-historical',oil:'cat-oil',park:'cat-park',culture:'cat-culture',landmark:'cat-landmark'};
let activeMarker=null;
function setFilter(cat,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active','oil','park','culture','landmark','historical'));
  btn.classList.add('active');
  if(cat!=='all')btn.classList.add(cat);
  document.querySelectorAll('.marker').forEach((m,i)=>m.classList.toggle('hidden',cat!=='all'&&locations[i].cat!==cat));
  if(activeMarker!==null&&cat!=='all'&&locations[activeMarker].cat!==cat)closePanel();
}
function selectMarker(id){
  if(activeMarker===id){closePanel();return;}
  activeMarker=id;
  document.querySelectorAll('.marker').forEach((m,i)=>m.classList.toggle('active',i===id));
  const loc=locations[id];
  document.getElementById('empty-state').style.display='none';
  const pc=document.getElementById('panel-content');
  pc.style.display='flex';pc.style.flexDirection='column';pc.style.height='100%';
  const catEl=document.getElementById('panel-cat');
  catEl.textContent=loc.catLabel;
  catEl.className='panel-category '+(catColors[loc.cat]||'');
  document.getElementById('panel-name').textContent=loc.name;
  document.getElementById('panel-period').textContent=loc.period;
  document.getElementById('panel-desc').textContent=loc.desc;
  document.getElementById('panel-links').innerHTML=loc.links.map(l=>'<a class="panel-link" href="#"><i class="ti ti-external-link" style="font-size:12px"></i>'+l+'</a>').join('');
}
function closePanel(){
  activeMarker=null;
  document.querySelectorAll('.marker').forEach(m=>m.classList.remove('active'));
  document.getElementById('empty-state').style.display='flex';
  document.getElementById('panel-content').style.display='none';
}
</script>
</body>
</html>`

// ─── Mobile HTML ───────────────────────────────────────────────────────────────
const mobileHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#1c1917;display:flex;justify-content:center;align-items:flex-start;padding:16px}
.phone{width:300px;background:#fff;border-radius:36px;border:8px solid #1c1917;overflow:hidden;display:flex;flex-direction:column}
.phone-notch{height:26px;background:#1c1917;border-radius:0 0 14px 14px;width:90px;margin:0 auto;position:relative;z-index:10}
.status-bar{display:flex;justify-content:space-between;align-items:center;padding:5px 14px 3px;font-size:11px;font-weight:500;color:#1c1917}
.status-icons{display:flex;gap:4px;align-items:center}
.app{display:flex;flex-direction:column;height:580px;position:relative;overflow:hidden}
.toolbar{padding:7px 11px 5px;border-bottom:0.5px solid #e5e1d8;background:#fff;z-index:5}
.toolbar-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:7px}
.toolbar-title{font-size:14px;font-weight:500;color:#1c1917}
.toolbar-icon{font-size:17px;color:#78716c}
.filter-row{display:flex;gap:5px;overflow-x:auto;padding-bottom:2px;scrollbar-width:none}
.filter-row::-webkit-scrollbar{display:none}
.filter-btn{font-size:11px;padding:3px 9px;border-radius:999px;border:0.5px solid #d6d3ca;background:transparent;color:#78716c;cursor:pointer;white-space:nowrap;flex-shrink:0}
.filter-btn.active{border-color:transparent;color:#085041;background:#E1F5EE}
.filter-btn.active.oil{color:#633806;background:#FAEEDA}
.filter-btn.active.park{color:#27500A;background:#EAF3DE}
.filter-btn.active.culture{color:#3C3489;background:#EEEDFE}
.filter-btn.active.landmark{color:#712B13;background:#FAECE7}
.map-area{flex:1;position:relative;background:#e8e4da;overflow:hidden}
.street{position:absolute;background:#fff}
.street.h{height:5px;left:0;right:0}
.street.v{width:5px;top:0;bottom:0}
.street.major.h{height:8px;background:#f5c842}
.street.major.v{width:8px;background:#f5c842}
.block{position:absolute;background:#ddd8ce;border-radius:2px}
.marker{position:absolute;transform:translate(-50%,-100%);cursor:pointer;display:flex;flex-direction:column;align-items:center;z-index:2}
.marker-pin{width:26px;height:26px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid rgba(0,0,0,0.15);display:flex;align-items:center;justify-content:center;transition:transform 0.15s}
.marker.active .marker-pin{transform:rotate(-45deg) scale(1.2);box-shadow:0 0 0 3px rgba(0,0,0,0.12)}
.marker-icon{transform:rotate(45deg);font-size:12px;color:#fff}
.marker.historical .marker-pin{background:#1D9E75}
.marker.oil .marker-pin{background:#BA7517}
.marker.park .marker-pin{background:#639922}
.marker.culture .marker-pin{background:#7F77DD}
.marker.landmark .marker-pin{background:#D85A30}
.marker.hidden{opacity:0;pointer-events:none}
.legend-float{position:absolute;bottom:10px;left:10px;background:#fff;border:0.5px solid #e5e1d8;border-radius:8px;padding:6px 8px;display:flex;flex-direction:column;gap:4px;z-index:3}
.legend-item{display:flex;align-items:center;gap:5px;font-size:10px;color:#78716c}
.legend-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.sheet-backdrop{position:absolute;inset:0;background:rgba(0,0,0,0.3);z-index:9;display:none}
.sheet-backdrop.visible{display:block}
.bottom-sheet{position:absolute;bottom:0;left:0;right:0;background:#fff;border-radius:16px 16px 0 0;border-top:0.5px solid #e5e1d8;z-index:10;transform:translateY(100%);transition:transform 0.25s cubic-bezier(0.32,0.72,0,1)}
.bottom-sheet.peek{transform:translateY(calc(100% - 76px))}
.bottom-sheet.open{transform:translateY(0)}
.sheet-handle{display:flex;justify-content:center;padding:9px 0 3px;cursor:pointer}
.sheet-handle-bar{width:36px;height:4px;border-radius:2px;background:#d6d3ca}
.sheet-peek{padding:0 13px 11px;cursor:pointer}
.sheet-peek-name{font-size:14px;font-weight:500;color:#1c1917}
.sheet-peek-sub{font-size:12px;color:#a8a29e;margin-top:2px}
.sheet-full{padding:0 13px 24px;display:none}
.sheet-full.visible{display:block}
.sheet-img{width:100%;height:120px;background:#f5f2eb;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-bottom:11px}
.sheet-img-icon{font-size:30px;color:#a8a29e}
.sheet-category{font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:3px}
.sheet-name{font-size:15px;font-weight:500;color:#1c1917;margin-bottom:2px}
.sheet-period{font-size:11px;color:#a8a29e;margin-bottom:9px}
.sheet-desc{font-size:13px;color:#78716c;line-height:1.6;margin-bottom:11px}
.sheet-links{display:flex;flex-direction:column;gap:6px}
.sheet-link{font-size:12px;color:#185FA5;display:flex;align-items:center;gap:4px}
.close-btn{float:right;background:#f5f2eb;border:none;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#78716c;font-size:14px;margin:-2px -2px 8px 8px}
.cat-historical{color:#085041}.cat-oil{color:#633806}.cat-park{color:#27500A}.cat-culture{color:#3C3489}.cat-landmark{color:#712B13}
</style>
</head>
<body>
<div class="phone">
  <div class="phone-notch"></div>
  <div class="status-bar"><span>9:41</span><div class="status-icons"><i class="ti ti-wifi" style="font-size:12px"></i><i class="ti ti-battery-2" style="font-size:12px"></i></div></div>
  <div class="app">
    <div class="toolbar">
      <div class="toolbar-top"><span class="toolbar-title">Signal Hill</span><i class="ti ti-search toolbar-icon"></i></div>
      <div class="filter-row">
        <button class="filter-btn active" onclick="setFilter('all',this)">All</button>
        <button class="filter-btn" data-cat="historical" onclick="setFilter('historical',this)">Historical</button>
        <button class="filter-btn" data-cat="oil" onclick="setFilter('oil',this)">Oil industry</button>
        <button class="filter-btn" data-cat="park" onclick="setFilter('park',this)">Parks</button>
        <button class="filter-btn" data-cat="culture" onclick="setFilter('culture',this)">Arts &amp; culture</button>
        <button class="filter-btn" data-cat="landmark" onclick="setFilter('landmark',this)">Landmarks</button>
      </div>
    </div>
    <div class="map-area">
      <div class="street h major" style="top:40%"></div>
      <div class="street h major" style="top:65%"></div>
      <div class="street h" style="top:22%"></div>
      <div class="street h" style="top:52%"></div>
      <div class="street h" style="top:78%"></div>
      <div class="street v major" style="left:28%"></div>
      <div class="street v major" style="left:62%"></div>
      <div class="street v" style="left:12%"></div>
      <div class="street v" style="left:45%"></div>
      <div class="street v" style="left:80%"></div>
      <div class="block" style="left:13%;top:23%;width:13%;height:16%"></div>
      <div class="block" style="left:29%;top:23%;width:14%;height:16%"></div>
      <div class="block" style="left:46%;top:23%;width:14%;height:16%"></div>
      <div class="block" style="left:63%;top:23%;width:15%;height:16%"></div>
      <div class="block" style="left:13%;top:41%;width:13%;height:23%"></div>
      <div class="block" style="left:29%;top:41%;width:14%;height:23%"></div>
      <div class="block" style="left:46%;top:41%;width:14%;height:23%"></div>
      <div class="block" style="left:63%;top:41%;width:15%;height:23%"></div>
      <div class="block" style="left:13%;top:66%;width:13%;height:11%"></div>
      <div class="block" style="left:29%;top:66%;width:14%;height:11%"></div>
      <div class="block" style="left:46%;top:66%;width:14%;height:11%"></div>
      <div class="block" style="left:63%;top:66%;width:15%;height:11%"></div>
      <div class="marker historical" style="left:20%;top:32%" id="m0" onclick="selectMarker(0)"><div class="marker-pin"><i class="ti ti-building-monument marker-icon"></i></div></div>
      <div class="marker oil" style="left:38%;top:56%" id="m1" onclick="selectMarker(1)"><div class="marker-pin"><i class="ti ti-building-factory marker-icon"></i></div></div>
      <div class="marker park" style="left:58%;top:28%" id="m2" onclick="selectMarker(2)"><div class="marker-pin"><i class="ti ti-trees marker-icon"></i></div></div>
      <div class="marker culture" style="left:74%;top:60%" id="m3" onclick="selectMarker(3)"><div class="marker-pin"><i class="ti ti-palette marker-icon"></i></div></div>
      <div class="marker landmark" style="left:48%;top:74%" id="m4" onclick="selectMarker(4)"><div class="marker-pin"><i class="ti ti-map-pin marker-icon"></i></div></div>
      <div class="marker historical" style="left:84%;top:44%" id="m5" onclick="selectMarker(5)"><div class="marker-pin"><i class="ti ti-building-monument marker-icon"></i></div></div>
      <div class="legend-float">
        <div class="legend-item"><div class="legend-dot" style="background:#1D9E75"></div>Historical</div>
        <div class="legend-item"><div class="legend-dot" style="background:#BA7517"></div>Oil industry</div>
        <div class="legend-item"><div class="legend-dot" style="background:#639922"></div>Parks</div>
        <div class="legend-item"><div class="legend-dot" style="background:#7F77DD"></div>Arts &amp; culture</div>
        <div class="legend-item"><div class="legend-dot" style="background:#D85A30"></div>Landmarks</div>
      </div>
    </div>
    <div class="sheet-backdrop" id="backdrop" onclick="closeSheet()"></div>
    <div class="bottom-sheet" id="sheet">
      <div class="sheet-handle" onclick="toggleSheet()"><div class="sheet-handle-bar"></div></div>
      <div class="sheet-peek" id="sheet-peek" onclick="openSheet()">
        <div class="sheet-peek-name" id="peek-name">Tap a marker to explore</div>
        <div class="sheet-peek-sub" id="peek-sub">Signal Hill historical map</div>
      </div>
      <div class="sheet-full" id="sheet-full">
        <button class="close-btn" onclick="closeSheet()"><i class="ti ti-x"></i></button>
        <div class="sheet-img"><i class="ti ti-photo sheet-img-icon"></i></div>
        <div class="sheet-category" id="full-cat"></div>
        <div class="sheet-name" id="full-name"></div>
        <div class="sheet-period" id="full-period"></div>
        <div class="sheet-desc" id="full-desc"></div>
        <div class="sheet-links" id="full-links"></div>
      </div>
    </div>
  </div>
</div>
<script>
const locations=[
  {id:0,name:'Signal Hill founding site',cat:'historical',catLabel:'Historical',period:'1900s',desc:'The original settlement point of Signal Hill, used by the Tongva people as a signaling location and later by early settlers for panoramic views of the basin.',links:['City historical records','Library archive']},
  {id:1,name:'Discovery Well No. 1',cat:'oil',catLabel:'Oil industry',period:'1920s',desc:'The site of the 1921 oil discovery that triggered one of the largest oil booms in California history, transforming Signal Hill overnight.',links:['LA Times archive','Oil museum records']},
  {id:2,name:'Hilltop Park',cat:'park',catLabel:'Parks & nature',period:'1970s',desc:'A beloved community park at the summit offering 360-degree views of the LA basin, Long Beach, and on clear days, Catalina Island.',links:['City parks dept.']},
  {id:3,name:'Signal Hill Arts Center',cat:'culture',catLabel:'Arts & culture',period:'1990s',desc:'A community arts hub hosting rotating exhibitions by local artists, with a permanent collection celebrating Signal Hill\'s multicultural heritage.',links:['Center website','Current exhibitions']},
  {id:4,name:'Atlantic Ave. corridor',cat:'landmark',catLabel:'Landmark',period:'1940s',desc:'The historic commercial spine of Signal Hill, lined with mid-century storefronts that document the city\'s post-war growth and economic character.',links:['Historic survey report']},
  {id:5,name:'Burnett Acreage site',cat:'historical',catLabel:'Historical',period:'1910s',desc:'Former homestead of the Burnett family, one of Signal Hill\'s earliest landowners, whose agricultural use of the land predated the oil era.',links:['Deed records','Family history archive']},
];
const catColors={historical:'cat-historical',oil:'cat-oil',park:'cat-park',culture:'cat-culture',landmark:'cat-landmark'};
let activeMarker=null,sheetState='hidden';
function setFilter(cat,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active','oil','park','culture','landmark','historical'));
  btn.classList.add('active');
  if(cat!=='all')btn.classList.add(cat);
  document.querySelectorAll('.marker').forEach((m,i)=>m.classList.toggle('hidden',cat!=='all'&&locations[i].cat!==cat));
  if(activeMarker!==null&&cat!=='all'&&locations[activeMarker].cat!==cat)closeSheet();
}
function selectMarker(id){
  if(activeMarker===id&&sheetState!=='hidden'){closeSheet();return;}
  activeMarker=id;
  document.querySelectorAll('.marker').forEach((m,i)=>m.classList.toggle('active',i===id));
  const loc=locations[id];
  document.getElementById('peek-name').textContent=loc.name;
  document.getElementById('peek-sub').textContent=loc.catLabel+' · '+loc.period;
  document.getElementById('full-cat').textContent=loc.catLabel;
  document.getElementById('full-cat').className='sheet-category '+(catColors[loc.cat]||'');
  document.getElementById('full-name').textContent=loc.name;
  document.getElementById('full-period').textContent=loc.period;
  document.getElementById('full-desc').textContent=loc.desc;
  document.getElementById('full-links').innerHTML=loc.links.map(l=>'<a class="sheet-link" href="#"><i class="ti ti-external-link" style="font-size:12px"></i>'+l+'</a>').join('');
  peekSheet();
}
function peekSheet(){sheetState='peek';const s=document.getElementById('sheet');s.classList.remove('open');s.classList.add('peek');document.getElementById('sheet-peek').style.display='block';document.getElementById('sheet-full').classList.remove('visible');document.getElementById('backdrop').classList.remove('visible')}
function openSheet(){if(activeMarker===null)return;sheetState='open';const s=document.getElementById('sheet');s.classList.remove('peek');s.classList.add('open');document.getElementById('sheet-peek').style.display='none';document.getElementById('sheet-full').classList.add('visible');document.getElementById('backdrop').classList.add('visible')}
function toggleSheet(){if(sheetState==='peek')openSheet();else if(sheetState==='open')peekSheet()}
function closeSheet(){sheetState='hidden';const s=document.getElementById('sheet');s.classList.remove('peek','open');document.getElementById('sheet-peek').style.display='block';document.getElementById('sheet-full').classList.remove('visible');document.getElementById('backdrop').classList.remove('visible');document.getElementById('peek-name').textContent='Tap a marker to explore';document.getElementById('peek-sub').textContent='Signal Hill historical map';document.querySelectorAll('.marker').forEach(m=>m.classList.remove('active'));activeMarker=null}
</script>
</body>
</html>`
