import logo from './PageComponents/logo.svg';
import { Link } from "react-router-dom";


const HomePage = () => {
    // handle button actions




    return (
        <div>
            
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                HomePage
                </p>
                <form>
                    <Link to ="/opentickets"><button>Open Tickets</button></Link>
                    <Link to ="/customerlookup"><button>Customer Lookup</button></Link>
                    <Link to="/services"><button>Shop Controls</button></Link>
                </form>
            </header>
            </div>
        
        
    );
};

export default HomePage;