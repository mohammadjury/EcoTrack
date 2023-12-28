// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const userProfilesRoutes = require('./routes/userProfilesRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database Configuration
const sequelize = new Sequelize('ecoTrack', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Models
const UserProfiles = require('./models/UserProfiles')(sequelize);

// Routes
app.use('/api/userProfiles', userProfilesRoutes(UserProfiles));
app.use('/api/auth', authRoutes(UserProfiles)); 

// Server setup
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
