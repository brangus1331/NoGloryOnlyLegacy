/* ===============================
   FIGHTER DATA (BASE ROSTER)
=============================== */

let baseFighters = [

    // HEAVYWEIGHTS — FULL OPTION‑B PEAK‑ERA ELO
    { name: "Muhammad Ali", elo: 2050, weightClass: "Heavyweight" },
    { name: "Daniel Dubois", elo: 1620, weightClass: "Heavyweight" },
    { name: "George Foreman", elo: 1850, weightClass: "Heavyweight" },
    { name: "Joe Frazier", elo: 1820, weightClass: "Heavyweight" },
    { name: "Lennox Lewis", elo: 1930, weightClass: "Heavyweight" },
    { name: "Oleksandr Usyk", elo: 1870, weightClass: "Heavyweight" },
    { name: "Francis Ngannou", elo: 1600, weightClass: "Heavyweight" },
    { name: "Vitalii Klitschko", elo: 1780, weightClass: "Heavyweight" },
    { name: "Wladimir Klitschko", elo: 1800, weightClass: "Heavyweight" },
    { name: "Zhilei Zhang", elo: 1750, weightClass: "Heavyweight" },
    { name: "Evander Holyfield", elo: 1900, weightClass: "Heavyweight" },
    { name: "Sonny Liston", elo: 1800, weightClass: "Heavyweight" },
    { name: "Andy Ruiz", elo: 1650, weightClass: "Heavyweight" },
    { name: "Jack Johnson", elo: 1770, weightClass: "Heavyweight" },
    { name: "Rocky Marciano", elo: 1980, weightClass: "Heavyweight" },
    { name: "Joe Louis", elo: 2000, weightClass: "Heavyweight" },
    { name: "Jack Dempsey", elo: 1760, weightClass: "Heavyweight" },
    { name: "Floyd Patterson", elo: 1700, weightClass: "Heavyweight" },
    { name: "Adonis Creed", elo: 1780, weightClass: "Heavyweight" },
    { name: "Deontay Wilder", elo: 1820, weightClass: "Heavyweight" },
    { name: "Anthony Joshua", elo: 1780, weightClass: "Heavyweight" },
    { name: "Kobe Nichols", elo: 1450, weightClass: "Heavyweight" },
    { name: "James Toney", elo: 1700, weightClass: "Heavyweight" },
    { name: "Jai Opetaia", elo: 1680, weightClass: "Heavyweight" },
    { name: "Reggie Stewart", elo: 1450, weightClass: "Heavyweight" },
    { name: "Dwight Cooper", elo: 1450, weightClass: "Heavyweight" },
    { name: "Moses Itauma", elo: 1650, weightClass: "Heavyweight" },
    { name: "Tyson Fury", elo: 1880, weightClass: "Heavyweight" },
    { name: "Mike Tyson", elo: 1950, weightClass: "Heavyweight" },

    // LIGHTWEIGHTS — FULL OPTION‑B PEAK‑ERA ELO
    { name: "Junto Nakatani", elo: 1650, weightClass: "Lightweight" },
    { name: "Naoya Inoue", elo: 1900, weightClass: "Lightweight" },
    { name: "Jesse Rodriguez", elo: 1680, weightClass: "Lightweight" },
    { name: "Yuriorkis Gamboa", elo: 1620, weightClass: "Lightweight" },
    { name: "Shakur Stevenson", elo: 1780, weightClass: "Lightweight" },
    { name: "Lamont Roach Jr", elo: 1600, weightClass: "Lightweight" },
    { name: "Devin Haney", elo: 1750, weightClass: "Lightweight" },
    { name: "Gervonta Davis", elo: 1800, weightClass: "Lightweight" },
    { name: "Ryan Garcia", elo: 1700, weightClass: "Lightweight" },
    { name: "Teofimo Lopez", elo: 1750, weightClass: "Lightweight" },
    { name: "Vasiliy Lomachenko", elo: 1850, weightClass: "Lightweight" },
    { name: "Zab Judah", elo: 1650, weightClass: "Lightweight" },
    { name: "Conor Benn", elo: 1650, weightClass: "Lightweight" },
    { name: "Shane Mosley", elo: 1780, weightClass: "Lightweight" },
    { name: "Ricky Hatton", elo: 1750, weightClass: "Lightweight" },
    { name: "Roberto Duran", elo: 1950, weightClass: "Lightweight" },
    { name: "Ray Leonard", elo: 1980, weightClass: "Lightweight" },
    { name: "Manny Pacquiao", elo: 2000, weightClass: "Lightweight" },
    { name: "Floyd Mayweather Jr", elo: 2050, weightClass: "Lightweight" },
    { name: "Errol Spence Jr", elo: 1850, weightClass: "Lightweight" },
    { name: "Jaron Ennis", elo: 1800, weightClass: "Lightweight" },
    { name: "Ricardo Alvarez", elo: 1600, weightClass: "Lightweight" },
    { name: "Conor McGregor", elo: 1500, weightClass: "Lightweight" },

    // MIDDLEWEIGHTS — FULL OPTION‑B PEAK‑ERA ELO
    { name: "Julio Cesar Chavez", elo: 1830, weightClass: "Middleweight" },
    { name: "Miguel Cotto", elo: 1780, weightClass: "Middleweight" },
    { name: "Oscar De La Hoya", elo: 1760, weightClass: "Middleweight" },
    { name: "Thomas Hearns", elo: 1850, weightClass: "Middleweight" },
    { name: "Bernard Hopkins", elo: 1950, weightClass: "Middleweight" },
    { name: "Roy Jones Jr", elo: 1980, weightClass: "Middleweight" },
    { name: "Erislandy Lara", elo: 1750, weightClass: "Middleweight" },
    { name: "Canelo Alvarez", elo: 1880, weightClass: "Middleweight" },
    { name: "Danny Jacobs", elo: 1720, weightClass: "Middleweight" },
    { name: "Ronald Wright", elo: 1680, weightClass: "Middleweight" },
    { name: "Gennadiy Golovkin", elo: 1900, weightClass: "Middleweight" },
    { name: "Janibek Alimkhanuly", elo: 1700, weightClass: "Middleweight" },
    { name: "Jermain Taylor", elo: 1700, weightClass: "Middleweight" },
    { name: "Marvin Hagler", elo: 2000, weightClass: "Middleweight" },
    { name: "Peter Manfredo Jr", elo: 1620, weightClass: "Middleweight" },
    { name: "Sebastian Fundora", elo: 1650, weightClass: "Middleweight" },
    { name: "Vergil Ortiz Jr", elo: 1680, weightClass: "Middleweight" },
    { name: "Jake Paul", elo: 1600, weightClass: "Middleweight" },
    { name: "Mike Walker", elo: 1450, weightClass: "Middleweight" },
    { name: "Lucius Palmer", elo: 1450, weightClass: "Middleweight" },
    { name: "Keyshawn Hayes", elo: 1450, weightClass: "Middleweight" },
    { name: "Ray Robinson", elo: 2100, weightClass: "Middleweight" }
];

