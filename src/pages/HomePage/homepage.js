import React, {useState} from 'react';
import logo from './PageComponents/logo.svg';
import { QueryBuilder } from 'react-querybuilder';

const HomePage = () => {
    // handle button actions
    const [textBoxValue, setTextBoxValue] = useState();

    
    const handleTextBoxChange = (event) => {
        setTextBoxValue(event.target.value);
    }


    const handleClick = (event) => {
        
    }

    return (
        <div>
            
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                <form>
                    <button>
                        Open Tickets
                    </button>
                    <button>
                        Customer Lookup
                    </button>
                    <button>
                        Shop Controls
                    </button>
                    <input type="text" value={textBoxValue} onChange={handleTextBoxChange}></input>
                    <QueryBuilder >
                        
                    </QueryBuilder>
                    <button onClick={handleClick}>
                    SubmitText
                    </button>    
                </form>
            </header>
            </div>
        
        
    );
};

export default HomePage;