const bodyParser = require("body-parser");
const cors = require('cors');
const express = require("express");
const db = require('./db');
const empRoutes = require('./routes/employee-routes');
const app = express();
const PORT = process.env.PORT || 3009;
db.connect(function() {
    console.log('DB Connections was Successfull!');
});

app.use(bodyParser.json());
app.use(cors());
app.use("/api/employees", empRoutes);
app.listen(PORT, () => {
    console.log('Server is listening on PORT: ', PORT);
})