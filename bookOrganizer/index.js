let books = [
  {
    title: "Designing Your Life",
    authorName: "Bill Burnett and Dave Evans",
    releaseYear: 2016,
  },
  {
    title: "Skills for Succes",
    authorName: "Stella Cottrell",
    releaseYear: 2015,
  },
  {
    title: "How To Prove It",
    authorName: "Daniel J. Velleman",
    releaseYear: 2019,
  },
  {
    title: "Older Story",
    authorName: "Older Author",
    releaseYear: 1940,
  },
  {
    title: "Old Story",
    authorName: "Old Author",
    releaseYear: 1960,
  },
  {
    title: "The Same Old Story",
    authorName: "Same Old Author",
    releaseYear: 1960,
  },
];

function sortByYear(bookA, bookB) {
  const { releaseYear: relA } = bookA;
  const { releaseYear: relB } = bookB;

  if (relA < relB) return -1;
  if (relA > relB) return 1;
  return 0;
}

let filteredBooks = books.filter((b) => b.releaseYear <= 1950);

filteredBooks = filteredBooks.sort(sortByYear);
