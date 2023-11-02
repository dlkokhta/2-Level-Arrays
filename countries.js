const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const checkCountry = (country) => {
  if (countries.includes(country)) {
    return "this countru already exist";
  } else {
    countries.push(country);
    return countries;
  }
};

console.log(checkCountry("Georgia"));
