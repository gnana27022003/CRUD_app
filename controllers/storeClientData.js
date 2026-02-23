const Client = require('../models/client');

const storeClientData = async (req, res) => {
  try {

    const { name, company, email, phone, status } = req.body;

    if (!name || !company || !email || !phone || !status) {
      return res.status(400).json({
        success: false,
        message: "All fields are required (name, company, email, phone, status)"
      });
    }

    const existingClient = await Client.findOne({
      $or: [{ email }, { phone }]
    });

    if (existingClient) {
      return res.status(409).json({
        success: false,
        message: "Client already exists with same email or phone"
      });
    }

    const newClient = await Client.create({
      name,
      company,
      email,
      phone,
      status
    });

    return res.status(200).json({
      success: true,
      message: "Client added successfully"
      
    });

  } catch (error) {

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Duplicate email or phone detected"
      });
    }

    console.error("Unexpected Error:", error);

    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

module.exports = { storeClientData };