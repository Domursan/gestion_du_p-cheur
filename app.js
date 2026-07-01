// app.js - Logique principale du gestionnaire de pêche

// Mapping des zones de pêche
const zoneMapping = {
    'south_sea': 'Mer Sud',
    'north_sea': 'Mer Nord',
    'big_lake': 'Grand lac',
    'little_lake': 'Petits lacs',
    'seaside': 'Bords de mer',
    'river': 'Rivières',
    'canal': 'Canaux'
};

// Mapping des états (ajoute un emoji devant le texte)
const statusMapping = {
    'Sobre': '😊 Sobre',
    'Bourré': '🍺 Bourré',
    'Défoncé': '💨 Défoncé'
};

// Mapping des moments (ajoute un emoji devant le texte)
const periodMapping = {
    'Aube': '🌅 Aube',
    'Journée': '☀️ Journée',
    'Crépuscule': '🌆 Crépuscule',
    'Nuit': '🌙 Nuit'
};

// Mapping des météos (ajoute un emoji devant le texte)
const weatherMapping = {
    'Dégagé': '☀️ Dégagé',
    'Nuageux': '☁️ Nuageux',
    'Pluvieux': '🌧️ Pluvieux',
    'Brumeux': '🌫️ Brumeux',
    'Neigeux': '❄️ Neigeux',
    'Tempêtueux': '⛈️ Tempêtueux',
    'Tout temps': '🌈 Tout temps'
};

// Assemblage de la base de données à partir des fichiers data-*.js
const fishData = {
    standard: FISH_DATA_STANDARD,
    summer: FISH_DATA_SUMMER,
    halloween: FISH_DATA_HALLOWEEN,
    bloodlust: FISH_DATA_BLOODLUST,
    horizon: FISH_DATA_HORIZON
};

// Fonction pour créer des badges de conditions
function createConditionBadges(conditions, mappingObj = null) {
    if (!conditions || conditions.length === 0) return 'N/A';

    // Gérer le cas où conditions est une chaîne au lieu d'un tableau
    const condArray = Array.isArray(conditions) ? conditions : [conditions];

    return condArray.map(cond => {
        const displayText = mappingObj && mappingObj[cond] ? mappingObj[cond] : cond;
        // Normaliser le texte pour la classe CSS (enlever accents, espaces, apostrophes...)
        const className = cond
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Enlever les accents
            .replace(/\s+/g, '-') // Remplacer espaces par tirets
            .replace(/['']/g, ''); // Enlever apostrophes
        return `<span class="condition-badge ${className}">${displayText}</span>`;
    }).join('');
}

// Charger les poissons capturés depuis localStorage
function loadCaughtFish() {
    return JSON.parse(localStorage.getItem('caughtFish') || '{}');
}

// Sauvegarder les poissons capturés
function saveCaughtFish(caughtFish) {
    localStorage.setItem('caughtFish', JSON.stringify(caughtFish));
}

// Basculer l'état de capture
function toggleCaught(category, index) {
    const caughtFish = loadCaughtFish();
    const key = `${category}-${index}`;

    if (caughtFish[key]) {
        delete caughtFish[key];
    } else {
        caughtFish[key] = true;
    }

    saveCaughtFish(caughtFish);
    updateStats(category);
    updateZoneStats(category);

    const row = document.querySelector(`#tbody-${category} tr[data-index="${index}"]`);
    if (caughtFish[key]) {
        row.classList.add('caught');
    } else {
        row.classList.remove('caught');
    }
}

// Générer le tableau pour une catégorie
function generateTable(category) {
    const tbody = document.getElementById(`tbody-${category}`);
    const fish = fishData[category];
    const caughtFish = loadCaughtFish();

    tbody.innerHTML = '';

    fish.forEach((f, index) => {
        const key = `${category}-${index}`;
        const isCaught = caughtFish[key] || false;

        const row = document.createElement('tr');
        row.setAttribute('data-index', index);
        row.setAttribute('data-original-index', index);
        if (isCaught) row.classList.add('caught');

        // Utiliser les noms de propriétés de la base de données
        row.innerHTML = `
            <td>${f.nom}</td>
            <td>${f.numero}</td>
            <td>${f.numero2}</td>
            <td class="checkbox-container">
                <input type="checkbox" ${isCaught ? 'checked' : ''} 
                    onchange="toggleCaught('${category}', ${index})">
            </td>
            <td><div class="conditions">${createConditionBadges(f.etat, statusMapping)}</div></td>
            <td><div class="conditions">${createConditionBadges(f.lieu)}</div></td>
            <td><div class="conditions">${createConditionBadges(f.moment, periodMapping)}</div></td>
            <td><div class="conditions">${createConditionBadges(f.meteo, weatherMapping)}</div></td>
        `;

        tbody.appendChild(row);
    });

    updateStats(category);
    updateZoneStats(category);
    populateFilters(category);
}

