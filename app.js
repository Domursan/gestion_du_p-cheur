// app.js - Gestion du pêcheur

// ---------- Mappings d'icônes (texte affiché en fiche détail) ----------
const statusMapping = {
    'Sobre': '😊 Sobre',
    'Bourré': '🍺 Bourré',
    'Défoncé': '💨 Défoncé'
};
const periodMapping = {
    'Aube': '🌅 Aube',
    'Journée': '☀️ Journée',
    'Crépuscule': '🌆 Crépuscule',
    'Nuit': '🌙 Nuit'
};
const weatherMapping = {
    'Dégagé': '☀️ Dégagé',
    'Nuageux': '☁️ Nuageux',
    'Pluvieux': '🌧️ Pluvieux',
    'Brumeux': '🌫️ Brumeux',
    'Neigeux': '❄️ Neigeux',
    'Tempêtueux': '⛈️ Tempêtueux',
    'Tout temps': '🌈 Tout temps'
};

// Icônes seules (pour les cartes)
const STATUS_ICON = { 'Sobre':'😊', 'Bourré':'🍺', 'Défoncé':'💨' };
const MOMENT_ICON = { 'Aube':'🌅', 'Journée':'☀️', 'Crépuscule':'🌆', 'Nuit':'🌙' };
const WEATHER_ICON = { 'Dégagé':'☀️', 'Nuageux':'☁️', 'Pluvieux':'🌧️', 'Brumeux':'🌫️', 'Neigeux':'❄️', 'Tempêtueux':'⛈️' };
const ALL_WEATHER_ICONS = ['☀️','☁️','🌧️','🌫️','❄️','⛈️'];
const ALL_WEATHER_TEXT = ['Dégagé','Nuageux','Pluvieux','Brumeux','Neigeux','Tempêtueux'];

// Icônes de lieu : construites depuis la vraie correspondance de zones (popup "Carte des zones"),
// pas une déduction par mot-clé — indispensable pour Horizon dont les noms sont poétiques.
const ZONE_ICONS = {
    standard: { 'Mer Sud':'🌊', 'Mer Nord':'🌊', 'Grand Lac':'🏞️', 'Petits Lacs':'💧', 'Bords de mer':'⚓', 'Rivières':'〰️', 'Canaux':'🚤' },
    summer:   { 'Mer Sud':'🌊', 'Mer Nord':'🌊', 'Grand Lac':'🏞️', 'Petits Lacs':'💧', 'Bords de mer':'⚓', 'Rivières':'〰️', 'Canaux':'🚤' },
    halloween:{ 'Mer de la Nuit':'🌊', 'Abysses du Nord':'🌊', "Lac de l'Effroi":'🏞️', 'Etangs Sombres':'💧', 'Côte des Ombres':'⚓', 'Fleuves Ténébreux':'〰️', 'Canaux du Cauchemar':'🚤' },
    bloodlust:{ 'Mer des Lamentations':'🌊', 'Abysses Obscurs':'🌊', 'Lac Sombre':'🏞️', 'Etangs Morts':'💧', 'Côte des Mânes':'⚓', 'Fleuves Pourpres':'〰️', 'Canaux de la Nuit':'🚤' },
    horizon:  { 'Crique de glace':'🌊', 'Baie des Brumes Gelées':'🌊', 'Désert de givre':'🏞️', 'Etendues givrées':'💧', 'Côtes gelées':'⚓', 'Fleuves Cristallisés':'〰️', 'Quartiers Figés':'🚤' }
};

const categoryLabels = { standard:'Standard', summer:'Summer', halloween:'Halloween', bloodlust:'Bloodlust', horizon:'Horizon' };

// Halloween et Bloodlust sont 100% "Tout temps" : le filtre météo n'y a aucun effet utile
const CATEGORIES_WITHOUT_METEO_FILTER = ['halloween', 'bloodlust'];

// ---------- Données ----------
const fishData = {
    standard: FISH_DATA_STANDARD,
    summer: FISH_DATA_SUMMER,
    halloween: FISH_DATA_HALLOWEEN,
    bloodlust: FISH_DATA_BLOODLUST,
    horizon: FISH_DATA_HORIZON
};
const validCategories = Object.keys(fishData);

let viewMode = {};
const selectedFilters = {}; // { cat: { etat:Set, lieu:Set, moment:Set, meteo:Set } }
const captureFilterState = {}; // { cat: { caught:bool, uncaught:bool } }

