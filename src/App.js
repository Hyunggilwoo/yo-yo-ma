import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Layout from "./pages/Layout";
import Invoice from "./pages/Invoice/invoice";
import CustomerLookup from "./pages/Customer Lookup/customerlookup";
import IntakeForm from "./pages/IntakeForm/intakeform";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Invoice" element = {<Invoice />} />
            <Route path="/CustomerLookup" element = {<CustomerLookup />} />
            <Route path="/IntakeForm" element = {<IntakeForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
