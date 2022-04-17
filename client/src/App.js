import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';

function App() {
  return (
    <div className="App container-fluid bg-dark vh-100 d-flex justify-content-center flex-column">
      <CustomerList/>
    </div>
  );
}

export default App;
