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
app.use(cors({
  origin:"https://guardian-of-wildlife.onrender.com"
}));
app.use("/wildlife",wildliferoute);
app.use("/programs",programsroute);
app.use("/blog",blogroute);
app.use("/contact",contactroute)
app.use("/jointeam",joinusroute);
app.use(subsroute);

// connect to db
dbConnection(); 

app.listen(process.env.PORT  , () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})
