const express = require('express');
const cors = require('cors');

const initializeApplication = require('./routes/initializeApplication');
const accountingSoftware = require('./routes/accountingSoftware');
const decisionEngine = require('./routes/decisionEngine');

const app = express();

const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(cors(corsOptions));

app.use('/initializeApplication', initializeApplication);
app.use('/balanceSheet', accountingSoftware);
app.use('/decisionEngine', decisionEngine);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});