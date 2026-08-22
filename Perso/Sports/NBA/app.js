const teams = [
  // Eastern Conference - Atlantic
  { id: "bos", name: "Boston Celtics", conf: "Eastern", div: "Atlantic", city: "Boston, MA", arena: "TD Garden", championships: "18 (dernier : 2024)", founder: "1946" },
  { id: "bkn", name: "Brooklyn Nets", conf: "Eastern", div: "Atlantic", city: "Brooklyn, NY", arena: "Barclays Center", championships: "0 (2 en ABA)", founder: "1967" },
  { id: "ny",  name: "New York Knicks", conf: "Eastern", div: "Atlantic", city: "New York, NY", arena: "Madison Square Garden", championships: "3 (1970, 1973, 2026)", founder: "1946" },
  { id: "phi", name: "Philadelphia 76ers", conf: "Eastern", div: "Atlantic", city: "Philadelphie, PA", arena: "Wells Fargo Center", championships: "3 (1955, 1967, 1983)", founder: "1946" },
  { id: "tor", name: "Toronto Raptors", conf: "Eastern", div: "Atlantic", city: "Toronto, ON", arena: "Scotiabank Arena", championships: "1 (2019)", founder: "1995" },

  // Eastern Conference - Central
  { id: "chi", name: "Chicago Bulls", conf: "Eastern", div: "Central", city: "Chicago, IL", arena: "United Center", championships: "6 (1991, 1992, 1993, 1996, 1997, 1998)", founder: "1966" },
  { id: "cle", name: "Cleveland Cavaliers", conf: "Eastern", div: "Central", city: "Cleveland, OH", arena: "Rocket Mortgage FieldHouse", championships: "1 (2016)", founder: "1970" },
  { id: "det", name: "Detroit Pistons", conf: "Eastern", div: "Central", city: "Détroit, MI", arena: "Little Caesars Arena", championships: "3 (1989, 1990, 2004)", founder: "1937" },
  { id: "ind", name: "Indiana Pacers", conf: "Eastern", div: "Central", city: "Indianapolis, IN", arena: "Gainbridge Fieldhouse", championships: "0 (3 en ABA)", founder: "1967" },
  { id: "mil", name: "Milwaukee Bucks", conf: "Eastern", div: "Central", city: "Milwaukee, WI", arena: "Fiserv Forum", championships: "2 (1971, 2021)", founder: "1968" },

  // Eastern Conference - Southeast
  { id: "atl", name: "Atlanta Hawks", conf: "Eastern", div: "Southeast", city: "Atlanta, GA", arena: "State Farm Arena", championships: "1 (1958)", founder: "1946" },
  { id: "cha", name: "Charlotte Hornets", conf: "Eastern", div: "Southeast", city: "Charlotte, NC", arena: "Spectrum Center", championships: "0", founder: "1988" },
  { id: "mia", name: "Miami Heat", conf: "Eastern", div: "Southeast", city: "Miami, FL", arena: "Kaseya Center", championships: "3 (2006, 2012, 2013)", founder: "1988" },
  { id: "orl", name: "Orlando Magic", conf: "Eastern", div: "Southeast", city: "Orlando, FL", arena: "Kia Center", championships: "0 (2 apparitions en Finale)", founder: "1989" },
  { id: "was", name: "Washington Wizards", conf: "Eastern", div: "Southeast", city: "Washington, D.C.", arena: "Capital One Arena", championships: "1 (1978)", founder: "1961" },

  // Western Conference - Northwest
  { id: "den", name: "Denver Nuggets", conf: "Western", div: "Northwest", city: "Denver, CO", arena: "Ball Arena", championships: "1 (2023)", founder: "1967" },
  { id: "min", name: "Minnesota Timberwolves", conf: "Western", div: "Northwest", city: "Minneapolis, MN", arena: "Target Center", championships: "0", founder: "1989" },
  { id: "okc", name: "Oklahoma City Thunder", conf: "Western", div: "Northwest", city: "Oklahoma City, OK", arena: "Paycom Center", championships: "2 (1979 - SuperSonics, 2025)", founder: "1967" },
  { id: "por", name: "Portland Trail Blazers", conf: "Western", div: "Northwest", city: "Portland, OR", arena: "Moda Center", championships: "1 (1977)", founder: "1970" },
  { id: "uta", name: "Utah Jazz", conf: "Western", div: "Northwest", city: "Salt Lake City, UT", arena: "Delta Center", championships: "0 (2 apparitions en Finale)", founder: "1974" },

  // Western Conference - Pacific
  { id: "gs",  name: "Golden State Warriors", conf: "Western", div: "Pacific", city: "San Francisco, CA", arena: "Chase Center", championships: "7 (1947, 1956, 1975, 2015, 2017, 2018, 2022)", founder: "1946" },
  { id: "lac", name: "LA Clippers", conf: "Western", div: "Pacific", city: "Inglewood, CA", arena: "Intuit Dome", championships: "0", founder: "1970" },
  { id: "lal", name: "Los Angeles Lakers", conf: "Western", div: "Pacific", city: "Los Angeles, CA", arena: "Crypto.com Arena", championships: "17 (dernier : 2020)", founder: "1947" },
  { id: "phx", name: "Phoenix Suns", conf: "Western", div: "Pacific", city: "Phoenix, AZ", arena: "Footprint Center", championships: "0 (3 apparitions en Finale)", founder: "1968" },
  { id: "sac", name: "Sacramento Kings", conf: "Western", div: "Pacific", city: "Sacramento, CA", arena: "Golden 1 Center", championships: "1 (1951)", founder: "1923" },

  // Western Conference - Southwest
  { id: "dal", name: "Dallas Mavericks", conf: "Western", div: "Southwest", city: "Dallas, TX", arena: "American Airlines Center", championships: "1 (2011)", founder: "1980" },
  { id: "hou", name: "Houston Rockets", conf: "Western", div: "Southwest", city: "Houston, TX", arena: "Toyota Center", championships: "2 (1994, 1995)", founder: "1967" },
  { id: "mem", name: "Memphis Grizzlies", conf: "Western", div: "Southwest", city: "Memphis, TN", arena: "FedExForum", championships: "0", founder: "1995" },
  { id: "no",  name: "New Orleans Pelicans", conf: "Western", div: "Southwest", city: "La Nouvelle-Orléans, LA", arena: "Smoothie King Center", championships: "0", founder: "2002" },
  { id: "sas", name: "San Antonio Spurs", conf: "Western", div: "Southwest", city: "San Antonio, TX", arena: "Frost Bank Center", championships: "5 (1999, 2003, 2005, 2007, 2014)", founder: "1967" }
];

