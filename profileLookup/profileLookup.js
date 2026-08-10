let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, attr) {
  const validators = {
    isAttrValid: (obj, attr) => Object.hasOwn(obj, attr),
  };

  const profile = contacts.find(({ firstName }) => firstName == name);

  if (!profile) return "No such contact";
  if (!validators["isAttrValid"](profile, attr)) return "No such property";

  return profile[attr];
}

console.log(lookUpProfile("Akira", "lastName"));
