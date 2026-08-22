const teams = [
  // AFC East
  { id: "buf", name: "Buffalo Bills", conf: "AFC", div: "East", city: "Orchard Park, NY", stadium: "Highmark Stadium", sb: "0 (4 apparitions)", founder: "1960" },
  { id: "mia", name: "Miami Dolphins", conf: "AFC", div: "East", city: "Miami Gardens, FL", stadium: "Hard Rock Stadium", sb: "II (1972, 1973)", founder: "1966" },
  { id: "ne",  name: "New England Patriots", conf: "AFC", div: "East", city: "Foxborough, MA", stadium: "Gillette Stadium", sb: "VI (2001, 2003, 2004, 2014, 2016, 2018)", founder: "1959" },
  { id: "nyj", name: "New York Jets", conf: "AFC", div: "East", city: "East Rutherford, NJ", stadium: "MetLife Stadium", sb: "I (1968)", founder: "1959" },

  // AFC North
  { id: "bal", name: "Baltimore Ravens", conf: "AFC", div: "North", city: "Baltimore, MD", stadium: "M&T Bank Stadium", sb: "II (2000, 2012)", founder: "1996" },
  { id: "cin", name: "Cincinnati Bengals", conf: "AFC", div: "North", city: "Cincinnati, OH", stadium: "Paycor Stadium", sb: "0 (3 apparitions)", founder: "1967" },
  { id: "cle", name: "Cleveland Browns", conf: "AFC", div: "North", city: "Cleveland, OH", stadium: "Huntington Bank Field", sb: "0 (4 titres pré-Super Bowl)", founder: "1944" },
  { id: "pit", name: "Pittsburgh Steelers", conf: "AFC", div: "North", city: "Pittsburgh, PA", stadium: "Acrisure Stadium", sb: "VI (1974, 1975, 1978, 1979, 2005, 2008)", founder: "1933" },

  // AFC South
  { id: "hou", name: "Houston Texans", conf: "AFC", div: "South", city: "Houston, TX", stadium: "NRG Stadium", sb: "0", founder: "2002" },
  { id: "ind", name: "Indianapolis Colts", conf: "AFC", div: "South", city: "Indianapolis, IN", stadium: "Lucas Oil Stadium", sb: "II (1970, 2006)", founder: "1953" },
  { id: "jax", name: "Jacksonville Jaguars", conf: "AFC", div: "South", city: "Jacksonville, FL", stadium: "EverBank Stadium", sb: "0", founder: "1995" },
  { id: "ten", name: "Tennessee Titans", conf: "AFC", div: "South", city: "Nashville, TN", stadium: "Nissan Stadium", sb: "0 (1 apparition)", founder: "1960" },

  // AFC West
  { id: "den", name: "Denver Broncos", conf: "AFC", div: "West", city: "Denver, CO", stadium: "Empower Field at Mile High", sb: "III (1997, 1998, 2015)", founder: "1960" },
  { id: "kc",  name: "Kansas City Chiefs", conf: "AFC", div: "West", city: "Kansas City, MO", stadium: "GEHA Field at Arrowhead Stadium", sb: "IV (1969, 2019, 2022, 2023)", founder: "1960" },
  { id: "lv",  name: "Las Vegas Raiders", conf: "AFC", div: "West", city: "Paradise, NV", stadium: "Allegiant Stadium", sb: "III (1976, 1980, 1983)", founder: "1960" },
  { id: "lac", name: "Los Angeles Chargers", conf: "AFC", div: "West", city: "Inglewood, CA", stadium: "SoFi Stadium", sb: "0 (1 apparition)", founder: "1960" },

  // NFC East
  { id: "dal", name: "Dallas Cowboys", conf: "NFC", div: "East", city: "Arlington, TX", stadium: "AT&T Stadium", sb: "V (1971, 1977, 1992, 1993, 1995)", founder: "1960" },
  { id: "nyg", name: "New York Giants", conf: "NFC", div: "East", city: "East Rutherford, NJ", stadium: "MetLife Stadium", sb: "IV (1986, 1990, 2007, 2011)", founder: "1925" },
  { id: "phi", name: "Philadelphia Eagles", conf: "NFC", div: "East", city: "Philadelphie, PA", stadium: "Lincoln Financial Field", sb: "I (2017)", founder: "1933" },
  { id: "wsh", name: "Washington Commanders", conf: "NFC", div: "East", city: "Landover, MD", stadium: "Northwest Stadium", sb: "III (1982, 1987, 1991)", founder: "1932" },

  // NFC North
  { id: "chi", name: "Chicago Bears", conf: "NFC", div: "North", city: "Chicago, IL", stadium: "Soldier Field", sb: "I (1985)", founder: "1920" },
  { id: "det", name: "Detroit Lions", conf: "NFC", div: "North", city: "Détroit, MI", stadium: "Ford Field", sb: "0 (4 titres pré-Super Bowl)", founder: "1930" },
  { id: "gb",  name: "Green Bay Packers", conf: "NFC", div: "North", city: "Green Bay, WI", stadium: "Lambeau Field", sb: "IV (1966, 1967, 1996, 2010)", founder: "1919" },
  { id: "min", name: "Minnesota Vikings", conf: "NFC", div: "North", city: "Minneapolis, MN", stadium: "U.S. Bank Stadium", sb: "0 (4 apparitions)", founder: "1961" },

  // NFC South
  { id: "atl", name: "Atlanta Falcons", conf: "NFC", div: "South", city: "Atlanta, GA", stadium: "Mercedes-Benz Stadium", sb: "0 (2 apparitions)", founder: "1965" },
  { id: "car", name: "Carolina Panthers", conf: "NFC", div: "South", city: "Charlotte, NC", stadium: "Bank of America Stadium", sb: "0 (2 apparitions)", founder: "1993" },
  { id: "no",  name: "New Orleans Saints", conf: "NFC", div: "South", city: "La Nouvelle-Orléans, LA", stadium: "Caesars Superdome", sb: "I (2009)", founder: "1967" },
  { id: "tb",  name: "Tampa Bay Buccaneers", conf: "NFC", div: "South", city: "Tampa, FL", stadium: "Raymond James Stadium", sb: "II (2002, 2020)", founder: "1976" },

  // NFC West
  { id: "ari", name: "Arizona Cardinals", conf: "NFC", div: "West", city: "Glendale, AZ", stadium: "State Farm Stadium", sb: "0 (1 apparition)", founder: "1898" },
  { id: "lar", name: "Los Angeles Rams", conf: "NFC", div: "West", city: "Inglewood, CA", stadium: "SoFi Stadium", sb: "II (1999, 2021)", founder: "1936" },
  { id: "sf",  name: "San Francisco 49ers", conf: "NFC", div: "West", city: "Santa Clara, CA", stadium: "Levi's Stadium", sb: "V (1981, 1984, 1988, 1989, 1994)", founder: "1946" },
  { id: "sea", name: "Seattle Seahawks", conf: "NFC", div: "West", city: "Seattle, WA", stadium: "Lumen Field", sb: "I (2013)", founder: "1976" }
];

