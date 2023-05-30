import React, {useState} from 'react';
import './styles.css'

const OpenTickets = () => {
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
                <p>Open Tickets</p>
            </header>
        </div>
        
        
    );
};

export default OpenTickets;