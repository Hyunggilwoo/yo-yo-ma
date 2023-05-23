import React, {useState} from 'react';

const Services = () => {
    // handle button actions
    const [textBoxValue, setTextBoxValue] = useState();
    
    const handleTextBoxChange = (event) => {
        setTextBoxValue(event.target.value);
    }

    const handleClick = () => {
        
    }

    return (
        <div>
            <button>
                LaborINdex
            </button>
            <button>
                Customer Lookup
            </button>
            <button>
                Shop Controls
            </button>
            
            <div>
            <button onClick={handleClick}>
                SubmitText
            </button>
            <input type="text" value={textBoxValue} onChange={handleTextBoxChange}></input>
        </div>
        </div>
        
        
    );
};

export default Services;