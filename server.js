const express = require("express");
const app = express();


const db = require('./queries');


PORT = process.env.PORT || 3080;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get('/customers', db.getAllCustomers);
app.get('/customers/:id', db.getCustomerById);
app.post('/customers', db.createCustomer);
app.put('/customers/coroporateName', db.updateCorporateName);
app.put('/customers/contactPerson', db.updateContactPerson);
app.put('/customers/email', db.updateEmail);
app.put('/customers/telephone', db.updateTelephone);

app.listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`);
})