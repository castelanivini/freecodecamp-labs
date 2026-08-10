const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

function runSequence(config, cycles) {
  const validators = {
    isFaltedTrue: (boolean) => typeof boolean == "boolean" && boolean,
    isPhasesValid: (phases) => phases.length > 0,
    isPhaseValid: (duration) => duration > 0,
  };
  const { phases, fault } = config;
  let cycleCounter = 0;
  while (cycleCounter < cycles) {
    if (validators["isFaltedTrue"](fault)) {
      console.log("Faulted phase!");
      return;
    }
    if (!validators["isPhasesValid"](phases)) {
      console.log("No phases found");
      return;
    }
    for (const { duration, color } of phases) {
      if (!validators["isPhaseValid"](duration)) {
        console.log("Invalid phase detected");
        continue;
      }
      console.log(`Switching to ${color} for ${duration} s`);
    }
    cycleCounter++;
  }
}

function generateTimeline(config, cycles) {
  const { phases } = config;
  let cycleCounter = 0;
  let acc = [];

  while (cycleCounter < cycles) {
    for (let i = 0; i < phases.length; i++) {
      const { duration } = phases[i];

      if (i == 0 && cycleCounter == 0) {
        acc.push(duration);
      } else {
        acc.push(duration + acc[acc.length - 1]);
      }
    }

    cycleCounter++;
  }

  return acc;
}

// generateTimeline(config2, 2);

let squad = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  {
    id: 3,
    name: "Caroline",
    role: "Engineer",
    isEVAEligible: true,
    priority: 4,
  },
  {
    id: 4,
    name: "Diego",
    role: "Scientist",
    isEVAEligible: false,
    priority: 1,
  },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  {
    id: 7,
    name: "Gertrude",
    role: "Communications",
    isEVAEligible: false,
    priority: 4,
  },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  {
    id: 9,
    name: "Irene",
    role: "Specialist",
    isEVAEligible: true,
    priority: 5,
  },
  {
    id: 10,
    name: "Joan",
    role: "Technician",
    isEVAEligible: false,
    priority: 1,
  },
];

function chunkCrew(crew, size) {
  const validators = {
    isChunkSizeValid: (size) => size >= 1,
  };

  if (!validators["isChunkSizeValid"](size)) {
    console.log("Chunk size must be >= 1");
    return;
  }

  let chunks = [];

  for (let i = 0; i < crew.length; i += size) {
    let chunk = crew.slice(i, i + size);
    console.log(chunk);
    chunks.push(chunk);
  }

  return chunks;
}

chunkCrew(squad, 3);

for (let i = 0; i < EVAChunks.length; i++) {
  for (let x = 0; EVAChunks[i].length; x++) {
    console.log(`Chunk ${i + 1}`);
  }
}
