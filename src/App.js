import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Layout from "./pages/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
