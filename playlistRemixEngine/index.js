const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow 1",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk1021",
      artist: "Velvet Comet",
      title: "Crimson Afterglow 2",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk1031",
      artist: "Velvet Comet",
      title: "Crimson Afterglow 3",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(playlists) {
  let arr = [];
  let validadores = {
    isArray: (arr) => Array.isArray(playlists),
  };

  if (!validadores["isArray"](playlists)) return [];

  for (let [i, playlist] of playlists.entries()) {
    let temp = [...playlist];
    for (let [j, track] of playlist.entries()) {
      track["source"] = [i, j];
    }

    arr.push(...temp);
  }

  return arr;
}

function scoreTracks(tracks) {
  for (let track of tracks) {
    let { votes, bpm } = track;
    track["score"] = votes * 10 - Math.abs(bpm - 120);
  }

  return tracks;
}

function dedupeTracks(tracks) {
  let arr = [];

  for (let track of tracks) {
    let isRepeated = false;
    for (let temp of arr) {
      if (track.trackId == temp.trackId) {
        isRepeated = true;
        break;
      }
    }
    if (!isRepeated) arr.push(track);
  }
  return arr;
}

function enforceArtistQuota(tracks, maxPerArtist) {
  let arr = [];
  for (let track of tracks) {
    let artistCount = 0;

    for (let temp of arr) {
      if (track.artist === temp.artist) artistCount++;
      if (artistCount === maxPerArtist) break;
    }
    if (artistCount < maxPerArtist) {
      arr.push(track);
    } else {
      continue;
    }
  }

  return arr;
}

function buildSchedule(tracks) {
  let arr = [];
  for (let [index, track] of tracks.entries()) {
    const { trackId } = track;
    arr.push({ slot: index + 1, trackId });
  }
  return arr;
}

function remixPlaylist(playlists, maxPerArtist) {
  return buildSchedule(
    enforceArtistQuota(
      dedupeTracks(scoreTracks(flattenPlaylists(playlists))),
      maxPerArtist,
    ),
  );
}

console.log(remixPlaylist(playlists, 2));
