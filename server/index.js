const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors')
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);


mongoose.connect('mongodb+srv://ultimate:ultimate@cluster0.fnbeswo.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(port, () => console.log(`Server running on port ${port}`));