/* ===============================
   SORT BY LAST NAME (MUST BE HERE)
=============================== */

function sortByLastName(fighters) {
    return fighters.sort((a, b) => {
        const lastA = a.name.split(" ").slice(-1)[0].toLowerCase();
        const lastB = b.name.split(" ").slice(-1)[0].toLowerCase();
        return lastA.localeCompare(lastB);
    });
}

/* ===============================
   INITIALIZE FIGHTERS ARRAY
=============================== */

let fighters = baseFighters.map((f, i) => ({
    id: i + 1,
    name: f.name,
    wins: 0,
    losses: 0,
    draws: 0,
    elo: f.elo,
    img: `temp/${f.name.toLowerCase().replace(/ /g, "_")}.png`,
    weightClass: f.weightClass
}));

/* ===============================
   AUTO‑GENERATED SORTED LISTS
=============================== */

const heavyweights = sortByLastName(
    baseFighters.filter(f => f.weightClass === "Heavyweight")
);

const middleweights = sortByLastName(
    baseFighters.filter(f => f.weightClass === "Middleweight")
);

const lightweights = sortByLastName(
    baseFighters.filter(f => f.weightClass === "Lightweight")
);

/* ===============================
   POPULATE FIGHTER PROFILES DROPDOWN
=============================== */

function populateFighterProfiles() {
    const select = document.getElementById("fighter-select");

    const sorted = sortByLastName(fighters);

    select.innerHTML = "";

    sorted.forEach(f => {
        const opt = document.createElement("option");
        opt.value = f.id;
        opt.textContent = f.name;
        select.appendChild(opt);
    });
}

// Call it once on page load
populateFighterProfiles();

/* ===============================
   POPULATE FIGHT CARD DROPDOWNS
=============================== */

function populateFightDropdown(selectElement, weightClass) {
    let list;

    if (weightClass === "Heavyweight") list = heavyweights;
    else if (weightClass === "Middleweight") list = middleweights;
    else if (weightClass === "Lightweight") list = lightweights;
    else list = sortByLastName(fighters); // fallback

    selectElement.innerHTML = "";

    list.forEach(f => {
        const opt = document.createElement("option");
        opt.value = f.id;
        opt.textContent = f.name;
        select.appendChild(opt);
    });
}



/* ===============================
   MERGE SAVED FIGHTERS
=============================== */

function mergeSavedFighters(savedList) {
    savedList.forEach(sf => {
        const exists = fighters.find(f => f.id === sf.id);
        if (!exists) {
            fighters.push(sf);
        }
    });
}

/* ===============================
   HISTORY + BELTS
=============================== */

let history = [];
let belts = {
    Heavyweight: { championId: null, history: [] },
    Middleweight: { championId: null, history: [] },
    Lightweight: { championId: null, history: [] }
    
};

let currentTab = "profile";


/* ===============================
   GET FIGHTER BY ID
=============================== */

function getF(id) {
    return fighters.find(f => f.id === id) || null;
}

/* ===============================
   LOAD / SAVE SYSTEM
=============================== */

function loadUniverseFromLocal() {
    const raw = localStorage.getItem("universeSave");
    if (!raw) return;

    try {
        const data = JSON.parse(raw);

        if (data.fighters) {
            data.fighters.forEach(saved => {
                const f = getF(saved.id);
                if (f) {
                    f.wins = saved.wins ?? 0;
                    f.losses = saved.losses ?? 0;
                    f.draws = saved.draws ?? 0;
                    f.elo = saved.elo ?? f.elo;
                    if (saved.img) f.img = saved.img;
                    f.weightClass = saved.weightClass || f.weightClass;
                }
            });

            mergeSavedFighters(data.fighters);
        }

        history = data.history || [];
        belts = data.belts || belts;
        fightCard = data.fightCard || [];


    } catch (e) {
        console.error("Failed to load universe:", e);
    }
}

function saveUniverseToLocal() {
    const data = {
        fighters,
        history,
        belts,
        fightCard   // ⭐ ADD THIS
    };
    localStorage.setItem("universeSave", JSON.stringify(data));
}



// ===============================
// UI ELEMENTS
// ===============================
const fighterSelect = document.getElementById("fighter-select");
const fighterProfile = document.getElementById("fighter-profile");
const rankingsTable = document.getElementById("rankings-table").querySelector("tbody");
const historyList = document.getElementById("history-list");

