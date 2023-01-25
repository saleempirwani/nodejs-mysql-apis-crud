const express = require("express");
const bodyParser = require("body-parser");
const employeeRoutes = require("./src/routers/employee.routes");

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Welcome to Nodejs and MySQL Crud Operations." });
});

app.use("/api/v1/employees", employeeRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
