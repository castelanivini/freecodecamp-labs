const markdownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

function convertMarkdown() {
  let html = markdownInput.value;

  const heading3RegExp = new RegExp(
    "^[ \\t]*###\\s+(.+)$",
    "gm",
  );
  const heading2RegExp = new RegExp(
    "^[ \\t]*##\\s+(.+)$",
    "gm",
  );
  const heading1RegExp = new RegExp(
    "^[ \\t]*#\\s+(.+)$",
    "gm",
  );
  const blockquoteRegExp = new RegExp(
    "^[ \\t]*>\\s+(.+)$",
    "gm",
  );
  const imageRegExp = new RegExp(
    "!\\[([^\\]]*)\\]\\(([^)]+)\\)",
    "g",
  );
  const linkRegExp = new RegExp(
    "(?<!!)\\[([^\\]]+)\\]\\(([^)]+)\\)",
    "g",
  );
  const boldAsteriskRegExp = new RegExp(
    "\\*\\*(.+?)\\*\\*",
    "g",
  );
  const boldUnderscoreRegExp = new RegExp("__(.+?)__", "g");
  const italicAsteriskRegExp = new RegExp(
    "(?<!\\*)\\*([^*]+?)\\*(?!\\*)",
    "g",
  );
  const italicUnderscoreRegExp = new RegExp(
    "(?<!_)_([^_]+?)_(?!_)",
    "g",
  );

  html = html.replace(heading3RegExp, "<h3>$1</h3>");
  html = html.replace(heading2RegExp, "<h2>$1</h2>");
  html = html.replace(heading1RegExp, "<h1>$1</h1>");
  html = html.replace(blockquoteRegExp, "<blockquote>$1</blockquote>");
  html = html.replace(imageRegExp, '<img alt="$1" src="$2">');
  html = html.replace(linkRegExp, '<a href="$2">$1</a>');
  html = html.replace(boldAsteriskRegExp, "<strong>$1</strong>");
  html = html.replace(boldUnderscoreRegExp, "<strong>$1</strong>");
  html = html.replace(italicAsteriskRegExp, "<em>$1</em>");
  html = html.replace(italicUnderscoreRegExp, "<em>$1</em>");

  // Os testes esperam elementos de linhas consecutivas sem quebras entre eles.
  return html.replace(/\r?\n/g, "");
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  htmlOutput.textContent = html;
  preview.innerHTML = html;
});
