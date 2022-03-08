const express = require("express");
const app = express();


const db = require('./queries');


PORT = process.env.PORT || 3080;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get('/api/customers', db.getAllCustomers);
app.get('/api/customers/:id', db.getCustomerById);
app.post('/api/customers', db.createCustomer);
app.put('/api/customers/coroporateName', db.updateCorporateName);
app.put('/api/customers/contactPerson', db.updateContactPerson);
app.put('/api/customers/email', db.updateEmail);
app.put('/api/customers/telephone', db.updateTelephone);

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server listens on port ${PORT}`);
})