exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("vin", 17).notNullable().unique();
    tbl.string("make", 128).notNullable();
    tbl.string("model", 128).notNullable();
    tbl.numeric("mileage").unsigned().notNullable();
    tbl.string("title");
    tbl.string("transmission");
  });
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
