//1

// let arr = [];

//2

// arr = [1, 2, 3, 4, 5, 6];

//3

// console.log(arr.length);

//4

// const firstItem = arr[0];
// const middleItem = arr[Math.floor(arr.length / 2)];
// console.log(middleItem);
// const lastItem = arr[arr.length - 1];
// console.log(
//   `firstItem: ${firstItem} ,middleItem: ${middleItem} ,lastItem ${lastItem}`
// );

//5

// let mixedDataTypes = ["text", 4, { name: "dima" }, null, true, undefined];
// console.log(mixedDataTypes.length);

//6

// let itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

//7

// console.log(itCompanies);

//8

// console.log(itCompanies.length);

//9

// let firstCompany = itCompanies[0];
// let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
// let lastCompany = itCompanies[itCompanies.length - 1];
// console.log(middleCompany);

//10

// for (let index in itCompanies) {
//   const company = itCompanies[index];
//   console.log(company);
// }

//11

// const company = itCompanies.map((item) => {
//   return item.charAt(0).toUpperCase() + item.slice(1);
// });
// console.log(company);

//12

// const sentence = itCompanies.join(", ");
// console.log(sentence);

//13

// const checkCompany = (companyToCheck) => {
//   let companyToCheckLower = companyToCheck.toLowerCase();

//   if (
//     itCompanies.some((company) =>
//       company.toLowerCase().includes(companyToCheckLower)
//     )
//   ) {
//     return companyToCheck;
//   } else {
//     return "A company is not found";
//   }
// };
// const companies = "google";
// const result = checkCompany(companies);
// console.log(result);

//14

// const companiesWithMoreO = [];
// for (let i = 0; i < itCompanies.length; i++) {
//   let company = itCompanies[i];
//   let count = 0;
//   for (let j = 0; j < company.length; j++) {
//     if (company[j] === "o" || company[j] === "O") {
//       count++;
//     }
//   }
//   if (count > 1) {
//     companiesWithMoreO.push(company);
//   }
// }
// console.log(companiesWithMoreO);

//15

// console.log(itCompanies.sort());

//16

// console.log(itCompanies.reverse());

//17

// console.log(itCompanies.slice(0, 3));

//18

// console.log(itCompanies.slice(-3));

//19

// let catMiddle = itCompanies[Math.floor(itCompanies.length / 2)];
// console.log(catMiddle);

//20

// console.log(itCompanies.slice(1));

//21

// let catMiddleitem = Math.floor(itCompanies.length / 2);
// const arr = itCompanies
//   .slice(0, catMiddleitem)
//   .concat(itCompanies.slice(catMiddleitem + 1));
// console.log(arr);

//22

// let lastItem = itCompanies.length - 1;
// const arr = itCompanies
//   .slice(0, lastItem)
//   .concat(itCompanies.slice(lastItem + 1));
// console.log(arr);

//23

// console.log((itCompanies = []));

//24
//shopping card

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// const product = "Sugar";
// const checkProduct = (product) => {
//   if (shoppingCart.includes(product)) {
//     return "product is exist";
//   } else {
//     shoppingCart.push(product);
//     return shoppingCart;
//   }
// };

// //25

// checkProduct(product);
// console.log(shoppingCart);

// //26

// const removeHoney = (simphtom) => {
//   if (simphtom === "yes") {
//     return shoppingCart.filter((item) => item !== "Honey");
//   } else {
//     return shoppingCart;
//   }
// };
// console.log(removeHoney("yes"));

// //27

// const replaceTea = () => {
//   let greenTea = "Green Tea";
//   let tea = "Tea";
//   const updated = shoppingCart.map((item) => (item === tea ? greenTea : item));
//   return updated;
// };
// console.log(replaceTea());
