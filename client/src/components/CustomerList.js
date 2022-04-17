import { useEffect, useState } from "react";
import AddCustomer from "./AddCustomer";
import Customer from "./Customer";

function CustomerList(){

    const testCustomers = [
        {
            "corporate_name": "Beispiel AG",
            "contact_person": "Max Mustermann",
            "email": "maxmuster@helloworld.com",
            "telephone": "012345678"

        },
        {
            "corporate_name": "Muster GmbH",
            "contact_person": "",
            "email": "info@muster.com",
            "telephone": ""

        },
        {
            "corporate_name": "Hello World UG",
            "contact_person": "Hello World",
            "email": "",
            "telephone": "0123456"

        },
        {
            "corporate_name": "NodeJS Inc.",
            "contact_person": "Java Script",
            "email": "impressum@node.com",
            "telephone": ""

        },
        {
            "corporate_name": "PSQL SE",
            "contact_person": "Data Base",
            "email": "psql@info.com",
            "telephone": "0987654331"

        }

    ]

    let demo = [];
    for (let i = 0; i < testCustomers.length; i++){
        demo.push(Customer(testCustomers[i]));
    }

    const [customers, setCustomers] = useState(demo);


    useEffect(() => {
        const fetchData = async () =>{
            const url = "http://127.0.0.1:3080/api/customers";
            const request = {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    }
                };
                try {
                    let response = await fetch(url, request);
                    let data = await response.json();
                    let objectArray = [];
                    for (let i = 0; i < data.length; i++){
                        objectArray.push(Customer(data[i]));
                    }
                    setCustomers(objectArray);
                } catch (error) {
                    console.log(error);
                }
            

        }
        fetchData();
    })

    


    return(
        <div className="row">
            {customers}
            <AddCustomer/>
        </div>
    )


}

export default CustomerList;