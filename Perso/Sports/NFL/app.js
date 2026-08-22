const teams = [
  // AFC East
  { id: "buf", name: "Buffalo Bills", conf: "AFC", div: "East", city: "Orchard Park, NY", slug: "buffalo-bills" },
  { id: "mia", name: "Miami Dolphins", conf: "AFC", div: "East", city: "Miami Gardens, FL", slug: "miami-dolphins" },
  { id: "ne",  name: "New England Patriots", conf: "AFC", div: "East", city: "Foxborough, MA", slug: "new-england-patriots" },
  { id: "nyj", name: "New York Jets", conf: "AFC", div: "East", city: "East Rutherford, NJ", slug: "new-york-jets" },

  // AFC North
  { id: "bal", name: "Baltimore Ravens", conf: "AFC", div: "North", city: "Baltimore, MD", slug: "baltimore-ravens" },
  { id: "cin", name: "Cincinnati Bengals", conf: "AFC", div: "North", city: "Cincinnati, OH", slug: "cincinnati-bengals" },
  { id: "cle", name: "Cleveland Browns", conf: "AFC", div: "North", city: "Cleveland, OH", slug: "cleveland-browns" },
  { id: "pit", name: "Pittsburgh Steelers", conf: "AFC", div: "North", city: "Pittsburgh, PA", slug: "pittsburgh-steelers" },

  // AFC South
  { id: "hou", name: "Houston Texans", conf: "AFC", div: "South", city: "Houston, TX", slug: "houston-texans" },
  { id: "ind", name: "Indianapolis Colts", conf: "AFC", div: "South", city: "Indianapolis, IN", slug: "indianapolis-colts" },
  { id: "jax", name: "Jacksonville Jaguars", conf: "AFC", div: "South", city: "Jacksonville, FL", slug: "jacksonville-jaguars" },
  { id: "ten", name: "Tennessee Titans", conf: "AFC", div: "South", city: "Nashville, TN", slug: "tennessee-titans" },

  // AFC West
  { id: "den", name: "Denver Broncos", conf: "AFC", div: "West", city: "Denver, CO", slug: "denver-broncos" },
  { id: "kc",  name: "Kansas City Chiefs", conf: "AFC", div: "West", city: "Kansas City, MO", slug: "kansas-city-chiefs" },
  { id: "lv",  name: "Las Vegas Raiders", conf: "AFC", div: "West", city: "Paradise, NV", slug: "las-vegas-raiders" },
  { id: "lac", name: "Los Angeles Chargers", conf: "AFC", div: "West", city: "Inglewood, CA", slug: "los-angeles-chargers" },

  // NFC East
  { id: "dal", name: "Dallas Cowboys", conf: "NFC", div: "East", city: "Arlington, TX", slug: "dallas-cowboys" },
  { id: "nyg", name: "New York Giants", conf: "NFC", div: "East", city: "East Rutherford, NJ", slug: "new-york-giants" },
  { id: "phi", name: "Philadelphia Eagles", conf: "NFC", div: "East", city: "Philadelphie, PA", slug: "philadelphia-eagles" },
  { id: "wsh", name: "Washington Commanders", conf: "NFC", div: "East", city: "Landover, MD", slug: "washington-commanders" },

  // NFC North
  { id: "chi", name: "Chicago Bears", conf: "NFC", div: "North", city: "Chicago, IL", slug: "chicago-bears" },
  { id: "det", name: "Detroit Lions", conf: "NFC", div: "North", city: "Détroit, MI", slug: "detroit-lions" },
  { id: "gb",  name: "Green Bay Packers", conf: "NFC", div: "North", city: "Green Bay, WI", slug: "green-bay-packers" },
  { id: "min", name: "Minnesota Vikings", conf: "NFC", div: "North", city: "Minneapolis, MN", slug: "minnesota-vikings" },

  // NFC South
  { id: "atl", name: "Atlanta Falcons", conf: "NFC", div: "South", city: "Atlanta, GA", slug: "atlanta-falcons" },
  { id: "car", name: "Carolina Panthers", conf: "NFC", div: "South", city: "Charlotte, NC", slug: "carolina-panthers" },
  { id: "no",  name: "New Orleans Saints", conf: "NFC", div: "South", city: "La Nouvelle-Orléans, LA", slug: "new-orleans-saints" },
  { id: "tb",  name: "Tampa Bay Buccaneers", conf: "NFC", div: "South", city: "Tampa, FL", slug: "tampa-bay-buccaneers" },

  // NFC West
  { id: "ari", name: "Arizona Cardinals", conf: "NFC", div: "West", city: "Glendale, AZ", slug: "arizona-cardinals" },
  { id: "lar", name: "Los Angeles Rams", conf: "NFC", div: "West", city: "Inglewood, CA", slug: "los-angeles-rams" },
  { id: "sf",  name: "San Francisco 49ers", conf: "NFC", div: "West", city: "Santa Clara, CA", slug: "san-francisco-49ers" },
  { id: "sea", name: "Seattle Seahawks", conf: "NFC", div: "West", city: "Seattle, WA", slug: "seattle-seahawks" }
];

function getLogoUrl(id) {
  return `https://a.espncdn.com/i/teamlogos/nfl/500/${id}.png`;
}

function renderTeams(filter = "") {
  const afcContainer = document.getElementById("afc-container");
  const nfcContainer = document.getElementById("nfc-container");
  
  afcContainer.innerHTML = "";
  nfcContainer.innerHTML = "";

  teams
    .filter(t => t.name.toLowerCase().includes(filter.toLowerCase()) || t.city.toLowerCase().includes(filter.toLowerCase()))
    .forEach(team => {
      const link = document.createElement("a");
      link.href = `teams/${team.slug}.html`;
      link.className = "card-link";

      const card = document.createElement("div");
      card.className = `card ${team.conf.toLowerCase()}`;
      card.innerHTML = `
        <img src="${getLogoUrl(team.id)}" alt="Logo ${team.name}" class="team-logo" loading="lazy">
        <h3>${team.name}</h3>
        <div class="division">${team.conf} ${team.div}</div>
        <div class="city">📍 ${team.city}</div>
      `;

      link.appendChild(card);

      if (team.conf === "AFC") {
        afcContainer.appendChild(link);
      } else {
        nfcContainer.appendChild(link);
      }
    });
}

document.getElementById("search").addEventListener("input", (e) => {
  renderTeams(e.target.value);
});

renderTeams();
