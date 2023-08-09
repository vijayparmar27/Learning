const { MongoClient } = require("mongodb");
const { jsonToCsv } = require("../services/jsonToCsv.service");
const faker = require("faker");

const mongoURI = "mongodb://localhost:27017";
const databaseName = "fakeData";
const collectionName = "userFakeData";

const numRecords = 2000000; // (2M fake records)

exports.generateCsvFile = async (req, res) => {
  const client = await MongoClient.connect(mongoURI, {
    useUnifiedTopology: true,
  });

  const db = client.db(databaseName);

  const data = await db.collection(collectionName).find({}).toArray();

  const headers = ["_id", "name", "address", "email", "phone"];
  const filePath = "output.csv";

  try {
    console.log("Converting JSON to CSV...");
    await jsonToCsv({
      csvData: data,
      headers,
      type: "file",
      filePath,
      writeHeaders: true,
    });
    console.log("CSV conversion successful! File saved at:", filePath);

    res.send("CSV conversion successful!");
  } catch (error) {
    console.error("Error converting JSON to CSV:", error.message);
  }
};

// add fake data in mongodb
exports.generateFakeData = async (req, res) => {
  const client = await MongoClient.connect(mongoURI, {
    useUnifiedTopology: true,
  });
  const db = client.db(databaseName);
  const collection = db.collection(collectionName);

  const data = [];
  for (let i = 0; i < numRecords; i++) {
    data.push({
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      // Add more fields here as needed
    });

    if (i % 10000 === 0) {
      // Insert every 10,000 records at once to improve performance
      await collection.insertMany(data);
      data.length = 0; // Clear the data array
      console.log(`${i} records inserted.`);
    }
  }

  if (data.length > 0) {
    // Insert any remaining records
    await collection.insertMany(data);
    console.log(`${numRecords} records inserted.`);
  }

  client.close();

  res.send(`${numRecords} records inserted.`);
};
