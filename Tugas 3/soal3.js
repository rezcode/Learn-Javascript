let people = [
  {
    name: "john",
    gender: "male",
    address: {
      city: "Makassar",
      street: "Lorem ipsum dolor sit amet.",
    },
  },
  {
    name: "luna",
    gender: "male",
    address: {
      city: "Bandung",
      street: "Lorem ipsum dolor sit amet.",
    },
  },
  {
    name: "alice",
    gender: "male",
    address: {
      city: "Jogja",
      street: "Lorem ipsum dolor sit amet.",
    },
  },
  {
    name: "luna",
    gender: "male",
    address: {
      city: "Makassar",
      street: "Lorem ipsum dolor sit amet.",
    },
  },
  {
    name: "Richard",
    gender: "male",
    address: {
      city: "Jayapura",
      street: "Lorem ipsum dolor sit amet.",
    },
  },
];

const checkSpeed = (speed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (typeof speed == "number") {
          resolve(speed);
        } else throw `harus bertipe angka`;
      } catch (err) {
        reject(err);
      }
    }, 2000);
  });
};

const filterCity = (city) => {
  return new Promise((resolve, reject) => {
    const filtered = people.filter((e) =>
      Object.values(e.address).includes(city)
    );
    setTimeout(() => {
      try {
        if (city === filtered[0].address.city) {
          resolve(filtered);
        }
      } catch (err) {
        reject(err);
      }
    }, 3000);
  });
};

checkSpeed(100)
  .then((res) => {
    if (res >= 100) {
      console.log(`Uncontrolable speed, please slow down!`);
    } else if (res >= 60 && res <= 100) {
      console.log(`Overspeed`);
    } else {
      console.log(`Speed normal`);
    }
  })
  .catch((err) => {
    console.log(err);
  });

filterCity("Jakarta")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(`${err.message} or data not found`);
  });
