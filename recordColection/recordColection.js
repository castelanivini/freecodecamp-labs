const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  const validadores = {
    value: (value) => {
      return typeof value == "string" && value.trim().length > 0;
    },
    isTracks: (value) => value == "tracks",
    tracksExists: (obj) => Object.hasOwn(obj, "tracks"),
  };

  if (!validadores["value"](value)) delete records[id][prop];

  if (!validadores["isTracks"](prop) && validadores["value"](value))
    records[id][prop] = value;

  if (
    validadores["isTracks"](prop) &&
    validadores["value"](value) &&
    !validadores["tracksExists"](records[id])
  )
    records[id][prop] = [];

  if (validadores["isTracks"](prop) && validadores["value"](value))
    records[id][prop].push(value);

  return records;
}

console.log("------------------------------------");
console.log(updateRecords(recordCollection, 5439, "tracks", "ABBA"));
