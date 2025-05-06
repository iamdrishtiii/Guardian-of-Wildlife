const express = require('express')
const app = express();
const dbConnection = require("./config/config")
const dotenv=require("dotenv");
const cors = require('cors');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
const allowedOrigins = ['https://guardian-of-wildlife.onrender.com', 'http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

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

const PORT = process.env.PORT || 4000

app.listen(PORT  , () => {
  console.log(`Server listening on port ${PORT}`)
})
