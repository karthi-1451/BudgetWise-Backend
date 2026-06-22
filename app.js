const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const userRouter = require('./routes/userRouter');
const transactionRouter = require('./routes/transactionRouter');

const app = express();

const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

mongoose.connect('mongodb+srv://karthipattabiraman_db_user:$arojAKarth!1@cluster0.b2ifjdq.mongodb.net/BudgetWise')
.then(() => console.log("Connected to DB"))
.catch((error) => console.log(error));

app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());

app.use("/api/v1/users",userRouter);
app.use("/api/v1/transactions",transactionRouter);

app.use(errorHandler);

const port = 8000;
app.listen(port, () => {console.log(`http://127.0.0.1:${port}`);});