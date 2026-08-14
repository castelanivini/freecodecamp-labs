const footballTeam = {
  team: "Santos FC",
  year: 2026,
  headCoach: "Cuca",
  players: [
    {
      name: "Gabriel Brazão",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Gabriel Menino",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Willian Arão",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Luan Peres",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Escobar",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "João Schmidt",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Christian Oliva",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Gabriel Bontempo",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Barreal",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Neymar",
      position: "forward",
      isCaptain: true,
    },
    {
      name: "Gabigol",
      position: "forward",
      isCaptain: false,
    },
  ],
};
const { team, year, headCoach, players } = footballTeam;

const teamStatsSelector = document.querySelectorAll(".team-stats span");
[team, year, headCoach].forEach((attr, i) => {
  teamStatsSelector[i].textContent = attr;
});

const playerCardsSelector = document.querySelector("#player-cards");
const optionsSelector = document.querySelector("#players");

optionsSelector.addEventListener("change", (event) => {
  const val = event.target.value;
  playerCardsSelector.innerHTML = "";
  setPlayersHTML(val, players);
});

function setPlayersHTML(val, arr) {
  const temp = val === "all" ? arr : arr.filter((p) => p.position === val);

  playerCardsSelector.innerHTML = temp
    .map(
      ({ name, position, isCaptain }) => `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
          <p>Position: ${position}</p>
        </div>
      `,
    )
    .join("");
}
setPlayersHTML("all", players);