validCategories.forEach(cat => {
    selectedFilters[cat] = { etat: new Set(), lieu: new Set(), moment: new Set(), meteo: new Set() };
    captureFilterState[cat] = { caught: false, uncaught: false };
});

// ---------- Persistance capture ----------
function loadCaughtFish() { return JSON.parse(localStorage.getItem('caughtFish') || '{}'); }
function saveCaughtFish(caughtFish) { localStorage.setItem('caughtFish', JSON.stringify(caughtFish)); }
function isCaught(category, index) { return !!loadCaughtFish()[`${category}-${index}`]; }
function setCaught(category, index, value) {
    const caughtFish = loadCaughtFish();
    const key = `${category}-${index}`;
    if (value) caughtFish[key] = true; else delete caughtFish[key];
    saveCaughtFish(caughtFish);
}

// ---------- Icônes de condition (cartes + modale) ----------
function weatherIconsFor(meteoArray) {
    if (meteoArray.includes('Tout temps')) return ALL_WEATHER_ICONS.join('');
    return meteoArray.map(m => WEATHER_ICON[m] || '').join('');
}
function weatherTextChipsFor(meteoArray) {
    if (meteoArray.includes('Tout temps')) return ALL_WEATHER_TEXT.map(t => `${WEATHER_ICON[t]} ${t}`);
    return meteoArray.map(m => weatherMapping[m] || m);
}
function zoneIconsFor(category, lieuArray) {
    const map = ZONE_ICONS[category] || {};
    return lieuArray.map(l => map[l] || '📍').join('');
}

function renderCondBlock(category, f) {
    return `
        <div class="cond-block">
            <div class="cond-line"><span class="cond-tag">État</span><span class="cond-icons">${f.etat.map(e => STATUS_ICON[e] || '').join('')}</span></div>
            <div class="cond-line"><span class="cond-tag">Lieu</span><span class="cond-icons">${zoneIconsFor(category, f.lieu)}</span></div>
            <div class="cond-line"><span class="cond-tag">Mom.</span><span class="cond-icons">${f.moment.map(m => MOMENT_ICON[m] || '').join('')}</span></div>
            <div class="cond-line"><span class="cond-tag">Mét.</span><span class="cond-icons">${weatherIconsFor(f.meteo)}</span></div>
        </div>`;
}

// ---------- Vue cartes ----------
function renderCards(category) {
    const grid = document.getElementById(`grid-${category}`);
    if (!grid) return;
    const fish = fishData[category];

    grid.innerHTML = '';
    fish.forEach((f, index) => {
        const caught = isCaught(category, index);
        const card = document.createElement('div');
        card.className = `fish-card ${caught ? 'caught' : 'uncaught'}`;
        card.setAttribute('data-index', index);

        card.innerHTML = `
            <span class="ring"></span>
            <span class="spark s1">✦</span>
            <span class="spark s2">✧</span>
            <span class="spark s3">✦</span>
            <div class="card-top">
                <div class="card-num">${f.numero2}</div>
                <button class="detail-btn" aria-label="Voir la fiche détail" onclick="openFishModal('${category}', ${index})">i</button>
            </div>
            <div class="card-icon">🐟</div>
            <div class="card-name">${f.nom}</div>
            ${renderCondBlock(category, f)}
            <button type="button" class="capture-row" aria-pressed="${caught ? 'true' : 'false'}" onclick="toggleCaught('${category}', ${index})">
                <span class="capture-checkbox">✓</span>
                <span class="capture-label">Capturé</span>
            </button>
        `;
        grid.appendChild(card);
    });

    applyFilters(category);
}

function toggleCaught(category, index) {
    const nowCaught = !isCaught(category, index);
    setCaught(category, index, nowCaught);

    updateStats(category);
    updateZoneStats(category);

    if (viewMode[category] === 'list') {
        updateSingleRow(category, index);
    } else {
        updateSingleCard(category, index, nowCaught);
    }
    applyFilters(category);

    if (currentModal.category === category && currentModal.index === index) {
        updateModalCaptureState();
    }
}

// Met à jour uniquement la carte concernée (classes, aria, animation) sans reconstruire toute la grille
function updateSingleCard(category, index, justCaught) {
    const card = document.querySelector(`#grid-${category} .fish-card[data-index="${index}"]`);
    if (!card) return;

    const caught = isCaught(category, index);
    card.classList.toggle('caught', caught);
    card.classList.toggle('uncaught', !caught);

    const captureBtn = card.querySelector('.capture-row');
    if (captureBtn) captureBtn.setAttribute('aria-pressed', caught ? 'true' : 'false');

    card.classList.remove('just-caught');
    if (justCaught) {
        void card.offsetWidth; // force le navigateur à relire le style avant de rajouter la classe, pour relancer l'animation
        card.classList.add('just-caught');
        card.addEventListener('animationend', () => card.classList.remove('just-caught'), { once: true });
    }
}

