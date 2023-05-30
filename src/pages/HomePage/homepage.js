import React, {useState} from 'react';
import logo from './PageComponents/logo.svg';
import { Link } from "react-router-dom";


const HomePage = () => {
    // handle button actions
    const [textBoxValue, setTextBoxValue] = useState();




    return (
        <div>
            
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                HomePage
                </p>
                <form>
                    <button>
                        Open Tickets
                    </button>
                    <button>
                        Customer Lookup
                    </button>
                    <Link to="/services"><button>Shop Controls</button></Link>
                </form>
            </header>
            </div>
        
        
    );
};

export default HomePage;