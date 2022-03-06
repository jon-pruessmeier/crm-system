const Client = require("pg").Client;

const client = new Client({
    connectionString: "postgresql://postgres:password@localhost:5433/postgres"
});

const connect = async () => {
    let retries = 10;
    while (retries){
        try {
            await client.connect();
            break;
        } catch (err){
            console.log(err);
            retries -= 1;
            console.log("Retries lef: " + retries);
            //wait 2 seconds:
            await new Promise(res => setTimeout(res, 2500));
        }

    }
    
}



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
                throw error;
            } 
            res.status(200).send(`Customer modified with ID: ${id}`);
        }
     )
     
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
                throw error;
            } 
            res.status(200).send(`Customer modified with ID: ${id}`);
        }
     )
     
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
                throw error;
            } 
            res.status(200).send(`Customer modified with ID: ${id}`);
        }
     )
     
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
                throw error;
            } 
            res.status(200).send(`Customer modified with ID: ${id}`);
        }
     )
     
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