// Met à jour uniquement la ligne concernée en vue liste
function updateSingleRow(category, index) {
    const row = document.querySelector(`#tbody-${category} tr[data-index="${index}"]`);
    if (!row) return;

    const caught = isCaught(category, index);
    row.classList.toggle('caught', caught);
    const checkbox = row.querySelector('.checkbox-container input');
    if (checkbox) checkbox.checked = caught;
}

// ---------- Modale de détails ----------
let currentModal = { category: null, index: null };

function openFishModal(category, index) {
    currentModal = { category, index };
    const f = fishData[category][index];

    document.body.querySelectorAll('.fish-modal').forEach(m => {}); // no-op, single modal reused
    document.getElementById('fmNumber').textContent = `N° ${f.numero} — Page ${f.numero2}`;
    document.getElementById('fmName').textContent = f.nom;

    document.getElementById('fmEtat').innerHTML = f.etat.map(e => `<div class="fm-value"><span>${STATUS_ICON[e] || ''}</span> ${e}</div>`).join('');
    document.getElementById('fmLieu').innerHTML = f.lieu.map(l => `<div class="fm-value"><span>${(ZONE_ICONS[category] || {})[l] || '📍'}</span> ${l}</div>`).join('');
    document.getElementById('fmMoment').innerHTML = f.moment.map(m => `<div class="fm-value"><span>${MOMENT_ICON[m] || ''}</span> ${m}</div>`).join('');
    document.getElementById('fmMeteo').innerHTML = weatherTextChipsFor(f.meteo).map(t => `<div class="fm-value">${t}</div>`).join('');

    updateModalCaptureState();
    document.getElementById('fishModalOverlay').classList.add('active');
}

function updateModalCaptureState() {
    const { category, index } = currentModal;
    const caught = isCaught(category, index);
    const modal = document.getElementById('fishModal');
    modal.classList.toggle('caught', caught);
    document.getElementById('fmCaptureText').textContent = caught ? 'Marqué comme capturé' : 'Non capturé';
    document.getElementById('fmCaptureSub').textContent = caught ? 'Cliquer pour retirer' : 'Cliquer pour marquer comme capturé';
}

function toggleCaptureFromModal() {
    const { category, index } = currentModal;
    toggleCaught(category, index);
}

function closeFishModal(event) {
    if (!event || event.target.classList.contains('fish-modal-overlay') || event.target.classList.contains('fish-modal-close')) {
        document.getElementById('fishModalOverlay').classList.remove('active');
    }
}

// ---------- Vue liste ----------
function renderTableRows(category) {
    const tbody = document.getElementById(`tbody-${category}`);
    if (!tbody) return;
    const fish = fishData[category];

    tbody.innerHTML = '';
    fish.forEach((f, index) => {
        const caught = isCaught(category, index);
        const row = document.createElement('tr');
        row.setAttribute('data-index', index);
        row.setAttribute('data-original-index', index);
        if (caught) row.classList.add('caught');

        row.innerHTML = `
            <td>${f.nom}</td>
            <td>${f.numero}</td>
            <td>${f.numero2}</td>
            <td class="checkbox-container"><input type="checkbox" ${caught ? 'checked' : ''} onchange="toggleCaught('${category}', ${index})"></td>
            <td><div class="conditions">${f.etat.map(e => `<span class="condition-badge">${STATUS_ICON[e] || ''} ${e}</span>`).join('')}</div></td>
            <td><div class="conditions">${f.lieu.map(l => `<span class="condition-badge">${(ZONE_ICONS[category]||{})[l]||''} ${l}</span>`).join('')}</div></td>
            <td><div class="conditions">${f.moment.map(m => `<span class="condition-badge">${MOMENT_ICON[m]||''} ${m}</span>`).join('')}</div></td>
            <td><div class="conditions">${weatherTextChipsFor(f.meteo).map(t => `<span class="condition-badge">${t}</span>`).join('')}</div></td>
        `;
        tbody.appendChild(row);
    });
    applyFilters(category);
}

