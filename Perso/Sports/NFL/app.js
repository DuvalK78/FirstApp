const teams = [
  // AFC East
  { name: "Buffalo Bills", conf: "AFC", div: "East", city: "Orchard Park, NY" },
  { name: "Miami Dolphins", conf: "AFC", div: "East", city: "Miami Gardens, FL" },
  { name: "New England Patriots", conf: "AFC", div: "East", city: "Foxborough, MA" },
  { name: "New York Jets", conf: "AFC", div: "East", city: "East Rutherford, NJ" },
  // AFC North
  { name: "Baltimore Ravens", conf: "AFC", div: "North", city: "Baltimore, MD" },
  { name: "Cincinnati Bengals", conf: "AFC", div: "North", city: "Cincinnati, OH" },
  { name: "Cleveland Browns", conf: "AFC", div: "North", city: "Cleveland, OH" },
  { name: "Pittsburgh Steelers", conf: "AFC", div: "North", city: "Pittsburgh, PA" },
  // AFC South
  { name: "Houston Texans", conf: "AFC", div: "South", city: "Houston, TX" },
  { name: "Indianapolis Colts", conf: "AFC", div: "South", city: "Indianapolis, IN" },
  { name: "Jacksonville Jaguars", conf: "AFC", div: "South", city: "Jacksonville, FL" },
  { name: "Tennessee Titans", conf: "AFC", div: "South", city: "Nashville, TN" },
  // AFC West
  { name: "Denver Broncos", conf: "AFC", div: "West", city: "Denver, CO" },
  { name: "Kansas City Chiefs", conf: "AFC", div: "West", city: "Kansas City, MO" },
  { name: "Las Vegas Raiders", conf: "AFC", div: "West", city: "Paradise, NV" },
  { name: "Los Angeles Chargers", conf: "AFC", div: "West", city: "Inglewood, CA" },

  // NFC East
  { name: "Dallas Cowboys", conf: "NFC", div: "East", city: "Arlington, TX" },
  { name: "New York Giants", conf: "NFC", div: "East", city: "East Rutherford, NJ" },
  { name: "Philadelphia Eagles", conf: "NFC", div: "East", city: "Philadelphie, PA" },
  { name: "Washington Commanders", conf: "NFC", div: "East", city: "Landover, MD" },
  // NFC North
  { name: "Chicago Bears", conf: "NFC", div: "North", city: "Chicago, IL" },
  { name: "Detroit Lions", conf: "NFC", div: "North", city: "Détroit, MI" },
  { name: "Green Bay Packers", conf: "NFC", div: "North", city: "Green Bay, WI" },
  { name: "Minnesota Vikings", conf: "NFC", div: "North", city: "Minneapolis, MN" },
  // NFC South
  { name: "Atlanta Falcons", conf: "NFC", div: "South", city: "Atlanta, GA" },
  { name: "Carolina Panthers", conf: "NFC", div: "South", city: "Charlotte, NC" },
  { name: "New Orleans Saints", conf: "NFC", div: "South", city: "La Nouvelle-Orléans, LA" },
  { name: "Tampa Bay Buccaneers", conf: "NFC", div: "South", city: "Tampa, FL" },
  // NFC West
  { name: "Arizona Cardinals", conf: "NFC", div: "West", city: "Glendale, AZ" },
  { name: "Los Angeles Rams", conf: "NFC", div: "West", city: "Inglewood, CA" },
  { name: "San Francisco 49ers", conf: "NFC", div: "West", city: "Santa Clara, CA" },
  { name: "Seattle Seahawks", conf: "NFC", div: "West", city: "Seattle, WA" }
];

function renderTeams(filter = "") {
  const afcContainer = document.getElementById("afc-container");
  const nfcContainer = document.getElementById("nfc-container");
  
  afcContainer.innerHTML = "";
  nfcContainer.innerHTML = "";

  teams
    .filter(t => t.name.toLowerCase().includes(filter.toLowerCase()) || t.city.toLowerCase().includes(filter.toLowerCase()))
    .forEach(team => {
      const card = document.createElement("div");
      card.className = `card ${team.conf.toLowerCase()}`;
      card.innerHTML = `
        <h3>${team.name}</h3>
        <div class="division">${team.conf} ${team.div}</div>
        <p>📍 ${team.city}</p>
      `;

      if (team.conf === "AFC") {
        afcContainer.appendChild(card);
      } else {
        nfcContainer.appendChild(card);
      }
    });
}

document.getElementById("search").addEventListener("input", (e) => {
  renderTeams(e.target.value);
});

renderTeams();
