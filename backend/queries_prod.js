const Client = require("pg").Client;

let clientSettings;
if (process.env.NODE_ENV !== 'production'){
    clientSettings = {
        connectionString: process.env.DATABASE_URL,
        ssl: false
    }
} else {
     clientSettings = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
        rejectUnauthorized: false
        }
    }
}

const client = new Client(clientSettings);


client.connect();

const getAllCustomers = (req, res) => {
    client.query(
        'SELECT * FROM customers ORDER BY id ASC', 
        (error, results) => {
            if (error){
                console.log(error);
                throw error;
            }
            res.status(200).json(results.rows);
        }
    )
    client.end();
}

const getCustomerById = (req, res) => {
    const id = parseInt(req.params.id);

    client.query(
        'SELECT * FROM customers WHERE id = $1', [id],
        (error, results) => {
            if (error) {
                console.log(error);
                throw error;
            }
            res.status(200).json(results.rows);
        }
    )
    client.end();
}

const createCustomer = (req, res) => {
    const {corporateName, contactPerson, email, telephone} = req.body;
    client.query(
        'INSERT INTO customers (corporate_name, contact_person, email, telephone) VALUES ($1, $2, $3, $4)',
        [corporateName, contactPerson, email, telephone],
        (error, results) => {
            if (error){
                console.log(error);
                throw error;
            }
            res.status(201).send(`Customer added with ID: ${results.insertId}`);
        }
    )
    client.end();
}

const updateCorporateName = (req, res) => {
    const {id, corporateName} = req.body;
    if (!id){
        console.error("No ID available.")
        return;
    }
    client.query(
        "UPDATE customers SET corporate_name = $1 WHERE id = $2",
        [corporateName, id],
        (error, results) => {
            if (error){
                console.log(error);
            } 
            res.status(200).send(`Customer modified with ID: ${id}`);
        }
     )
     client.end();
}

const updateContactPerson = (req, res) => {
    const {id, contactPerson} = req.body;
    if (!id){
        console.error("No ID available.")
        return;
    }
    client.query(
        "UPDATE customers SET contact_person = $1 WHERE id = $2",
        [contactPerson, id],
        (error, results) => {
            if (error){
                console.log(error);
            } 
            res.status(200).send(`Customer modified with ID: ${id}`);
        }
     )
     client.end();
}

const updateEmail = (req, res) => {
    const {id, email} = req.body;
    if (!id){
        console.error("No ID available.")
        return;
    }
    client.query(
        "UPDATE customers SET email = $1 WHERE id = $2",
        [email, id],
        (error, results) => {
            if (error){
                console.log(error);
            } 
            res.status(200).send(`Customer modified with ID: ${id}`);
        }
     )
     client.end();
}

const updateTelephone = (req, res) => {
    const {id, telephone} = req.body;
    if (!id){
        console.error("No ID available.")
        return;
    }
    client.query(
        "UPDATE customers SET telephone = $1 WHERE id = $2",
        [telephone, id],
        (error, results) => {
            if (error){
                console.log(error);
            } 
            res.status(200).send(`Customer modified with ID: ${id}`);
        }
     )
     client.end();
}




module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCorporateName,
    updateContactPerson,
    updateEmail,
    updateTelephone
}