function setViewMode(category, mode) {
    viewMode[category] = mode;
    localStorage.setItem('viewMode', JSON.stringify(viewMode));
    document.getElementById(`view-cards-${category}`).classList.toggle('active', mode === 'cards');
    document.getElementById(`view-list-${category}`).classList.toggle('active', mode === 'list');
    document.getElementById(`cards-wrap-${category}`).style.display = mode === 'cards' ? 'block' : 'none';
    document.getElementById(`list-wrap-${category}`).style.display = mode === 'list' ? 'block' : 'none';
    if (mode === 'list') renderTableRows(category); else renderCards(category);
}

// ---------- Stats ----------
function updateStats(category) {
    const fish = fishData[category];
    let caught = 0;
    fish.forEach((f, index) => { if (isCaught(category, index)) caught++; });
    const total = fish.length;
    const percent = total > 0 ? Math.round((caught / total) * 100) : 0;

    document.getElementById(`stats-${category}-caught`).textContent = caught;
    document.getElementById(`stats-${category}-total`).textContent = total;
    const fill = document.getElementById(`gp-fill-${category}`);
    fill.style.width = percent + '%';
    fill.textContent = percent + '%';
}

function updateZoneStats(category) {
    const fish = fishData[category];
    const container = document.getElementById(`zone-stats-${category}`);
    if (!container) return;

    const zoneStats = {};
    fish.forEach((f, index) => {
        const caught = isCaught(category, index);
        f.lieu.forEach(lieu => {
            if (!zoneStats[lieu]) zoneStats[lieu] = { total: 0, caught: 0 };
            zoneStats[lieu].total++;
            if (caught) zoneStats[lieu].caught++;
        });
    });

    const icons = ZONE_ICONS[category] || {};
    container.innerHTML = Object.keys(zoneStats).sort().map(zone => {
        const s = zoneStats[zone];
        const percent = s.total > 0 ? Math.round((s.caught / s.total) * 100) : 0;
        return `
            <div class="zp-row">
                <div class="zp-name${percent === 100 ? ' complete' : ''}">${icons[zone] || '📍'} ${zone}</div>
                <div class="zp-bar"><div class="zp-fill" style="width:${percent}%"></div></div>
                <div class="zp-count">${s.caught}/${s.total}</div>
            </div>`;
    }).join('');
}

// ---------- Filtres ----------
const FILTER_LABELS = { etat:'État', lieu:'Lieu', moment:'Moment', meteo:'Météo' };

function filterKeysFor(category) {
    return CATEGORIES_WITHOUT_METEO_FILTER.includes(category) ? ['etat','lieu','moment'] : ['etat','lieu','moment','meteo'];
}

function buildFilterPanels(category) {
    const fish = fishData[category];
    const values = { etat: new Set(), lieu: new Set(), moment: new Set(), meteo: new Set() };
    fish.forEach(f => {
        f.etat.forEach(v => values.etat.add(v));
        f.lieu.forEach(v => values.lieu.add(v));
        f.moment.forEach(v => values.moment.add(v));
        f.meteo.forEach(v => { if (v !== 'Tout temps') values.meteo.add(v); });
    });

    filterKeysFor(category).forEach(key => {
        const panel = document.getElementById(`panel-${category}-${key}`);
        if (!panel) return;
        const sorted = [...values[key]].sort();
        panel.innerHTML = sorted.map(v => `
            <div class="filter-option" onclick="toggleFilterOption('${category}','${key}','${v.replace(/'/g, "\\'")}')" id="opt-${category}-${key}-${slug(v)}">
                <span class="box">✓</span><span class="lbl">${v}</span>
            </div>`).join('') + `<div class="filter-panel-clear" onclick="clearCategoryFilter('${category}','${key}')">Effacer ce filtre</div>`;
    });
}

function slug(v) { return v.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]/g,'_'); }

function togglePanel(category, key) {
    document.querySelectorAll(`#panel-${category} .filter-panel, [id^="panel-${category}-"]`).forEach(p => {
        if (p.id !== `panel-${category}-${key}`) p.classList.remove('open');
    });
    const panel = document.getElementById(`panel-${category}-${key}`);
    if (panel) panel.classList.toggle('open');
}
document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter-dd')) {
        document.querySelectorAll('.filter-panel').forEach(p => p.classList.remove('open'));
    }
});

function toggleFilterOption(category, key, value) {
    const set = selectedFilters[category][key];
    if (set.has(value)) set.delete(value); else set.add(value);
    const opt = document.getElementById(`opt-${category}-${key}-${slug(value)}`);
    if (opt) opt.classList.toggle('checked');
    updateFilterButton(category, key);
    renderActiveChips(category);
    applyFilters(category);
}

