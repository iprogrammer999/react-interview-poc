const { ObjectID, ObjectId } = require("mongodb");
const { db_name, collection_name } = require("../configs");
const db = require("../db");
exports.getAll = async (req, res, next) => {
  try {
    const result = await db
      .get()
      .collection(collection_name)
      .find({})
      .toArray();

    if (result) {
      res.status(200).json({ result: result });
    } else {
      res.status(500).json({ error: "internal server error" });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.create = async (req, res, next) => {
  const { username, age, company, designation } = req.body;
  const result = await db
    .get()
    .collection(collection_name)
    .insert({ username, age, company, designation });

  if (result) {
    res.status(200).json({ message: "Added Employee Details!" });
  } else {
    res.status(500).json({ error: "internal server error" });
  }
};

exports.update = async (req, res, next) => {};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    await db
      .get()
      .collection(collection_name)
      .deleteOne({ _id: ObjectId(id) });

    const result = await db
      .get()
      .collection(collection_name)
      .find({})
      .toArray();

    if (result) {
      res.status(200).json({ result });
    } else {
      res.status(500).json({ error: "internal server error" });
    }
  } catch (e) {
    console.log("error: ", e);
  }
};
