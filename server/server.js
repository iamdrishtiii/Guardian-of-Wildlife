const express = require('express')
const app = express();
const dbConnection = require("./config/config")
const wildliferoute = require("./routes/wildliferoute")
const dotenv=require("dotenv");
const programsroute = require('./routes/programsroute');
const blogroute=require('./routes/blogroute');
const cors = require('cors');
const contactroute = require('./routes/contactroute');
const subsroute = require('./routes/footerroute');
const joinusroute = require('./routes/joinusroute');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors({ origin: 'https://guardian-of-wildlife.onrender.com' }));
app.use(cors({origin:'https://guardian-of-wildlife.onrender.com/wildlife'}))
app.use(wildliferoute);
app.use(programsroute);
app.use(blogroute);
app.use(contactroute)
app.use(joinusroute);
app.use(subsroute);

// connect to db
dbConnection(); 

const PORT = process.env.PORT || 4000

app.listen(PORT  , () => {
  console.log(`Server listening on port ${PORT}`)
})
