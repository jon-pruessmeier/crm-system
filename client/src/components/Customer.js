function Customer(props){
    const corporate_name = props.corporate_name;
    const contact_person = (props.contact_person) ? props.contact_person : "-";
    const email = (props.email) ? props.email : "-";
    const telephone = (props.telephone) ? props.telephone : "-";

    return (
        <div className="col-12 col-sm-5 col-md-4 bg-secondary mx-3 mt-2 text-light rounded">
            <h3>{corporate_name}</h3>
            <h5>Contact person: {contact_person}</h5>
            <h5>Email: {email}</h5>
            <h5>Telephone: {telephone}</h5>
        </div>
    );
}

export default Customer;