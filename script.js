/* ===================== shared constants ===================== */
const DOOMSDAY_DATE = new Date('2026-12-18T00:00:00');
const STORAGE_KEY = 'panel_tracker_items';
const MODE_KEY = 'panel_tracker_mode'; // 'movies' | 'both'

/* ===================== countdown (used on splash + mini nav badge) ===================== */
function getCountdownParts(){
  const now = new Date();
  let diff = DOOMSDAY_DATE - now;
  if(diff < 0) diff = 0;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const mins = Math.floor((diff / (1000*60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  return {days, hours, mins, secs};
}

function startBigCountdown(elIds){
  function tick(){
    const p = getCountdownParts();
    if(elIds.days) elIds.days.textContent = String(p.days).padStart(3,'0');
    if(elIds.hours) elIds.hours.textContent = String(p.hours).padStart(2,'0');
    if(elIds.mins) elIds.mins.textContent = String(p.mins).padStart(2,'0');
    if(elIds.secs) elIds.secs.textContent = String(p.secs).padStart(2,'0');
  }
  tick();
  return setInterval(tick, 1000);
}

function startMiniCountdown(el){
  function tick(){
    const p = getCountdownParts();
    el.textContent = `DOOMSDAY IN ${p.days}D ${String(p.hours).padStart(2,'0')}H ${String(p.mins).padStart(2,'0')}M ${String(p.secs).padStart(2,'0')}S`;
  }
  tick();
  setInterval(tick, 1000);
}

/* ===================== storage helpers ===================== */
function loadItems(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    console.error('Storage read failed', e);
    return [];
  }
}

function saveItems(items){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }catch(e){
    console.error('Storage write failed', e);
  }
}

function getMode(){
  return localStorage.getItem(MODE_KEY) || 'both';
}
function setMode(mode){
  localStorage.setItem(MODE_KEY, mode);
}

function addItem(item){
  const items = loadItems();
  item.id = 'it_' + Date.now() + '_' + Math.floor(Math.random()*1000);
  items.unshift(item);
  saveItems(items);
  return item;
}

function deleteItem(id){
  const items = loadItems().filter(i => i.id !== id);
  saveItems(items);
}

function updateItem(id, patch){
  const items = loadItems();
  const idx = items.findIndex(i => i.id === id);
  if(idx > -1){
    items[idx] = {...items[idx], ...patch};
    saveItems(items);
  }
}

/* ===================== quick-add from roadmap page ===================== */
function quickAddFromRoadmap(title, year, type, universe){
  const items = loadItems();
  const exists = items.some(i => i.title.toLowerCase() === title.toLowerCase());
  if(exists){
    showToast(`"${title}" is already on your list`);
    return;
  }
  addItem({
    title,
    year: year || '',
    type: type || 'movie',
    genre: 'MCU',
    status: 'want',
    poster: '',
    season: '',
    episode: '',
    rating: 0,
    notes: `Added from the universe (${universe})`
  });
  showToast(`Added "${title}" to your tracker`);
}

let roadmapSelectedItem = null;

function openRoadmapDetails(title, year, type, universe, hero = false, optional = false,description = '',mustWatchBefore = []){
  /* Reset spoiler state every time a new node is opened */

  const spoilerWarning =
    document.getElementById('spoilerWarning');

  const spoilerContent =
    document.getElementById('spoilerContent');

  if(spoilerWarning){
    spoilerWarning.classList.remove('spoiler-hidden');
  }

  if(spoilerContent){
    spoilerContent.classList.remove('spoiler-visible');
  }

  roadmapSelectedItem = {
    title,
    year,
    type,
    universe,
    hero,
    optional,
    description,
    mustWatchBefore
  };

  const modal = document.getElementById('roadmapModal');

  /* ---------- normal details ---------- */

  document.getElementById('roadmapDetailTitle').textContent = title;

  document.getElementById('roadmapDetailYear').textContent =
    year || 'Year TBD';

  document.getElementById('roadmapDetailUniverse').textContent =
    universe || 'Universe unknown';

  document.getElementById('roadmapDetailType').textContent =
    (type === 'series' ? 'SERIES' : 'MOVIE') + (optional ? ' · OPTIONAL' : '');


  /* ---------- DOOMSDAY SPECIAL ---------- */

  if(hero){

    modal.classList.add('hero-modal');

    document.getElementById('roadmapDetailType').textContent =
      '⚠ MULTIVERSE EVENT';

    document.getElementById('roadmapDetailTitle').textContent =
      'Avengers: Doomsday';

    document.getElementById('roadmapDetailYear').textContent =
      'DECEMBER 18, 2026';

    document.getElementById('roadmapDetailUniverse').textContent =
      'EARTH-616,Multi-Verse';

    document.getElementById('roadmapDetailDescription').innerHTML = `
      <strong>THE COLLISION BEGINS.</strong><br><br>

      Heroes from multiple universes are being pulled
      toward a single catastrophic confrontation.

      <br><br>

      <span class="hero-detail-destination">
        LEADS INTO → AVENGERS: SECRET WARS
      </span>
    `;

  } else {

  modal.classList.remove('hero-modal');

  const descriptionEl =
    document.getElementById('roadmapDetailDescription');

  if(description){
    descriptionEl.textContent = description;
  } else {

    descriptionEl.textContent = optional
      ? `Part of ${universe || 'the Marvel multiverse'}. This one's a skippable side branch — you won't lose context on the main line without it.`
      : `Part of ${universe || 'the Marvel multiverse'}.`;
  }
}
/* ---------- MUST WATCH BEFORE ---------- */

const mustWatchSection =
  document.getElementById('mustWatchBeforeSection');

const mustWatchList =
  document.getElementById('mustWatchBeforeList');

if(mustWatchBefore && mustWatchBefore.length){

  mustWatchSection.style.display = 'block';

  mustWatchList.innerHTML = mustWatchBefore
    .map(item => `
      <span class="must-watch-item">
        ${item}
      </span>
    `)
    .join('');

} else {

  mustWatchSection.style.display = 'none';
  mustWatchList.innerHTML = '';

}


  /* ---------- tracker button ---------- */

  const addBtn = document.getElementById('roadmapAddBtn');

  addBtn.textContent = hero
    ? '⚡ ADD DOOMSDAY TO TRACKER'
    : '+ ADD TO TRACKER';

  addBtn.onclick = function(){

    if(!roadmapSelectedItem) return;

    quickAddFromRoadmap(
      roadmapSelectedItem.title,
      roadmapSelectedItem.year,
      roadmapSelectedItem.type,
      roadmapSelectedItem.universe
    );

    closeRoadmapDetails();
  };


  modal.classList.add('open');
  document.body.classList.add('modal-open');
}
/* ===================== SPOILER WARNING ===================== */

function revealSpoilers(){

  const warning = document.getElementById('spoilerWarning');
  const content = document.getElementById('spoilerContent');

  if(!warning || !content) return;

  warning.classList.add('spoiler-hidden');
  content.classList.add('spoiler-visible');

}
function closeRoadmapDetails(){
  document.getElementById('roadmapModal').classList.remove('open');
  document.body.classList.remove('modal-open');
  roadmapSelectedItem = null;
}

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    closeRoadmapDetails();
  }
});
/* ===================== ACTIVE NAV ===================== */

document.addEventListener('DOMContentLoaded', () => {

  const currentPage =
    window.location.pathname.split('/').pop() || 'tracker.html';

  document.querySelectorAll('.navlinks a').forEach(link => {

    const linkPage =
      link.getAttribute('href')?.split('/').pop();

    if(linkPage === currentPage){
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }

  });

});
/* ===================== PAGE TRANSITIONS ===================== */

function navigateWithTransition(url){

  document.body.classList.remove('page-transition-in');
  document.body.classList.add('page-transition-out');

  setTimeout(() => {
    window.location.href = url;
  }, 300);
}
function showToast(msg){
  let toast = document.querySelector('.toast');
  if(!toast){
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2400);
}