const sum = (nilai1, nilai2) => {
  return nilai1 + nilai2;
};

const displaySum = (nilai1, nilai2, callback) => {
  return `hasil dari ${nilai1} + ${nilai2} = ${callback(nilai1, nilai2)}`;
};

// console.log(displaySum(2, 3, sum));

const data = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirde",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const find = (key, jumlah) => {
  const output = data
    .filter((x) => x.includes(key))
    .map((element) => {
      return element.toLowerCase();
    });
  if (jumlah <= output.length) {
    return output.slice(0, jumlah);
  } else {
    return `hanya ada ${output.length} = ${output.slice(0, jumlah)}`;
  }
};

const search = (key, jumlah, find) => {
  return find(key, jumlah);
};

console.log(search("Al", 2, find));
