const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const Schemes = require("./models/schemes"); // Import the Schemes model
const cors = require("cors");

app.use(bodyParser.json()); // for post
app.use(bodyParser.urlencoded({ extended: true }));
const static = express.static("static");
app.use("/", static);
app.use(cors()); // Add this line to enable CORS

mongoose
  .connect("mongodb+srv://dharshini:dharshini@cluster0.dbobwcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/CivicConnect")
  .then(() => console.log("Db connected"))
  .catch((err) => console.log("Db connection failed"));

// Define the endpoint to fetch schemes
app.get("/api/schemes", async (req, res) => {
  try {
    const scheme_details = await Schemes.find();
    res.json(scheme_details);
  } catch (error) {
    console.error("Error fetching Schemes:", error);
    res.status(500).json({ error: "Error fetching Schemes" });
  }
});

//scheme navigation
app.get('/api/schemes/:_id', async (req, res) => {
  const { _id } = req.params;
  
  try {
    const schemeSpecific = await Schemes.findOne({_id });
    if (!schemeSpecific) {
      return res.status(404).json({ message: 'Scheme not found' });
    }
    res.json(schemeSpecific);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

//category : agri
app.get('/Agricultural,', async (req, res) => {
  try {
    const AgriSchemes = await Schemes.find({ category: 'Agriculture, Rural and Environment' });
    res.json(AgriSchemes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//category : financial
app.get('/financial', async (req, res) => {
  try {
    const FinancialSchemes = await Schemes.find({ category: 'Banking, Financial Services and Insurance' });
    res.json(FinancialSchemes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//category : business
app.get('/business', async (req, res) => {
  try {
    const BusinessSchemes = await Schemes.find({ category: 'Business and Entrepreneurship' });
    res.json(BusinessSchemes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//category : education
app.get('/edu', async (req, res) => {
  try {
    const EducationSchemes = await Schemes.find({ category: 'Education and Learning' });
    res.json(EducationSchemes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//category : health
app.get('/health', async (req, res) => {
  try {
    const HealthSchemes = await Schemes.find({ category: 'Health and wellness' });
    res.json(HealthSchemes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log("App Started");
});