// ===============================
// FIGHTER PROFILE
// ===============================
function populateFighterSelect() {
    fighterSelect.innerHTML = "";
    fighters.forEach(f => {
        const opt = document.createElement("option");
        opt.value = f.id;
        opt.textContent = f.name;
        fighterSelect.appendChild(opt);
    });
}

function renderFighterProfile(id) {
    const f = getF(Number(id));
    if (!f) return;

    const divisionBelt = belts[f.weightClass];

    fighterProfile.innerHTML = `
        <div class="fighter-card">
            <img src="${f.img}" alt="${f.name}" class="fighter-photo">
            <h2>${f.name} ${divisionBelt.championId === f.id ? "🏆" : ""}</h2>
            <button onclick="openEditRecord(${f.id})" style="margin-top:10px;">Edit Record</button>
            <button onclick="openDeleteFighter(${f.id})" style="margin-top:10px;background:#900;">Delete Fighter</button>



            <p><strong>Record:</strong> ${f.wins}-${f.losses}-${f.draws}</p>
            <p><strong>Rating:</strong> ${f.elo}</p>
            <p><strong>Weight Class:</strong> ${f.weightClass}</p>
            <p><strong>Champion:</strong> ${divisionBelt.championId === f.id ? "Yes" : "No"}</p>
        </div>

        <h3>Fight History</h3>
        <div class="fighter-history">
            ${renderIndividualHistory(f.id)}
        </div>
    `;

    // METHODS OF VICTORY — WIN/LOSS SPLIT, ONLY SHOW ACTUAL RESULTS
    const methods = getMethodBreakdown(f.id);

    // Build winning methods inline
    let winHTML = "";
    if (methods.wins.KO > 0) winHTML += `<span><strong>KO:</strong> ${methods.wins.KO}</span> `;
    if (methods.wins.TKO > 0) winHTML += `<span><strong>TKO:</strong> ${methods.wins.TKO}</span> `;
    if (methods.wins.Decision > 0) winHTML += `<span><strong>Decision:</strong> ${methods.wins.Decision}</span> `;
    if (methods.wins["Split Decision"] > 0) winHTML += `<span><strong>Split Dec:</strong> ${methods.wins["Split Decision"]}</span> `;
    if (methods.wins["Majority Decision"] > 0) winHTML += `<span><strong>Majority Dec:</strong> ${methods.wins["Majority Decision"]}</span> `;

    // Build losing methods inline
    let lossHTML = "";
    if (methods.losses.KO > 0) lossHTML += `<span><strong>KO:</strong> ${methods.losses.KO}</span> `;
    if (methods.losses.TKO > 0) lossHTML += `<span><strong>TKO:</strong> ${methods.losses.TKO}</span> `;
    if (methods.losses.Decision > 0) lossHTML += `<span><strong>Decision:</strong> ${methods.losses.Decision}</span> `;
    if (methods.losses["Split Decision"] > 0) lossHTML += `<span><strong>Split Dec:</strong> ${methods.losses["Split Decision"]}</span> `;
    if (methods.losses["Majority Decision"] > 0) lossHTML += `<span><strong>Majority Dec:</strong> ${methods.losses["Majority Decision"]}</span> `;

    // Draws / NC
    let miscHTML = "";
    if (methods.Draw > 0) miscHTML += `<span><strong>Draws:</strong> ${methods.Draw}</span> `;
    if (methods["No Contest"] > 0) miscHTML += `<span><strong>NC:</strong> ${methods["No Contest"]}</span> `;

    // Build final HTML block
    let finalHTML = "";
    if (winHTML) finalHTML += `<p><strong>Wins by:</strong> ${winHTML}</p>`;
    if (lossHTML) finalHTML += `<p><strong>Losses by:</strong> ${lossHTML}</p>`;
    if (miscHTML) finalHTML += `<p>${miscHTML}</p>`;

    // Insert under Record
    fighterProfile.innerHTML = fighterProfile.innerHTML.replace(
        `<p><strong>Record:</strong> ${f.wins}-${f.losses}-${f.draws}</p>`,
        `<p><strong>Record:</strong> ${f.wins}-${f.losses}-${f.draws}</p>
         ${finalHTML}`
    );
}

function renderIndividualHistory(id) {
    const fights = history.filter(h => h.f1 === id || h.f2 === id);

    if (fights.length === 0) return "<p>No fights yet.</p>";

    return fights.map(f => {
        const opp = f.f1 === id ? getF(f.f2) : getF(f.f1);
        if (!opp) return "";

        return `
            <p>
                ${f.date} — vs ${opp.name}
                ${f.titleFight ? "<strong>🏆 TITLE FIGHT</strong>" : ""}
                ${f.vacant ? "<span style='color:gold;'> (Vacant Title)</span>" : ""}
                ${f.newChampion ? "<span style='color:gold;'> — NEW CHAMPION 🏆</span>" : ""}
                ${f.titleDefense ? "<span style='color:green;'> — Title Defense 🛡️</span>" : ""}
                — ${f.result} (${f.method}, R${f.round})
            </p>
        `;
    }).join("");
}

// ===============================
// RANKINGS (P4P + DIVISION)
// ===============================
let currentRankingDivision = "P4P";

function setRankingDivision(div) {
    currentRankingDivision = div;
    renderRankings();
}

