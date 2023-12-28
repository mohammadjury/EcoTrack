// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const environmentalDataRoutes = require('./routes/environmentalData');
const communityReportsRoutes = require('./routes/communityReports');
const educationalResourceRoutes = require('./routes/educationalResourceRoutes');
const environmentalAlertsRoutes = require('./routes/environmentalAlertsRoutes');
const sustainabilityScoresRoutes = require('./routes/sustainabilityScoresRoutes');
const userProfilesRoutes = require('./routes/userProfilesRoutes');
const authRoutes = require('./routes/authRoutes');
const openDataAccessRoutes = require('./routes/opendataaccessRoutes');

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
const EnvironmentalData = require('./models/EnvironmentalData')(sequelize);
const CommunityReports = require('./models/CommunityReports')(sequelize);
const EducationalResource = require('./models/EducationalResource')(sequelize);
const EnvironmentalAlerts = require('./models/EnvironmentalAlerts')(sequelize);
const SustainabilityScore = require('./models/SustainabilityScore')(sequelize);
const UserProfiles = require('./models/UserProfiles')(sequelize);
const OpenDataAccess = require('./models/OpenDataAccess')(sequelize);

// Routes
app.use('/api/environmentalData', environmentalDataRoutes(EnvironmentalData));
app.use('/api/communityReports', communityReportsRoutes(CommunityReports));
app.use('/api/educationalResources', educationalResourceRoutes(EducationalResource));
app.use('/api/environmentalAlerts', environmentalAlertsRoutes(EnvironmentalAlerts));
app.use('/api/sustainabilityscores', sustainabilityScoresRoutes(SustainabilityScore));
app.use('/api/userProfiles', userProfilesRoutes(UserProfiles));
app.use('/api/auth', authRoutes(UserProfiles)); 
app.use('/api/opendataaccess', openDataAccessRoutes(OpenDataAccess));


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
