// STRETCH

const cars = [
  {
    vin: "1HGCM66537A023172",
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "JH4KA3261JC024072",
    make: "toyota",
    model: "corolla",
    mileage: 115000,
    title: "clean",
  },
  {
    vin: "2P4GH2535SR296546",
    make: "ford",
    model: "focus",
    mileage: 15000,
  },
];

// exports.seed = function (knex) {
//   return knex("cars")
//     .truncate()
//     .then(() => {
//       return knex("cars").insert(cars);
//     });
// };
exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