function renderRankings() {
    let list = [];

    if (currentRankingDivision === "P4P") {
        // Pound-for-pound = ALL fighters sorted by ELO
        list = [...fighters].sort((a, b) => b.elo - a.elo);
    } else {
        // Weight-class rankings
        list = fighters
            .filter(f => f.weightClass === currentRankingDivision)
            .sort((a, b) => b.elo - a.elo);
    }

    const tbody = document.querySelector("#rankings-table tbody");
    tbody.innerHTML = "";

    list.forEach((f, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${f.name}</td>
            <td>${f.wins}</td>
            <td>${f.losses}</td>
            <td>${f.draws}</td>
            <td>${f.elo}</td>
        `;
        tbody.appendChild(row);
    });

    updateChampionBanner();
}
/* ===============================
   DELETE FIGHTER MODAL
=============================== */

let deletingFighterId = null;

function openDeleteFighter(id) {
    deletingFighterId = id;
    const f = getF(id);
    if (!f) return;

    document.getElementById("deleteFighterName").textContent =
        `Are you sure you want to delete ${f.name}?`;

    document.getElementById("deleteFighterModal").style.display = "flex";
}

function closeDeleteFighter() {
    document.getElementById("deleteFighterModal").style.display = "none";
}

function confirmDeleteFighter() {
    const id = deletingFighterId;
    if (!id) return;

    // Remove fighter from fighters[]
    fighters = fighters.filter(f => f.id !== id);

    // Remove from fight cards
    fightCard = fightCard.filter(f => f.f1 !== id && f.f2 !== id);

    // Remove from history
    history = history.filter(h => h.f1 !== id && h.f2 !== id);

    // Remove from belts
    Object.keys(belts).forEach(div => {
        if (belts[div].championId === id) {
            belts[div].championId = null;
        }
    });

    saveUniverseToLocal();
    populateFighterSelect();
    renderRankings();
    renderHistory();

    // If deleted fighter was currently viewed, switch to first fighter
    if (fighterSelect.value == id) {
        renderFighterProfile(fighters[0]?.id || "");
    }

    closeDeleteFighter();
}



function getMethodBreakdown(fighterId) {
    const result = {
        wins: {
            KO: 0,
            TKO: 0,
            Decision: 0,
            "Split Decision": 0,
            "Majority Decision": 0
        },
        losses: {
            KO: 0,
            TKO: 0,
            Decision: 0,
            "Split Decision": 0,
            "Majority Decision": 0
        },
        Draw: 0,
        "No Contest": 0
    };

    history.forEach(h => {
        const isF1 = h.f1 === fighterId;
        const isF2 = h.f2 === fighterId;
        if (!isF1 && !isF2) return;

        // Draw / NC
        if (h.result === "Draw") {
            result.Draw++;
            return;
        }
        if (h.result === "No Contest") {
            result["No Contest"]++;
            return;
        }

        const fighterWon = h.result === getF(fighterId).name;
        const method = h.method;

        if (fighterWon) {
            if (result.wins[method] !== undefined) {
                result.wins[method]++;
            }
        } else {
            if (result.losses[method] !== undefined) {
                result.losses[method]++;
            }
        }
    });

    return result;
}

// ===============================
// HISTORY
// ===============================
function renderHistory() {
    if (history.length === 0) {
        historyList.innerHTML = "<p>No fights recorded yet.</p>";
        return;
    }

    historyList.innerHTML = history.map((h, i) => {
        const f1 = getF(h.f1);
        const f2 = getF(h.f2);
        if (!f1 || !f2) return "";

        return `
    <p>
        ${h.date} — ${f1.name} vs ${f2.name}
        ${h.titleFight ? "<strong>🏆 TITLE FIGHT</strong>" : ""}
        ${h.vacant ? "<span style='color:gold;'> (Vacant Title)</span>" : ""}
        ${h.newChampion ? "<span style='color:gold;'> — NEW CHAMPION 🏆</span>" : ""}
        ${h.titleDefense ? "<span style='color:green;'> — Title Defense 🛡️</span>" : ""}
        — ${h.result} (${h.method}, R${h.round})
        <button onclick="deleteHistoryFight(${i})" style="background:#900;margin-left:10px;">Delete</button>
    </p>
`;
    }).join("");
}

/* ===============================
   VIEW SWITCHING — NEW SYSTEM
=============================== */

function showView(viewId) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

    // Show the selected view
    const view = document.getElementById(viewId);
    if (view) {
        view.classList.add('active');
    }

    // Update active button highlight
    document.querySelectorAll('#topNav .nav-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`#topNav .nav-btn[onclick="showView('${viewId}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Render correct content
    if (viewId === "rankings-view") renderRankings();
    if (viewId === "history-view") renderHistory();
    if (viewId === "fighters-view") renderFighterProfile(fighterSelect.value);
    if (viewId === "fightcard-view") renderFightCard();
}

// ===============================
// INIT
// ===============================
loadUniverseFromLocal();
populateFighterSelect();
fighterSelect.addEventListener("change", () => {
    renderFighterProfile(fighterSelect.value);
});
renderFighterProfile(fighters[0].id);
renderRankings();
renderHistory();
updateChampionBanner();
// ===============================
// FIGHT CARD SYSTEM (ADVANCED)
// ===============================
let fightCard = [];
let editingIndex = null;

// ===============================
// OPEN ADD FIGHT MODAL
// ===============================
function addFightToCard() {
    if (fightCard.length >= 15) return alert("Max 15 fights.");
    document.getElementById("addFightModal").style.display = "flex";

    // ===============================
    // POPULATE DROPDOWNS WHEN MODAL OPENS
    // ===============================

    const weightSelect = document.getElementById("addFightWeightClass");
    const fighterASelect = document.getElementById("addFightFighterA");
    const fighterBSelect = document.getElementById("addFightFighterB");

    // Get selected division
    const selectedDivision = weightSelect.value;

    // Populate both fighter dropdowns alphabetically
    populateFightDropdown(fighterASelect, selectedDivision);
    populateFightDropdown(fighterBSelect, selectedDivision);
}

// ===============================
// FILTER FIGHTERS BY WEIGHT CLASS
// ===============================
function updateFightDropdowns() {
    const wc = document.getElementById("fightWeightClass").value;

    const list = fighters.filter(f => f.weightClass === wc);

    const f1 = document.getElementById("fighter1");
    const f2 = document.getElementById("fighter2");

    f1.innerHTML = "";
    f2.innerHTML = "";

    list.forEach(f => {
        let opt1 = document.createElement("option");
        opt1.value = f.id;
        opt1.textContent = f.name;

        let opt2 = document.createElement("option");
        opt2.value = f.id;
        opt2.textContent = f.name;

        f1.appendChild(opt1);
        f2.appendChild(opt2);
    });
}

// ===============================
// CONFIRM ADD FIGHT
// ===============================
function confirmAddFight() {
    const wc = document.getElementById("fightWeightClass").value;
    if (!wc) return alert("Select a weight class first.");

    const f1 = parseInt(document.getElementById("fighter1").value);
    const f2 = parseInt(document.getElementById("fighter2").value);

    if (!f1 || !f2) return alert("Select both fighters.");
    if (f1 === f2) return alert("A fighter cannot fight himself.");

    fightCard.push({
        f1,
        f2,
        winner: null,
        method: "Decision",
        round: 1,
        titleFight: false
    });

    closeAddFightModal();
    renderFightCard();
}

// ===============================
// CLOSE ADD FIGHT MODAL
// ===============================
function closeAddFightModal() {
    document.getElementById("addFightModal").style.display = "none";
}

// ===============================
// SORT BY COMBINED ELO
// ===============================
function sortCardByCombinedElo() {
    fightCard.sort((a, b) => {
        const f1a = getF(a.f1).elo;
        const f2a = getF(a.f2).elo;
        const f1b = getF(b.f1).elo;
        const f2b = getF(b.f2).elo;

        const totalA = f1a + f2a;
        const totalB = f1b + f2b;

        return totalB - totalA; // highest → lowest
    });
}

// ===============================
// RENDER CARD (ALWAYS SORT FIRST)
// ===============================
function renderFightCard() {
    // ⭐ ALWAYS SORT BEFORE DISPLAYING
    sortCardByCombinedElo();

    const cont = document.getElementById("cardContainer");
    if (!cont) return;
    cont.innerHTML = "";

    fightCard.forEach((fight, i) => {
        const f1 = getF(fight.f1);
        const f2 = getF(fight.f2);
        if (!f1 || !f2) {
            console.warn("Invalid fightCard entry skipped:", fight);
            return;
        }

        const label =
            i === 0 ? "MAIN EVENT" :
            i === 1 ? "CO-MAIN EVENT" :
            `FIGHT ${i + 1}`;

        cont.innerHTML += `
            <div style="border:1px solid #660000;padding:10px;margin-bottom:10px;">
                <h3>${label}${fight.titleFight ? " — TITLE FIGHT" : ""}</h3>
                <p>${f1.name} (${f1.elo}) vs ${f2.name} (${f2.elo})</p>

                <button onclick="openEditFight(${i})">Edit</button>
                <button onclick="deleteFight(${i})" style="background:#400;">Delete</button>
                <button onclick="openPoster(${i})" style="background:#444;">Poster</button>
            </div>
        `;
    });
}

// ===============================
// DELETE FIGHT
// ===============================
function deleteFight(i) {
    fightCard.splice(i, 1);
    renderFightCard();
}
/* ===============================
   CLEAR CARD
=============================== */
function clearCard() {
    fightCard = [];
    saveUniverseToLocal();
    renderFightCard();
}


// ===============================
// RANDOM CARD (5 PER CLASS)
// ===============================
function generateRandomCard() {
    fightCard = [];

    const groups = {
        Heavyweight: fighters.filter(f => f.weightClass === "Heavyweight"),
        Middleweight: fighters.filter(f => f.weightClass === "Middleweight"),
        Lightweight: fighters.filter(f => f.weightClass === "Lightweight")
    };

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    ["Heavyweight", "Middleweight", "Lightweight"].forEach(div => {
        let pool = shuffle([...groups[div]]);
        let count = 0;

        while (pool.length >= 2 && count < 5) {
            const f1 = pool.pop();
            const f2 = pool.pop();

            fightCard.push({
                f1: f1.id,
                f2: f2.id,
                winner: null,
                method: "Decision",
                round: 1,
                titleFight: false
            });

            count++;
        }
    });

    renderFightCard();
}

// ===============================
// DIVISION CARD (HW / MW / LW)
// ===============================
function generateDivisionCard(div) {
    fightCard = [];

    const pool = [...fighters.filter(f => f.weightClass === div)];

    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Create up to 15 fights
    while (pool.length >= 2 && fightCard.length < 15) {
        const f1 = pool.pop();
        const f2 = pool.pop();

        fightCard.push({
            f1: f1.id,
            f2: f2.id,
            winner: null,
            method: "Decision",
            round: 1,
            titleFight: false
        });
    }

    renderFightCard();
}

function generateHeavyweightCard() {
    generateDivisionCard("Heavyweight");
}

function generateMiddleweightCard() {
    generateDivisionCard("Middleweight");
}

function generateLightweightCard() {
    generateDivisionCard("Lightweight");
}

// ===============================
// MIXED CARD (5 PER CLASS)
// ===============================
function generateMixedCard() {
    fightCard = [];

    const groups = {
        Heavyweight: fighters.filter(f => f.weightClass === "Heavyweight"),
        Middleweight: fighters.filter(f => f.weightClass === "Middleweight"),
        Lightweight: fighters.filter(f => f.weightClass === "Lightweight")
    };

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    ["Heavyweight", "Middleweight", "Lightweight"].forEach(div => {
        let pool = shuffle([...groups[div]]);
        let count = 0;

        while (pool.length >= 2 && count < 5) {
            const f1 = pool.pop();
            const f2 = pool.pop();

            fightCard.push({
                f1: f1.id,
                f2: f2.id,
                winner: null,
                method: "Decision",
                round: 1,
                titleFight: false
            });

            count++;
        }
    });

    // Mix divisions
    fightCard = shuffle(fightCard);

    renderFightCard();
}


// ===============================
// EDIT FIGHT (MODAL)
// ===============================
function openEditFight(i) {
    editingIndex = i;
    const fight = fightCard[i];
    if (!fight) return;

    const f1Obj = getF(fight.f1);
    const f2Obj = getF(fight.f2);
    if (!f1Obj || !f2Obj) return;

    const div = document.getElementById("editFightContent");
    if (!div) return;

    div.innerHTML = `
        <label>Fighter 1:</label>
        <select id="editF1">
            ${fighters.map(f => `
                <option value="${f.id}" ${f.id === fight.f1 ? "selected" : ""}>${f.name}</option>
            `).join("")}
        </select>

        <br><br>

        <label>Fighter 2:</label>
        <select id="editF2">
            ${fighters.map(f => `
                <option value="${f.id}" ${f.id === fight.f2 ? "selected" : ""}>${f.name}</option>
            `).join("")}
        </select>

        <br><br>

        <label>Winner:</label>
        <select id="editWinner"></select>

        <br><br>

        <label>Method:</label>
        <select id="editMethod">
            ${["KO","TKO","Submission","Decision","Split Decision","Majority Decision","Draw","No Contest"]
                .map(m => `<option value="${m}" ${fight.method === m ? "selected" : ""}>${m}</option>`)
                .join("")}
        </select>

        <br><br>

        <label>Round:</label>
        <select id="editRound">
            ${[1,2,3,4,5,6,7,8,9,10,11,12]
                .map(r => `<option value="${r}" ${fight.round === r ? "selected" : ""}>${r}</option>`)
                .join("")}
        </select>

        <br><br>

        <label>Title Fight:</label>
        <input type="checkbox" id="editTitle" ${fight.titleFight ? "checked" : ""}>
    `;

    const editF1 = document.getElementById("editF1");
    const editF2 = document.getElementById("editF2");
    const editWinner = document.getElementById("editWinner");

    function refreshWinnerOptions() {
        const f1Id = Number(editF1.value);
        const f2Id = Number(editF2.value);
        const f1 = getF(f1Id);
        const f2 = getF(f2Id);
        const current = editWinner.value || fight.winner;

        editWinner.innerHTML = `
            <option value="${f1Id}" ${current == f1Id ? "selected" : ""}>${f1 ? f1.name : "Fighter 1"}</option>
            <option value="${f2Id}" ${current == f2Id ? "selected" : ""}>${f2 ? f2.name : "Fighter 2"}</option>
            <option value="draw" ${current === "draw" ? "selected" : ""}>Draw</option>
            <option value="nc" ${current === "nc" ? "selected" : ""}>No Contest</option>
        `;
    }

    refreshWinnerOptions();

    editF1.addEventListener("change", refreshWinnerOptions);
    editF2.addEventListener("change", refreshWinnerOptions);

    document.getElementById("editFightModal").style.display = "flex";
}

function closeEditFight() {
    document.getElementById("editFightModal").style.display = "none";
}

// ===============================
// SAVE EDITED FIGHT
// ===============================
function saveEditedFight() {
    const f1 = Number(document.getElementById("editF1").value);
    const f2 = Number(document.getElementById("editF2").value);
    const winner = document.getElementById("editWinner").value;
    const method = document.getElementById("editMethod").value;
    const round = Number(document.getElementById("editRound").value);
    const title = document.getElementById("editTitle").checked;

    if (f1 === f2) return alert("A fighter cannot fight himself.");

    fightCard[editingIndex] = { f1, f2, winner, method, round, titleFight: title };

    const f1Obj = getF(f1);
    const division = f1Obj ? f1Obj.weightClass : "Heavyweight";
    const prevChamp = belts[division].championId;

    if (title) {
        if (!prevChamp) {
            fightCard[editingIndex].vacant = true;
        }

        if (winner !== "draw" && winner !== "nc" && Number(winner) !== prevChamp) {
            fightCard[editingIndex].newChampion = true;
            belts[division].championId = Number(winner);
        }

        if (winner !== "draw" && winner !== "nc" && Number(winner) === prevChamp) {
            fightCard[editingIndex].titleDefense = true;
        }
    }

    saveUniverseToLocal();
    closeEditFight();
    renderFightCard();
    updateChampionBanner();
}
/* ===============================
   EDIT RECORD MODAL
=============================== */

let editingRecordId = null;

function openEditRecord(id) {
    const f = getF(id);
    if (!f) return;

    editingRecordId = id;

    document.getElementById("editWins").value = f.wins;
    document.getElementById("editLosses").value = f.losses;
    document.getElementById("editDraws").value = f.draws;
    document.getElementById("editElo").value = f.elo;

    document.getElementById("editRecordModal").style.display = "flex";
}

function closeEditRecord() {
    document.getElementById("editRecordModal").style.display = "none";
}

function saveEditedRecord() {
    const f = getF(editingRecordId);
    if (!f) return;

    f.wins = parseInt(document.getElementById("editWins").value);
    f.losses = parseInt(document.getElementById("editLosses").value);
    f.draws = parseInt(document.getElementById("editDraws").value);
    f.elo = parseInt(document.getElementById("editElo").value);

    saveUniverseToLocal();

    closeEditRecord();

    renderFighterProfile(f.id);
    renderRankings();
}
/* ===============================
   ADD NEW FIGHTER MODAL
=============================== */

function openAddFighter() {
    document.getElementById("addFighterModal").style.display = "flex";
}

function closeAddFighter() {
    document.getElementById("addFighterModal").style.display = "none";
}

function saveNewFighter() {
    const name = document.getElementById("newFighterName").value.trim();
    const weight = document.getElementById("newFighterWeight").value;
    const elo = parseInt(document.getElementById("newFighterElo").value);

    if (!name) return alert("Name required.");

    // Auto-generate clean filename from fighter name
    let cleanName = name
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")   // remove punctuation
        .replace(/\s+/g, "_");        // collapse spaces → underscore

    const img = `${cleanName}.png`;   // auto-append .png

    const newId = fighters.length + 1;

    const newFighter = {
        id: newId,
        name,
        wins: 0,
        losses: 0,
        draws: 0,
        elo,
        img: `temp/${img}`,
        weightClass: weight
    };

    // ===============================
    // ADD TO BOTH ARRAYS
    // ===============================
    baseFighters.push(newFighter);
    fighters.push(newFighter);

    // ===============================
    // REBUILD & RESORT DIVISION LISTS
    // ===============================
    heavyweights.length = 0;
    middleweights.length = 0;
    lightweights.length = 0;

    baseFighters.forEach(f => {
        if (f.weightClass === "Heavyweight") heavyweights.push(f);
        if (f.weightClass === "Middleweight") middleweights.push(f);
        if (f.weightClass === "Lightweight") lightweights.push(f);
    });

    sortByLastName(heavyweights);
    sortByLastName(middleweights);
    sortByLastName(lightweights);
    sortByLastName(fighters);

    // ===============================
    // UPDATE ALL UI DROPDOWNS
    // ===============================

    // Fighter Profiles dropdown (this one alphabetizes correctly)
    populateFighterProfiles();

    // Your original dropdown function — NOW FORCED TO USE SORTED LIST
    populateFighterSelect(sortByLastName(fighters));

    renderRankings();
    renderFighterProfile(newId);

    saveUniverseToLocal();
    closeAddFighter();
}

let editingWeightClassId = null;
function populateFighterSelect() {
    const select = document.getElementById("fighter-select");

    const sorted = sortByLastName(fighters);

    select.innerHTML = "";

    sorted.forEach(f => {
        const opt = document.createElement("option");
        opt.value = f.id;
        opt.textContent = f.name;
        select.appendChild(opt);
    });
}




/* ===============================
   OPEN EDIT WEIGHT CLASS MODAL
=============================== */
function openEditWeightClass() {
    const id = fighterSelect.value;
    const f = fighters.find(x => x.id == id);
    if (!f) return;

    editingWeightClassId = id;

    document.getElementById("editWeightClassSelect").value = f.weightClass;
    document.getElementById("editWeightClassModal").style.display = "flex";
}


function closeEditWeightClass() {
    document.getElementById("editWeightClassModal").style.display = "none";
}

/* ===============================
   SAVE EDITED WEIGHT CLASS
=============================== */
function saveEditedWeightClass() {
    const f = fighters.find(x => x.id == editingWeightClassId);
    if (!f) return;

    const newClass = document.getElementById("editWeightClassSelect").value;

    f.weightClass = newClass;   // ⭐ THIS NOW UPDATES THE REAL ROSTER

    saveUniverseToLocal();
    renderRankings();
    renderFighterProfile(editingWeightClassId);

    closeEditWeightClass();

    alert("Weight class updated.");
}



// ===============================
// POSTER MODAL
// ===============================
function openPoster(i) {
    const fight = fightCard[i];
    if (!fight) return;

    const f1 = getF(fight.f1);
    const f2 = getF(fight.f2);
    if (!f1 || !f2) return;

    document.getElementById("posterInner").innerHTML = `
        <h2>${f1.name} vs ${f2.name}</h2>
        <p>${fight.titleFight ? "TITLE FIGHT" : ""}</p>
        <img src="${f1.img}" style="width:150px;border:2px solid #660000;margin:10px;">
        <img src="${f2.img}" style="width:150px;border:2px solid #660000;margin:10px;">
    `;

    document.getElementById("posterModal").style.display = "flex";
}

function closePoster() {
    document.getElementById("posterModal").style.display = "none";
}

// ===============================
// SIMULATE CARD (MANUAL OUTCOMES)
// ===============================
function simulateCard() {
    if (fightCard.length === 0) return alert("No fights to simulate.");

    let resultsHTML = "";

    fightCard.forEach(fight => {
        const f1 = getF(fight.f1);
        const f2 = getF(fight.f2);
        if (!f1 || !f2) return;

        let winner;
        let loser;
        let eloDeltaWinner = 0;
        let eloDeltaLoser = 0;

        if (fight.winner === "draw") {
            winner = "draw";
            loser = null;
            f1.draws++;
            f2.draws++;
        } else if (fight.winner === "nc") {
            winner = "nc";
            loser = null;
        } else {
            winner = getF(Number(fight.winner));
            if (!winner) return;
            loser = winner.id === f1.id ? f2 : f1;

            winner.wins++;
            loser.losses++;

            const prob = 1 / (1 + Math.pow(10, (loser.elo - winner.elo) / 400));
            const K = 32;
            const delta = Math.round(K * (1 - prob));

            eloDeltaWinner = delta;
            eloDeltaLoser = delta;

            winner.elo += delta;
            loser.elo -= delta;
        }

        // Division-aware belt logic
        const division = f1.weightClass;
        let vacant = false;
        let newChampion = false;
        let titleDefense = false;

        if (fight.titleFight && winner !== "draw" && winner !== "nc") {
            const prevChamp = belts[division].championId;

            // Vacant title fight
            if (!prevChamp) {
                vacant = true;
            }

            // New champion
            if (winner.id !== prevChamp) {
                newChampion = true;
                belts[division].championId = winner.id;
            }

            // Successful defense
            if (winner.id === prevChamp) {
                titleDefense = true;
            }
        }

        // Push fight to history
        history.push({
            f1: f1.id,
            f2: f2.id,
            result: winner === "draw" ? "Draw" : (winner === "nc" ? "No Contest" : winner.name),
            method: fight.method,
            round: fight.round,
            date: new Date().toLocaleDateString(),
            titleFight: fight.titleFight || false,
            vacant,
            newChampion,
            titleDefense,
            eloDeltaWinner,
            eloDeltaLoser,
            division
        });

        resultsHTML += `
            <p>${f1.name} vs ${f2.name} — ${
                winner === "draw"
                    ? "Draw"
                    : winner === "nc"
                        ? "No Contest"
                        : `Winner: ${winner.name}`
            } (${fight.method}, R${fight.round})</p>
        `;
    });

    saveUniverseToLocal();
    renderRankings();
    renderHistory();
    updateChampionBanner();

    document.getElementById("cardResults").innerHTML = resultsHTML;
}

function deleteHistoryFight(index) {
    const h = history[index];
    if (!h) return;

    if (!confirm("Delete this fight AND undo all stats?")) return;

    const f1 = getF(h.f1);
    const f2 = getF(h.f2);
    if (!f1 || !f2) return;

    if (h.result === "Draw") {
        f1.draws = Math.max(0, f1.draws - 1);
        f2.draws = Math.max(0, f2.draws - 1);
    } else if (h.result !== "No Contest") {
        const winner = fighters.find(f => f.name === h.result);
        if (winner) {
            const loser = winner.id === f1.id ? f2 : f1;

            winner.wins = Math.max(0, winner.wins - 1);
            loser.losses = Math.max(0, loser.losses - 1);

            if (typeof h.eloDeltaWinner === "number" && typeof h.eloDeltaLoser === "number") {
                winner.elo -= h.eloDeltaWinner;
                loser.elo += h.eloDeltaLoser;
            }
        }
    }

    history.splice(index, 1);

    renderRankings();
    renderHistory();
    updateChampionBanner();
    saveUniverseToLocal();
}

// ===============================
// CHAMPION BANNER
// ===============================
function updateChampionBanner() {
    const banner = document.getElementById("championBanner");

    if (currentRankingDivision === "P4P") {
        banner.innerHTML = `<h2>Pound-for-Pound Rankings</h2>`;
        return;
    }

    const key = currentRankingDivision.toLowerCase();
    const belt = belts[key];

    if (!belt) {
        banner.innerHTML = `<h2>${currentRankingDivision} Champion: None</h2>`;
        return;
    }

    const champ = fighters.find(f => f.id === belt.championId);

    banner.innerHTML = `
        <h2>${currentRankingDivision} Champion: ${champ ? champ.name : "None"}</h2>
    `;
}



// ===============================
// CLEAR HISTORY & RESET UNIVERSE
// ===============================
function clearHistory() {
    history = [];
    fighters.forEach(f => {
        f.wins = 0;
        f.losses = 0;
        f.draws = 0;
    
    });
    belts.Heavyweight.championId = null;
    belts.Heavyweight.history = [];
    belts.Middleweight.championId = null;
    belts.Middleweight.history = [];
    belts.Lightweight.championId = null;
    belts.Lightweight.history = [];
    fightCard = [];

    saveUniverseToLocal();
    renderRankings();
    renderHistory();
    updateChampionBanner();
    renderFightCard();
}

setTimeout(() => {
  const intro = document.getElementById("siteIntro");
  if (intro) intro.remove();
}, 1300);
// ===============================
// GENERATE CARD BY DIVISION
// ===============================
function generateDivisionCard(division) {
    fightCard = [];

    // Get fighters in this division
    const pool = fighters.filter(f => f.weightClass === division);

    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Pair fighters
    while (pool.length >= 2 && fightCard.length < 15) {
        const f1 = pool.pop();
        const f2 = pool.pop();

        fightCard.push({
            f1: f1.id,
            f2: f2.id,
            winner: f1.id,
            method: "Decision",
            round: 1,
            titleFight: false
        });
    }

    renderFightCard();
}
/* ===============================
   RESTORE ORIGINAL ELO
=============================== */
function restoreOriginalElo() {
    fighters.forEach(f => {
        const base = baseFighters.find(b => b.name === f.name);
        if (base) {
            f.elo = base.elo;   // ⭐ Restore original predetermined ELO
        }
    });

    saveUniverseToLocal();
    renderRankings();
    renderFighterProfile(fighterSelect.value);

    alert("Original ELO values restored.");
}


// ===============================
// LOAD BUTTON + FILE PICKER
// ===============================
document.getElementById("loadBtn").addEventListener("click", () => {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            localStorage.setItem("universeSave", JSON.stringify(data));
            location.reload();
        } catch (err) {
            alert("Invalid save file.");
            console.error(err);
        }
    };
    reader.readAsText(file);
});
