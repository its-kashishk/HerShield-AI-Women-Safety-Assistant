const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* =======================
   HOME TEST
======================= */
app.get("/", (req, res) => {
  res.send("HerShield Backend Running 🚀");
});

/* =======================
   SOS SYSTEM
======================= */
app.post("/sos", (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({
      success: false,
      message: "Location required"
    });
  }

  res.json({
    success: true,
    message: "🚨 SOS Triggered",
    location: { latitude, longitude },
    time: new Date()
  });
});

/* =======================
   EMERGENCY CONTACTS
======================= */
app.get("/contacts", (req, res) => {
  res.json({
    police: "100",
    ambulance: "108",
    womenHelpline: "1091",
    cyberCrime: "1930"
  });
});

/* =======================
   NEARBY SUPPORT (BHOPAL)
======================= */
app.get("/nearby", (req, res) => {
  res.json({
    city: "Bhopal",
    hospitals: [
      "AIIMS Bhopal",
      "Hamidia Hospital",
      "Bansal Hospital"
    ],
    policeStations: [
      "TT Nagar Police Station",
      "MP Nagar Police Station"
    ]
  });
});

/* =======================
   SIMPLE REPORT SYSTEM
======================= */
let reports = [];

app.post("/report", (req, res) => {
  const { type, message } = req.body;

  if (!type || !message) {
    return res.status(400).json({
      success: false,
      message: "Invalid input"
    });
  }

  const newReport = {
    id: reports.length + 1,
    type,
    message,
    time: new Date()
  };

  reports.push(newReport);

  res.json({
    success: true,
    report: newReport
  });
});

app.get("/reports", (req, res) => {
  res.json(reports);
});

/* =======================
   START SERVER
======================= */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});