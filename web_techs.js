let webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let tech = "Sass";

const checkTech = (tech) => {
  if (webTechs.includes(tech)) {
    console.log("Sass is a CSS preprocess");
  } else if (!webTechs.includes(tech)) {
    webTechs.push(tech);
    return webTechs;
  }
};

console.log(checkTech(tech));
