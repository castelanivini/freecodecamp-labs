const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

let compactedShuffledFragments = compactFragments(shuffledFragments);
let sortedFragments = sortFragments(compactedShuffledFragments);
let dedupedFragments = dedupeFragments(sortedFragments);
let filledFragments = fillMissingFragments(dedupedFragments);
console.log(assembleStory(filledFragments));
function compactFragments(fragments) {
  let arr = [];
  for (let [i, frag] of fragments.entries()) {
    if (frag == undefined) {
      console.log("[COMPACTED] - ", i);
      continue;
    }
    arr.push(frag);
  }
  return arr;
}

function sortFragments(fragments) {
  let arr = fragments.slice();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const Ifrag = arr[i];
      const Jfrag = arr[j];
      if (Ifrag.id === Jfrag.id) continue;
      if (Ifrag.id > Jfrag.id) {
        arr[i] = Jfrag;
        arr[j] = Ifrag;
      }
    }
  }
  return arr;
}

function dedupeFragments(fragments) {
  let arr = [];

  for (let fragment of fragments) {
    const last = arr[arr.length - 1];

    if (!last || last.id !== fragment.id) {
      arr.push(fragment);
    } else {
      console.log("[DEDUPED]");
    }
  }

  return arr;
}

function fillMissingFragments(fragments) {
  let result = [];

  for (let i = 0; i < fragments.length; i++) {
    const current = fragments[i];
    result.push(current);
    const next = fragments[i + 1];
    if (!next) continue;

    if (next.id - current.id > 1) {
      for (let missingId = current.id + 1; missingId < next.id; missingId++) {
        result.push({
          id: missingId,
          text: "[...]",
        });

        console.log(`[FILLED] Missing fragment ${missingId}`);
      }
    }
  }

  return result;
}

function assembleStory(fragments) {
  return fragments.map((frag) => frag.text).join("\n");
}