function getLogoUrl(id) {
  return `https://a.espncdn.com/i/teamlogos/nba/500/${id}.png`;
}

// Logique de la page d'accueil (index.html)
if (document.getElementById("east-container")) {
  function renderTeams(filter = "") {
    const eastContainer = document.getElementById("east-container");
    const westContainer = document.getElementById("west-container");
    
    eastContainer.innerHTML = "";
    westContainer.innerHTML = "";

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
          <div class="division">${team.conf} - ${team.div}</div>
          <div class="city">📍 ${team.city}</div>
        `;

        link.appendChild(card);

        if (team.conf === "Eastern") {
          eastContainer.appendChild(link);
        } else {
          westContainer.appendChild(link);
        }
      });
  }

  document.getElementById("search").addEventListener("input", (e) => {
    renderTeams(e.target.value);
  });

  renderTeams();
}

// Logique de la page d'équipe unique (team.html)
if (document.getElementById("team-details")) {
  const urlParams = new URLSearchParams(window.location.search);
  const teamId = urlParams.get("id");
  const team = teams.find(t => t.id === teamId);

  const container = document.getElementById("team-details");

  if (team) {
    document.title = `${team.name} - NBA Hub`;
    container.innerHTML = `
      <div class="team-header">
        <img src="${getLogoUrl(team.id)}" alt="Logo ${team.name}">
        <div>
          <h1>${team.name}</h1>
          <p class="division">${team.conf} Conference - Division ${team.div}</p>
          <p>📍 ${team.city}</p>
        </div>
      </div>
      <section>
        <h2>Fiche de la Franchise</h2>
        <ul>
          <li><strong>Salle :</strong> ${team.arena}</li>
          <li><strong>Année de création :</strong> ${team.founder}</li>
          <li><strong>Titres NBA :</strong> 🏆 ${team.championships}</li>
        </ul>
      </section>
    `;
  } else {
    container.innerHTML = "<h2>Équipe non trouvée.</h2>";
  }
}
