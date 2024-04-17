const models = require('./models');

const controllers = {
  register: (req, res) => {
    const { id, fullName, address, status } = req.body;
    let fee = 0;
    if (status === 'student') {
      fee = 10;
    } else if (status === 'staff') {
      fee = 50;
    }
    // Save registration details to database (using models.js)
    models.saveRegistration({ id, fullName, address, status, fee });
    res.status(200).json({ id, fullName, address, status, fee });
  }
};

module.exports = controllers;
