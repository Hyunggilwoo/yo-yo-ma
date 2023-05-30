import React, {useState} from 'react';
import './styles.css'
const CustomerLookup = () => {
    // handle button actions
    const [textBoxValue, setTextBoxValue] = useState();
    const [lastNameValue, setLastNameText] = useState();
    
    const handleTextBoxChange = (event) => {
        setTextBoxValue(event.target.value);
    }
    //put function to contact db here
    const handleClick = () => {
        //do something with textBoxValue
    }
    const handleLastNameText = (event) => {
        setLastNameText(event.target.value);
    }


    
    return (
        
        <div>
            <header className="styled">
                
                <t>Customer Search</t>
                <form>
                    <div>
                        <text>First Name</text>
                        <input type="text" value={textBoxValue} onChange={handleTextBoxChange}>
                        </input> 
                    </div>
                    <text>Last Name</text>
                    <input type="text" value={lastNameValue} onChange={handleLastNameText}></input>
                </form>
                <button onClick={handleClick}>Search! </button>  
                <div>
                <button>
                    Add new Customer   
                </button>
                </div>
            </header>
        </div>
        
        
    );
};

export default CustomerLookup;