function AddCustomer(){

    return (
        <div>
            <form>
                <label for="company_name">Company name:</label>
                <br/>
                <input type="text" id="company_name" name="company_name"/>
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
            
            <button type="button">Submit!</button>
            
        </div>
    );
}

export default AddCustomer;