// Mettre à jour les statistiques
function updateStats(category) {
    const fish = fishData[category];
    const caughtFish = loadCaughtFish();

    const total = fish.length;
    let caught = 0;

    fish.forEach((f, index) => {
        const key = `${category}-${index}`;
        if (caughtFish[key]) caught++;
    });

    const percent = total > 0 ? Math.round((caught / total) * 100) : 0;

    document.getElementById(`stats-${category}-caught`).textContent = caught;
    document.getElementById(`stats-${category}-total`).textContent = total;
    document.getElementById(`stats-${category}-percent`).textContent = percent + '%';
}

// Mettre à jour les statistiques par zone
function updateZoneStats(category) {
    const fish = fishData[category];
    const caughtFish = loadCaughtFish();
    const tbody = document.getElementById(`zone-stats-${category}`);

    if (!tbody) return;

    const zoneStats = {};

    fish.forEach((f, index) => {
        const key = `${category}-${index}`;
        const isCaught = caughtFish[key] || false;

        f.lieu.forEach(lieu => {
            const displayName = zoneMapping[lieu] || lieu;
            if (!zoneStats[displayName]) {
                zoneStats[displayName] = { total: 0, caught: 0 };
            }
            zoneStats[displayName].total++;
            if (isCaught) {
                zoneStats[displayName].caught++;
            }
        });
    });

    const sortedZones = Object.keys(zoneStats).sort();

    tbody.innerHTML = '';
    sortedZones.forEach(zone => {
        const stats = zoneStats[zone];
        const percent = stats.total > 0 ? Math.round((stats.caught / stats.total) * 100) : 0;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="zone-name">${zone}</td>
            <td class="count">${stats.caught}</td>
            <td class="count">${stats.total}</td>
            <td>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percent}%">
                        ${percent}%
                    </div>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Peupler les filtres
function populateFilters(category) {
    const fish = fishData[category];

    const etats = new Set();
    const lieux = new Set();
    const moments = new Set();
    const meteos = new Set();

    fish.forEach(f => {
        f.etat.forEach(e => etats.add(e));
        f.lieu.forEach(l => lieux.add(l));
        f.moment.forEach(m => moments.add(m));
        f.meteo.forEach(m => meteos.add(m));
    });

    populateSelect(`filter-${category}-etat`, etats, statusMapping);
    populateSelect(`filter-${category}-lieu`, lieux);
    populateSelect(`filter-${category}-moment`, moments, periodMapping);
    populateSelect(`filter-${category}-meteo`, meteos, weatherMapping);
}

function populateSelect(id, values, mappingObj = null) {
    const select = document.getElementById(id);
    const currentValue = select.value;

    select.innerHTML = '<option value="">Tous</option>';

    Array.from(values).sort().forEach(value => {
        if (value !== 'N/A') {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = mappingObj && mappingObj[value] ? mappingObj[value] : value;
            select.appendChild(option);
        }
    });

    select.value = currentValue;
}

// Appliquer les filtres
function applyFilters(category) {
    const etat = document.getElementById(`filter-${category}-etat`).value;
    const lieu = document.getElementById(`filter-${category}-lieu`).value;
    const moment = document.getElementById(`filter-${category}-moment`).value;
    const meteo = document.getElementById(`filter-${category}-meteo`).value;

    const fish = fishData[category];
    const tbody = document.getElementById(`tbody-${category}`);
    const rows = tbody.querySelectorAll('tr');

    rows.forEach((row) => {
        const originalIndex = parseInt(row.getAttribute('data-original-index'));
        const f = fish[originalIndex];

        const matchEtat = !etat || f.etat.includes(etat);
        const matchLieu = !lieu || f.lieu.includes(lieu);
        const matchMoment = !moment || f.moment.includes(moment);
        const matchMeteo = !meteo || f.meteo.includes(meteo);

        if (matchEtat && matchLieu && matchMoment && matchMeteo) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}

// Réinitialiser les filtres
function resetFilters(category) {
    document.getElementById(`filter-${category}-etat`).value = '';
    document.getElementById(`filter-${category}-lieu`).value = '';
    document.getElementById(`filter-${category}-moment`).value = '';
    document.getElementById(`filter-${category}-meteo`).value = '';

    const rows = document.querySelectorAll(`#tbody-${category} tr`);
    rows.forEach(row => row.classList.remove('hidden'));
}

// Changer d'onglet
function switchTab(category) {
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelector(`.tab-button.${category}`).classList.add('active');
    document.getElementById(category).classList.add('active');

    localStorage.setItem('activeTab', category);
}

// Trier le tableau
let sortStates = {};

function sortTable(category, columnIndex) {
    const table = document.getElementById(`table-${category}`);
    const tbody = document.getElementById(`tbody-${category}`);
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const headers = table.querySelectorAll('thead th');

    const key = `${category}-${columnIndex}`;

    if (!sortStates[key]) {
        sortStates[key] = 'none';
    }

    if (sortStates[key] === 'none') {
        sortStates[key] = 'asc';
    } else if (sortStates[key] === 'asc') {
        sortStates[key] = 'desc';
    } else {
        sortStates[key] = 'none';
    }

    headers.forEach((header, idx) => {
        header.classList.remove('sorted-asc', 'sorted-desc');
        if (idx === columnIndex) {
            if (sortStates[key] === 'asc') {
                header.classList.add('sorted-asc');
            } else if (sortStates[key] === 'desc') {
                header.classList.add('sorted-desc');
            }
        }
    });

    if (sortStates[key] === 'none') {
        rows.sort((a, b) => {
            const aIndex = parseInt(a.getAttribute('data-original-index'));
            const bIndex = parseInt(b.getAttribute('data-original-index'));
            return aIndex - bIndex;
        });
    } else {
        rows.sort((a, b) => {
            let aVal = a.cells[columnIndex].textContent.trim();
            let bVal = b.cells[columnIndex].textContent.trim();

            if (columnIndex === 3) { // Colonne "Capturé"
                aVal = a.cells[columnIndex].querySelector('input').checked ? 1 : 0;
                bVal = b.cells[columnIndex].querySelector('input').checked ? 1 : 0;
            } else if (columnIndex === 1) { // Colonne numérique
                aVal = parseInt(aVal);
                bVal = parseInt(bVal);
            }

            if (aVal < bVal) return sortStates[key] === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortStates[key] === 'asc' ? 1 : -1;
            return 0;
        });
    }

    rows.forEach(row => tbody.appendChild(row));
}

// Gestion des popups
function openPopup(type) {
    const popup = document.getElementById(`${type}Popup`);

    if (type === 'site') {
        const content = localStorage.getItem('siteContent') ||
            '<p>Bienvenue sur le gestionnaire de pêche !</p><p>Vous pouvez modifier ce texte en cliquant dessus...</p>';
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
    const content = document.getElementById('siteContent').innerHTML;
    localStorage.setItem('siteContent', content);
    alert('Contenu sauvegardé !');
}

// Exporter les données (poissons capturés + notes personnelles) en fichier JSON
function exportData() {
    const data = {
        caughtFish: JSON.parse(localStorage.getItem('caughtFish') || '{}'),
        siteContent: localStorage.getItem('siteContent') || '',
        exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `peche-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Importer des données depuis un fichier JSON exporté précédemment
function importData() {
    const fileInput = document.getElementById('importFileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Merci de sélectionner un fichier à importer.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);

            if (data.caughtFish) {
                localStorage.setItem('caughtFish', JSON.stringify(data.caughtFish));
            }
            if (typeof data.siteContent === 'string') {
                localStorage.setItem('siteContent', data.siteContent);
            }

            alert('Données importées avec succès ! La page va se recharger.');
            location.reload();
        } catch (err) {
            alert('Le fichier sélectionné n\'est pas un fichier de sauvegarde valide.');
        }
    };
    reader.readAsText(file);
}

// Fermer avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.popup-overlay').forEach(popup => {
            popup.classList.remove('active');
        });
    }
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    generateTable('standard');
    generateTable('summer');
    generateTable('halloween');
    generateTable('bloodlust');
    generateTable('horizon');

    // Restaurer l'onglet actif de la dernière visite
    const validTabs = ['standard', 'summer', 'halloween', 'bloodlust', 'horizon'];
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab && validTabs.includes(savedTab)) {
        switchTab(savedTab);
    }

    console.log('Standard fish count:', fishData.standard.length);
    console.log('Summer fish count:', fishData.summer.length);
    console.log('Halloween fish count:', fishData.halloween.length);
    console.log('Bloodlust fish count:', fishData.bloodlust.length);
    console.log('Horizon fish count:', fishData.horizon.length);
});