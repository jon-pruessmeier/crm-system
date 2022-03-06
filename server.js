const express = require("express");
const bodyparser = require("body-parser")
const app = express();

const db_prod = require('./queries_prod');


PORT = process.env.PORT || 3080;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get('/customers', db_prod.getAllCustomers);
app.get('/customers/:id', db_prod.getCustomerById);
app.post('/customers', db_prod.createCustomer);
app.put('/customers/coroporateName', db_prod.updateCorporateName);
app.put('/customers/contactPerson', db_prod.updateContactPerson);
app.put('/customers/email', db_prod.updateEmail);
app.put('/customers/telephone', db_prod.updateTelephone);

app.listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`);
})