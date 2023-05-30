import React, {useState} from 'react';
import './styles.css'
const Services = () => {
    // handle button actions
    const [textBoxValue, setTextBoxValue] = useState();
    
    const handleTextBoxChange = (event) => {
        setTextBoxValue(event.target.value);
    }

    const handleClick = () => {
        
    }
    // link to add parts 
    const handlePartsClick = (event) => {
        
    }
    // link to add labor 
    const handleLaborClick = (event) => {
        
    }
    // link to edit parts / labor
    const handleServiceClick = (event) => {
        
    }
    

    return (
        
        <div>
            <header className="styled">
                <p>
                Shop Inventory
                </p>
                <form>
                    <button onClick={handlePartsClick}>
                        Part Lookup
                    </button>
                    <button onClick={handleLaborClick}>
                        Labor Lookup
                    </button>
                    <button onClick={handleServiceClick}>
                        Add/Edit Inventory
                    </button>

                      
                </form>
                <form>
                    <input type="text" value={textBoxValue} onChange={handleTextBoxChange}></input>
                    <button onClick={handleClick}>SubmitText</button>  
                </form>
                
            </header>
        </div>
        
        
    );
};

export default Services;