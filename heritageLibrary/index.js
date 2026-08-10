let rawCatalogCards = [
  "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
  "The Shining | King, Stephen | 1977 | Shelf K1",
  "The Stand | King, Stephen | 1978 | Shelf K2",
  "It | King, Stephen | 1986 | Shelf K3",
  "Misery | King, Stephen | 1987 | Shelf K4",
  "Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5",
  "I, Robot | Asimov, Isaac | 1950 | Shelf A8",
  "Foundation | Asimov, Isaac | 1951 | Shelf A9",
  "Dune | Herbert, Frank | 1965 | Shelf H3",
  "Neuromancer | Gibson, William | 1984 | Shelf G8",
  "Snow Crash | Stephenson, Neal | 1992 | Shelf S6",
  "The Martian | Weir, Andy | 2011 | Shelf W5",
  "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
  "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
  "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
  "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",
  // edge cases: missing data
  "Unknown Title |  | 1975 | Shelf X1",
  "Mysterious Manuscript | Unknown Author |  | Shelf Z9",
  "Ancient Scroll | Anonymous | 850 | ",
];

function parseCard(rawString) {
  let parts = rawString.split("|");
  let trimmedParts = [];

  for (let x = 0; x < parts.length; x++) {
    trimmedParts.push(parts[x].trim());
  }

  const [title, author, year, location] = trimmedParts;

  return {
    title: title || "Unknown",
    author: author || "Unknown",
    year: year ? parseInt(year) : "Unknown",
    location: location || "Unknown",
  };
}

function parseCatalog(rawCards) {
  const catalog = [];
  for (let card of rawCards) {
    catalog.push(parseCard(card));
  }
  return catalog;
}

// console.log(parseCatalog(rawCatalogCards));

function groupByDecade(catalog) {
  const grouped = {};
  for (let i = 0; i < catalog.length; i++) {
    const book = catalog[i];
    if (book.year === "Unknown") {
      if (!Object.hasOwn(grouped, "Unknown")) {
        grouped["Unknown"] = [];
      } else {
        grouped["Unknown"].push(book);
      }
      continue;
    }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    } else {
      grouped[decadeKey].push(book);
    }
  }
  return grouped;
}

function renderEntry(entry) {
  let title = entry.title || "Unknown";
  let author = entry.author || "Unknown";
  let year = entry.year || "Unknown";
  let location = entry.location || "Unknown";
  return `
    ${"-".repeat(25)}
    Title: ${title}
    Author: ${author}
    Year: ${year}
    Location: ${location}
    ${"-".repeat(25)}
  `;
}
function exportToCSV(catalog) {
  //   console.log(catalog);
  const header = "Title,Author,Year,Location";
  const rows = [];
  for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];
    console.log(entry);
    const [title, author, year, location] = entry.split(" | ");
    let string = `"${title}","${author}",${year},"${location}"`;
    rows.push(string);
  }
  return rows;
}
console.log(exportToCSV(rawCatalogCards));
