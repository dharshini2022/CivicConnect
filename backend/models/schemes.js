const mongoose = require("mongoose");


const Schema = new mongoose.Schema({
  name: String,
  Category: String,
  Details: String,
  Benefits: String,
  Eligibility: String,
  ApplicationProcess: String, 
  DocumentsRequired: String,
});

const Scheme_Detail = mongoose.model("schemes", Schema);

module.exports = Scheme_Detail;
