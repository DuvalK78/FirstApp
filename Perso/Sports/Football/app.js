const container = document.getElementById("teams-container");
const search = document.getElementById("search");

let teams = [];

async function loadTeams() {

    const response = await fetch("teams.json");

    teams = await response.json();

    displayTeams(teams);
}

function displayTeams(list) {

    container.innerHTML = "";

    list.forEach(team => {

        container.innerHTML += `
        
        <div class="team-card">

            <img src="${team.flag}" alt="${team.name}">

            <div class="team-content">

                <h3>${team.name}</h3>

                <p>Capitale : ${team.capital}</p>

                <p>Groupe : ${team.group}</p>

                <p>Coupes du Monde : ${team.titles}</p>

            </div>

        </div>

        `;
    });
}

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filtered = teams.filter(team =>
        team.name.toLowerCase().includes(value)
    );

    displayTeams(filtered);
});

loadTeams();

const targetDate = new Date("2026-06-11T00:00:00");

function updateCountdown() {

    const now = new Date();

    const diff = targetDate - now;

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    document.getElementById("countdown").innerHTML =
        `${days} jours avant le coup d'envoi`;
}

setInterval(updateCountdown, 1000);

updateCountdown();
