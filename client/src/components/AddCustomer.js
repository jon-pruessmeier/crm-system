function AddCustomer(){

    function handleClick(){
        //check if corporate_name is not null
        if (document.getElementById("corporate_name").value === ""){
            return;
        }

        const jsonData = {
            "corporate_name": document.getElementById("corporate_name").value,
            "contact_person": document.getElementById("contact_person").value,
            "email": document.getElementById("email").value,
            "telephone": document.getElementById("telephone").value
        }

        const url = "/api/customers";
        const request = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData)
        }

        fetch(url, request);

    }

    return (
        <div className="col-12 col-sm-5 col-md-4 my-4 bg-secondary rounded text-light">
            <form>
                <label for="corporate_name">Corporate name:</label>
                <br/>
                <input type="text" id="corporate_name" name="corporate_name"/>
                <br/>

                <label for="contact_person">Contact person:</label>
                <br/>
                <input type="text" id="contact_person" name="contact_person"/>

                <br/><label for="email">Email:</label>
                <br/>
                <input type="text" id="email" name="email"/>
                <br/>

                <label for="telephone">Telephone:</label>
                <br/>
                <input type="text" id="telephone" name="telephone"/>
                <br/>
            </form>
            <button type="button btn btn-dark" onClick={handleClick}>Submit!</button>
            
        </div>
    );
}

export default AddCustomer;