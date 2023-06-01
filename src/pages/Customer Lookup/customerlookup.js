import React, {useState} from 'react';
import axios from 'axios';
import './styles.css'
import { Link } from "react-router-dom";

const local = 'http://localhost:3000'
const customerLook = '/api/customerlookup';

const CustomerLookup = () => {
    // handle button actions
    const [textBoxValue, setTextBoxValue] = useState();
    const [lastNameValue, setLastNameText] = useState();
    
    const handleTextBoxChange = (event) => {
        setTextBoxValue(event.target.value);
    }

    const handleLastNameText = (event) => {
        setLastNameText(event.target.value);
    }

    //put function to contact db here
    const handleClick = () => {
        //do something with textBoxValue
        const url = local + customerLook + '?firstName=${textBoxValue}&lastName=${lastNameValue}';
        axios.get('http://localhost:3000/api/customerlookup', {
            params: {
              firstName: textBoxValue,
              lastName: lastNameValue
            }
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching customer information:', error);
    //         });
    // };

    
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
                <Link to ="/IntakeForm"><button>
                    Add new Customer   
                </button></Link>
                </div>
            </header>
        </div>
        
        
    );
};

export default CustomerLookup;