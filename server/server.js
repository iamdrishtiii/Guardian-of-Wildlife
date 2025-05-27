const path = require('path');

const express = require('express')
const app = express();
const dbConnection = require("./config/config")
const dotenv=require("dotenv");
const cors = require('cors');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(cors());

const wildliferoute = require("./routes/wildliferoute")
const programsroute = require('./routes/programsroute');
const blogroute=require('./routes/blogroute');
const contactroute = require('./routes/contactroute');
const subsroute = require('./routes/footerroute');
const joinusroute = require('./routes/joinusroute');


app.use(wildliferoute);
app.use(programsroute);
app.use(blogroute);
app.use(contactroute)
app.use(joinusroute);
app.use(subsroute);

// connect to db
dbConnection(); 

const PORT = process.env.PORT || 3001
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Catch-all handler: for any request that doesn't match an API route
app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT  , () => {
  console.log(`Server listening on port ${PORT}`)
})
