const express = require("express");
const app = express();


const db = require('./queries');


PORT = process.env.PORT || 3080;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get('/api/crm/customers', db.getAllCustomers);
app.get('/api/crm/customers/:id', db.getCustomerById);
app.post('/api/crm/customers', db.createCustomer);
app.put('/api/crm/customers/coroporateName', db.updateCorporateName);
app.put('/api/crm/customers/contactPerson', db.updateContactPerson);
app.put('/api/crm/customers/email', db.updateEmail);
app.put('/api/crm/customers/telephone', db.updateTelephone);

app.listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`);
})