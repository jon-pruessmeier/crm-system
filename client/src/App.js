import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';

function App() {
  return (
    <div className="App container-fluid bg-dark vh-100 d-flex justify-content-center flex-column">
      <CustomerList/>
      <div className="row d-flex justify-content-center w-100">
        <AddCustomer/>
      </div>
      
    </div>
  );
}

export default App;
