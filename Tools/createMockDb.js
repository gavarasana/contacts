const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { contacts } = mockData;
const data = JSON.stringify({ contacts });
const filePath = path.join(__dirname, "db.json");

fs.writeFile(filePath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created");
});
