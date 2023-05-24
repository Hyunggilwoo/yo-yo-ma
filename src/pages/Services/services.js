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
                        Add Parts
                    </button>
                    <button onClick={handleLaborClick}>
                        Add Labor
                    </button>
                    <button onClick={handleServiceClick}>
                        Edit Services
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