function getLogoUrl(id) {
  return `https://a.espncdn.com/i/teamlogos/nfl/500/${id}.png`;
}

// Logique pour la page d'accueil (index.html)
if (document.getElementById("afc-container")) {
  function renderTeams(filter = "") {
    const afcContainer = document.getElementById("afc-container");
    const nfcContainer = document.getElementById("nfc-container");
    
    afcContainer.innerHTML = "";
    nfcContainer.innerHTML = "";

    teams
      .filter(t => t.name.toLowerCase().includes(filter.toLowerCase()) || t.city.toLowerCase().includes(filter.toLowerCase()))
      .forEach(team => {
        const link = document.createElement("a");
        link.href = `team.html?id=${team.id}`;
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
}

// Logique pour la page unique dynamique (team.html)
if (document.getElementById("team-details")) {
  const urlParams = new URLSearchParams(window.location.search);
  const teamId = urlParams.get("id");
  const team = teams.find(t => t.id === teamId);

  const container = document.getElementById("team-details");

  if (team) {
    document.title = `${team.name} - NFL Zone`;
    container.innerHTML = `
      <div class="team-header">
        <img src="${getLogoUrl(team.id)}" alt="Logo ${team.name}">
        <div>
          <h1>${team.name}</h1>
          <p class="division">${team.conf} ${team.div}</p>
          <p>📍 ${team.city}</p>
        </div>
      </div>
      <section>
        <h2>Informations de la Franchise</h2>
        <ul>
          <li><strong>Stade :</strong> ${team.stadium}</li>
          <li><strong>Création :</strong> ${team.founder}</li>
          <li><strong>Super Bowls :</strong> 🏆 ${team.sb}</li>
        </ul>
      </section>
    `;
  } else {
    container.innerHTML = "<h2>Équipe non trouvée.</h2>";
  }
}