function clearCategoryFilter(category, key) {
    selectedFilters[category][key].clear();
    document.querySelectorAll(`#panel-${category}-${key} .filter-option`).forEach(o => o.classList.remove('checked'));
    updateFilterButton(category, key);
    renderActiveChips(category);
    applyFilters(category);
}

function updateFilterButton(category, key) {
    const btn = document.getElementById(`btn-${category}-${key}`);
    if (!btn) return;
    const n = selectedFilters[category][key].size;
    const countEl = btn.querySelector('.count');
    btn.classList.toggle('has-selection', n > 0);
    countEl.style.display = n > 0 ? 'inline' : 'none';
    countEl.textContent = n;
}

function toggleCaptureChip(category, which) {
    captureFilterState[category][which] = !captureFilterState[category][which];
    document.getElementById(`chip-${category}-${which}`).classList.toggle('checked', captureFilterState[category][which]);
    renderActiveChips(category);
    applyFilters(category);
}

function renderActiveChips(category) {
    const container = document.getElementById(`active-chips-${category}`);
    if (!container) return;
    let chips = [];
    filterKeysFor(category).forEach(key => {
        selectedFilters[category][key].forEach(v => {
            chips.push(`<div class="active-chip">${FILTER_LABELS[key]} : ${v}<button onclick="toggleFilterOption('${category}','${key}','${v.replace(/'/g, "\\'")}')">✕</button></div>`);
        });
    });
    if (captureFilterState[category].caught) chips.push(`<div class="active-chip">Capturé<button onclick="toggleCaptureChip('${category}','caught')">✕</button></div>`);
    if (captureFilterState[category].uncaught) chips.push(`<div class="active-chip">Non capturé<button onclick="toggleCaptureChip('${category}','uncaught')">✕</button></div>`);
    if (chips.length > 0) chips.push(`<button class="btn-reset-all" onclick="resetAllFilters('${category}')">Tout réinitialiser</button>`);
    container.innerHTML = chips.join('');
}

function resetAllFilters(category) {
    filterKeysFor(category).forEach(key => selectedFilters[category][key].clear());
    captureFilterState[category] = { caught:false, uncaught:false };
    document.querySelectorAll(`[id^="panel-${category}-"] .filter-option`).forEach(o => o.classList.remove('checked'));
    document.querySelectorAll(`#chip-${category}-caught, #chip-${category}-uncaught`).forEach(c => c.classList.remove('checked'));
    const search = document.getElementById(`search-${category}`);
    if (search) search.value = '';
    filterKeysFor(category).forEach(key => updateFilterButton(category, key));
    renderActiveChips(category);
    applyFilters(category);
}

function applyFilters(category) {
    const search = (document.getElementById(`search-${category}`)?.value || '').trim().toLowerCase();
    const fish = fishData[category];
    const cf = captureFilterState[category];
    const sf = selectedFilters[category];

    let visibleCount = 0;
    const isList = viewMode[category] === 'list';
    const items = isList
        ? document.querySelectorAll(`#tbody-${category} tr`)
        : document.querySelectorAll(`#grid-${category} .fish-card`);

    items.forEach(el => {
        const index = parseInt(el.getAttribute(isList ? 'data-original-index' : 'data-index'));
        const f = fish[index];
        const caught = isCaught(category, index);

        const matchSearch = !search || f.nom.toLowerCase().includes(search);
        const matchCapture = (!cf.caught && !cf.uncaught) || (cf.caught && caught) || (cf.uncaught && !caught);

        let matchAll = true;
        filterKeysFor(category).forEach(key => {
            if (sf[key].size === 0) return;
            const has = [...sf[key]].some(v => f[key].includes(v));
            if (!has) matchAll = false;
        });

        const visible = matchSearch && matchCapture && matchAll;
        el.classList.toggle(isList ? 'hidden' : 'hidden', !visible);
        if (visible) visibleCount++;
    });

    const rc = document.getElementById(`result-count-${category}`);
    if (rc) rc.textContent = `${visibleCount} poisson${visibleCount > 1 ? 's' : ''} affiché${visibleCount > 1 ? 's' : ''}`;
}

