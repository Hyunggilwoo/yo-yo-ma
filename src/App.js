import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Layout from "./pages/Layout";
import Invoice from "./pages/Invoice/invoice";
import CustomerLookup from "./pages/Customer Lookup/customerlookup";
import IntakeForm from "./pages/IntakeForm/intakeform";
import OpenTickets from "./pages/Open Tickets/opentickets";
import server from "./server/server"; // Import the backend file

// Establish MySQL connection
server.db.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database");
  }
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/CustomerLookup" element={<CustomerLookup />} />
            <Route path="/IntakeForm" element={<IntakeForm />} />
            <Route path="/OpenTickets" element={<OpenTickets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