// ---------- Tri (vue liste) ----------
let sortStates = {};
function sortTable(category, columnIndex) {
    const table = document.getElementById(`table-${category}`);
    const tbody = document.getElementById(`tbody-${category}`);
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const headers = table.querySelectorAll('thead th');
    const key = `${category}-${columnIndex}`;

    if (!sortStates[key]) sortStates[key] = 'none';
    sortStates[key] = sortStates[key] === 'none' ? 'asc' : (sortStates[key] === 'asc' ? 'desc' : 'none');

    headers.forEach((header, idx) => {
        header.classList.remove('sorted-asc', 'sorted-desc');
        if (idx === columnIndex && sortStates[key] !== 'none') header.classList.add(sortStates[key] === 'asc' ? 'sorted-asc' : 'sorted-desc');
    });

    if (sortStates[key] === 'none') {
        rows.sort((a, b) => parseInt(a.getAttribute('data-original-index')) - parseInt(b.getAttribute('data-original-index')));
    } else {
        rows.sort((a, b) => {
            let aVal = a.cells[columnIndex].textContent.trim();
            let bVal = b.cells[columnIndex].textContent.trim();
            if (columnIndex === 3) {
                aVal = a.cells[columnIndex].querySelector('input').checked ? 1 : 0;
                bVal = b.cells[columnIndex].querySelector('input').checked ? 1 : 0;
            } else if (columnIndex === 1) {
                aVal = parseInt(aVal); bVal = parseInt(bVal);
            }
            if (aVal < bVal) return sortStates[key] === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortStates[key] === 'asc' ? 1 : -1;
            return 0;
        });
    }
    rows.forEach(row => tbody.appendChild(row));
}

// ---------- Onglets ----------
function switchTab(category) {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`.tab-button.${category}`).classList.add('active');
    document.getElementById(category).classList.add('active');
    document.body.setAttribute('data-cat', category);
    localStorage.setItem('activeTab', category);
}

// ---------- Popups génériques ----------
function openPopup(type) {
    const popup = document.getElementById(`${type}Popup`);
    if (type === 'site') {
        const content = localStorage.getItem('siteContent') || '<p>Bienvenue dans le carnet du pêcheur !</p><p>Vous pouvez modifier ce texte en cliquant dessus...</p>';
        document.getElementById('siteContent').innerHTML = content;
    }
    popup.classList.add('active');
}
function closePopup(event, type) {
    if (!event || event.target.classList.contains('popup-overlay') || event.target.classList.contains('popup-close')) {
        document.getElementById(`${type}Popup`).classList.remove('active');
    }
}
function saveSiteContent() {
    localStorage.setItem('siteContent', document.getElementById('siteContent').innerHTML);
    alert('Contenu sauvegardé !');
}

// ---------- Export / Import ----------
function exportData() {
    const data = {
        caughtFish: JSON.parse(localStorage.getItem('caughtFish') || '{}'),
        siteContent: localStorage.getItem('siteContent') || '',
        exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `gestion-du-pecheur-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function importData() {
    const fileInput = document.getElementById('importFileInput');
    const file = fileInput.files[0];
    if (!file) { alert('Merci de sélectionner un fichier à importer.'); return; }
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            if (data.caughtFish) localStorage.setItem('caughtFish', JSON.stringify(data.caughtFish));
            if (typeof data.siteContent === 'string') localStorage.setItem('siteContent', data.siteContent);
            alert('Données importées avec succès ! La page va se recharger.');
            location.reload();
        } catch (err) {
            alert('Le fichier sélectionné n\'est pas un fichier de sauvegarde valide.');
        }
    };
    reader.readAsText(file);
}

// ---------- Échap ----------
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.popup-overlay').forEach(p => p.classList.remove('active'));
        document.getElementById('fishModalOverlay')?.classList.remove('active');
    }
});

// ---------- Initialisation ----------
function initCategory(category) {
    buildFilterPanels(category);
    renderCards(category);
    updateStats(category);
    updateZoneStats(category);

    const searchInput = document.getElementById(`search-${category}`);
    if (searchInput) searchInput.addEventListener('input', () => applyFilters(category));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedViewMode = JSON.parse(localStorage.getItem('viewMode') || '{}');
    validCategories.forEach(cat => { viewMode[cat] = savedViewMode[cat] || 'cards'; });

    validCategories.forEach(cat => {
        initCategory(cat);
        if (viewMode[cat] === 'list') setViewMode(cat, 'list');
    });

    const savedTab = localStorage.getItem('activeTab');
    const initialTab = (savedTab && validCategories.includes(savedTab)) ? savedTab : 'standard';
    switchTab(initialTab);
});
